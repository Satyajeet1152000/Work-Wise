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
import { LoginFormSchema } from "@/lib/schema";
import FormSuccess from "../FormSuccess";
import { useRouter } from "next/navigation";
import SocialLoginIconButton from "./SocialLoginIconButton";

const dummyUsers = [
	{ label: "None", email: "", password: "" },
	{ label: "Chevy Hugk", email: "chugk0@devhub.com", password: "password" },
	{
		label: "Tobias Antognoni",
		email: "tantognoni1@gnu.org",
		password: "password",
	},
	{
		label: "Jamie Doerffer",
		email: "jdoerffer2@issuu.com",
		password: "password",
	},
	{
		label: "Deidre Gammack",
		email: "dgammack3@google.pl",
		password: "password",
	},
	{
		label: "Stefania Nellies",
		email: "snellies4@google.com.au",
		password: "password",
	},
];

const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const [formSuccess, setFormSuccess] = useState({
		success: false,
		message: "",
	});
	const router = useRouter();

	const form = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
			type: "credentials",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
		startTransition(async () => {
			try {
				values.type = "credentials";
				// console.log("Form Values", values);

				const res = await fetch(`/api/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				// console.log("Login Response", res);
				const result = await res.json();

				// const res = { ok: true };
				// const result = { success: true, error: "asada" };

				if (res.ok && result.success) {
					setFormSuccess({
						success: true,
						message: "Login Successful",
					});
					router.push("/home");
				} else {
					setFormSuccess({
						success: false,
						message: result.error || "Invalid Credentials",
					});
				}
			} catch (error) {
				// console.error("Error during login", error);
				setFormSuccess({
					success: false,
					message: "Login Form Submission Errors",
				});
			}
		});
	};

	const handleDummyUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedUser = dummyUsers.find(
			(user) => user.label === e.target.value
		);
		if (selectedUser) {
			form.setValue("email", selectedUser.email);
			form.setValue("password", selectedUser.password);
		}
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
						<div className='space-y-3'>
							<label className='block text-sm font-medium '>
								Dummy Users
							</label>
							<select
								onChange={handleDummyUserChange}
								className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent'
								disabled={isPending}
							>
								{dummyUsers.map((user) => (
									<option
										key={user.label}
										value={user.label}
										className='bg-black'
									>
										{user.label}
									</option>
								))}
							</select>
						</div>
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
						className=' w-full bg-[#154879] hover:bg-[#0e3a6a] py-7 text-xl font-normal text-white'
						disabled={isPending}
					>
						Login
					</Button>
				</form>

				<SocialLoginIconButton />
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
