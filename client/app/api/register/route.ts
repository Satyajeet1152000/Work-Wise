// library imports
import { NextResponse, NextRequest } from "next/server";

// internal imports
// import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		const { email, password, type } = data;

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: "Server Error" },
			{ status: 500 }
		);
	}
}
