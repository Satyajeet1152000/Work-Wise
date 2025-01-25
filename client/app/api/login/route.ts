// library imports
import { NextResponse, NextRequest } from "next/server";

// internal imports
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest, res: NextResponse) {
	const data = await req.json();
	const { email, password, type } = data;

	// console.log("Login API Request", data);
	try {
		if (type === "credentials") {
			await signIn("credentials", {
				redirect: false,
				email,
				password,
				type,
			});
		} else {
			await signIn("social", {
				redirect: false,
				authCode: email,
			});
		}

		// console.log("Next Login API Result");

		// if no error from  signIn in auth.ts, then return success true else it falls to the catch block
		return NextResponse.json({ success: true });
	} catch (error) {
		// console.log("Next Login API CAtch Block", error);

		// return proper error message provided from server to form to display proper error
		// like email not found or password is wrong.
		let errMessage: string | undefined = "";
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					errMessage = "Invalid Credentials.";
					break;
				default:
					errMessage = error.cause?.err?.message;
					break;
			}
		}
		return NextResponse.json(
			{ success: false, error: errMessage },
			{ status: 500 }
		);
	}
}
