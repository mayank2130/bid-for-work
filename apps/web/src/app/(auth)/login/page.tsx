import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/shadcn/card";

import { Button, buttonVariants } from "@repo/ui/shadcn/button";
import Link from "next/link";
import { LoginForm } from "@repo/ui/src/Form";
import { auth, signIn } from "@repo/ui/lib/auth";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

const Page = async () => {
  const session = await auth();

  if (session?.user) redirect("/home");

  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-slate-100">
      <div className="flex justify-center pr-80 w-full">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              size: "sm",
              className: "hidden sm:flex items-center gap-1 bg-white p-5 hover:bg-slate-50",
            }),
            "mb-10"
          )}
        >
          <ArrowLeft className="mr-2 h-5 w-5 text-black" />
          <p className="text-black">Back</p>
        </Link>
      </div>
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>To Idea Pit</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
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

          <Link href="/signup">Don&apos;t have an account? Signup</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
