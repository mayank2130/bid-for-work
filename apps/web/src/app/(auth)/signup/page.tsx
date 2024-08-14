import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/shadcn/card";
import { Input } from "@repo/ui/shadcn/input";
import { Button, buttonVariants } from "@repo/ui/shadcn/button"
import Link from "next/link";
import { hash } from "bcryptjs";
import { prisma } from "@repo/ui/lib/db";
import { redirect } from "next/navigation";
import { signIn } from "@repo/ui/lib/auth";
import { ArrowLeft } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

const Page = () => {
  const signup = async (formdata: FormData) => {
    "use server";
    const name = formdata.get("name") as string | undefined;
    const email = formdata.get("email") as string | undefined;
    const password = formdata.get("password") as string | undefined;

    if (!name || !email || !password)
      throw new Error("Please provide all the fields!");

    const user = await prisma.user.findFirst({ where: { email: email } });

    if (user) throw new Error("User already exists! Try to Login.");

    const hashedPassword = await hash(password, 8);

    await prisma.user.create({
      data: { email: email!, name: name!, password: hashedPassword },
    });

    redirect("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-slate-100">
      <div className="flex justify-center pr-80 w-full">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "sm",
              className:
                "hidden sm:flex items-center gap-1 bg-white p-5 hover:bg-slate-50",
            }),
            "mb-10"
          )}
        >
          <ArrowLeft className="mr-2 h-5 w-5 text-black" />
          <p className="text-black">Back</p>
        </Link>
      </div>
      <Card className="p-3 lg:p-5">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>To Idea Pit</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signup} className="flex flex-col gap-4">
            <Input placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Button type="submit">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/home" });
            }}
          >
            <Button type="submit">Login with Google</Button>
          </form>

          <Link href="/login">Already have an account? Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
