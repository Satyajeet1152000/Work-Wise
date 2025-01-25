/**
 * we import the handlers object from auth.ts, then destructure it to extract the GET and POST
 * methods and exports them. When a request is made to the /api/auth endpoint, the route.ts file
 * delegates the request to the appropriate handler (GET or POST) provided by NextAuth.
 *
 * These handlers manage the authentication logic, session management, and other related tasks
 * based on the configuration we defined earlier in auth.ts.
 */
import { handlers } from "@/auth";

export const { GET, POST } = handlers;

// Now Create the authentication components
