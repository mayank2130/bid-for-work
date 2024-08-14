"use client";

import { credentialsLogin } from "../actions/login";
import { Button } from "../shadcn/button";
import { Input } from "../shadcn/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get("email") as string;
        const password = formdata.get("password") as string;

        if (!email || !password)
          return toast.error("Please provide all fields!");

        const toastId = toast.loading("Logging in");

        const error = await credentialsLogin(email, password);

        if (!error) {
          toast.success("Login Successfull", {
            id: toastId,
          });

          router.refresh();
        } else {
          toast.error(String(error), {
            id: toastId,
          });
        }
      }}
      className="flex flex-col gap-4"
    >
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export { LoginForm };
