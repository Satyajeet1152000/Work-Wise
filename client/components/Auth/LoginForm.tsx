"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/lib/schema";
import FormSuccess from "../FormSuccess";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useUser } from "@/context/UserContext";

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const [formSuccess, setFormSuccess] = useState({
		success: false,
		message: "",
	});

	const { login } = useUser();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		startTransition(async () => {
			// console.log(values);

			// Fetch the data from the backend
			let res = await fetch(`${process.env.API_URL}/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const data = await res.json();

			if (data.success) {
				login(data.user);
				redirect("/dashboard");
			} else {
				// Set form error state
				setFormSuccess({
					success: false,
					message: data.error,
				});
			}
		});
	};

	return (
		<CardWrapper
			footerText="Don't have an account? Create a"
			footerHrefText='new account'
			footerHref='/register'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className=' space-y-6'
				>
					<div className=' space-y-6'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder='Your eamil'
											type='email'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										{/* TODO: Change password text dot to asterisk */}
										<Input
											{...field}
											disabled={isPending}
											placeholder='Password'
											type='password'
											className=''
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormSuccess
						success={formSuccess.success}
						message={formSuccess.message}
					/>
					<Button
						type='submit'
						className=' w-full bg-[#154879] hover:bg-[#0e3a6a] py-7 text-xl font-normal'
						disabled={isPending}
					>
						Login
					</Button>
				</form>

				<div className='mt-4 space-y-2'>
					<Button
						onClick={() => signIn("google")}
						className='w-full bg-red-500 text-white p-2 rounded'
					>
						Sign in with Google
					</Button>
					<Button
						onClick={() => signIn("facebook")}
						className='w-full bg-blue-600 text-white p-2 rounded'
					>
						Sign in with Facebook
					</Button>
					<Button
						onClick={() => signIn("apple")}
						className='w-full bg-black text-white p-2 rounded'
					>
						Sign in with Apple
					</Button>
				</div>
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
