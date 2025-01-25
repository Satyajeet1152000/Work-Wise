/**
 * Next Auth #5 -> Create your Auth.js/.ts configuration.
 *
 */

// library imports
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { decode, JwtPayload } from "jsonwebtoken";

// types imports
import type { NextAuthConfig, Session, User } from "next-auth";
import { UserType } from "./types/userTytpe";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { CredentialsType, SocialCredentialsType } from "./types/loginType";
import { LoginFormSchema } from "./lib/schema";

/**
 * we have to modify some of the types in the next-auth library with some of our own properties.
 *
 * Used the TypeScript module augmentation feature to extend the User, AdapterUser, JWT interfaces
 * from NextAuth with properties defined in UserType from our user.ts file. This ensures that our
 * custom user properties are recognized throughout the Auth.js configuration.
 */
declare module "next-auth" {
	interface User extends UserType {}
}

declare module "next-auth/adapters" {
	interface AdapterUser extends UserType {}
}

declare module "next-auth/jwt" {
	interface JWT extends UserType {}
}

/**
 * declare authOptions object which we'll use to initialize NextAuth at the end.
 */

const authOptions = {
	// Add authentication providers here (e.g., CredentialsProvider, GoogleProvider)
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			authorize: async (credentials) => {
				const validateCredentials =
					LoginFormSchema.safeParse(credentials);
				if (!validateCredentials.success) return null;

				// console.log(validateCredentials);

				const { email, password } = validateCredentials.data;

				let res = await fetchUser(`${process.env.API_URL}/auth/login`, {
					email,
					password,
				});

				// check if the response is success or not. if not, throw an error else go further to create session
				if (!res.success) throw new Error(res.error);

				const decodedToken = decode(res.token) as JwtPayload;

				if (!decodedToken) {
					return null;
				}

				console.log(decodedToken);

				const user: UserType = {
					id: decodedToken._doc._id,
					name: decodedToken._doc.name,
					email: decodedToken._doc.email,
					emailVerified: decodedToken._doc.emailVerified,
					token: res.token,
					password: decodedToken._doc.password,
					avatar: decodedToken._doc.avatar,
					role: decodedToken._doc.role,
					department: decodedToken._doc.department,
					position: decodedToken._doc.position,
					dateJoined: decodedToken._doc.dateJoined,
					manager: decodedToken._doc.manager,
					lastLogin: decodedToken._doc.lastLogin,
					preferences: decodedToken._doc.preferences,
				};

				return user;
			},
		}),
	],

	// Add custom authentication callbacks here (e.g., signIn, signOut, jwt, session)
	callbacks: {
		/**
		 * jwt callback:
		 * The jwt function is called during the authentication process to add user properties to the JWT token.
		 * When a user signs in, their properties, such as id, avatar, name, email, accessToken, subId, and
		 * refreshToken, are added to the token. This token is then used to securely manage user sessions.
		 */
		async jwt({ token, user }: { token: JWT; user?: User | AdapterUser }) {
			// Add the user properties to the token after signing in
			if (user) {
				token.id = user.id as string;
				token.name = user.name;
				token.email = user.email;
				token.emailVerified = user.emailVerified;
				token.password = user.password;
				token.avatar = user.avatar;
				token.role = user.role;
				token.department = user.department;
				token.position = user.position;
				token.dateJoined = user.dateJoined;
				token.manager = user.manager;
				token.lastLogin = user.lastLogin;
				token.preferences = user.preferences;
				token.token = user.token;
			}
			return token;
		},

		/**
		 * session callback:
		 * The session function is called whenever a session is accessed to add user data to the session object.
		 * A user object is created using the properties from the token. This user object is then added to the session,
		 * ensuring that user data is available whenever the session is accessed.
		 * The email property is ensured to be a string, and emailVerified is set to null if not used.
		 */
		async session({ session, token }: { session: Session; token: JWT }) {
			// Create a user object with token properties
			const userObject: AdapterUser = {
				id: token.id,
				name: token.name,
				email: token.email as string,
				password: token.password,
				avatar:
					token.avatar ||
					"https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
				role: token.role,
				department: token.department,
				position: token.position,
				dateJoined: token.dateJoined,
				manager: token.manager,
				lastLogin: token.lastLogin,
				preferences: token.preferences,
				emailVerified: token.emailVerified as Date,
				token: token.token,
			};

			// Add the user object to the session
			session.user = userObject;

			return session;
		},
	},

	// Customize authentication-related pages (e.g., signIn, error)
	// auth.js has default authentication-related pages for signIn, error, signOut e.t.c.
	//  But in this block , we can override it with our customized pages by specifying their paths.
	pages: {
		// By setting this to /auth/login, we direct users to our custom login page instead of the default Auth.js sign-in page.
		signIn: "/login", // Custom sign-in page

		// Optionally, we can specify a custom error page. This is commented out here, but if we wanted to use a custom error page, we could set its path like so: error: /auth/error.
		// error: "/auth/error", // Custom error page
	},

	// Configure session options (e.g., JWT settings, session management)
	// In the session section of the authOptions object, we specify how sessions should be managed.
	session: {
		strategy: "jwt",
	},
	secret: process.env.JWT_SECRET,
	// Next Auth #5 -> app/api/auth/[...nextauth]/route.ts setup
} satisfies NextAuthConfig;

/**
 * we initialize NextAuth with the authOptions configuration and destructure the returned
 * methods (handlers, auth, signIn, signOut) for use in our application.
 *
 * handlers: Middleware for handling NextAuth requests.
 * auth: A universal method to interact with Auth.js in your Next.js app.
 * signIn: Method to trigger sign-in.
 * signOut: Method to trigger sign-out.
 */
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

/**
 * If we use multipple Credential ptovider then
 * Each provider has a unique id to distinguish between the two methods of authentication.
 *
 * By using CredentialsProvider twice with different id values,
 * we can manage multiple authentication methods seamlessly in our application.
 * using fetchUser and createUser functions:
 */
async function fetchUser(
	url: string,
	body: CredentialsType | SocialCredentialsType
) {
	try {
		let user = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const response = await user.json();

		// whatever is the resonse from the server, we return it either sucess is true or false
		return response;
	} catch (error) {
		// console.error(`Error during fetch: ${error}`);
		return { success: false, error: "Server Error" };
	}
}
