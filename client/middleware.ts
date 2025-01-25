import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const publicRoutes = ["/login", "/register"];

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

	const loginUrl = new URL("/login", nextUrl.origin);

	// If the request is for the login API route, don't redirect
	if (nextUrl.pathname === "/api/login") {
		return NextResponse.next(); // Allow the request to continue to the API
	}

	if (!isPublicRoutes && !isLoggedIn) {
		// console.log("redirecting");
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
});

// Apply middleware to specific routes
export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
