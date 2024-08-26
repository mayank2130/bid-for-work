import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  return (
    <div className="absolute inset-0 min-h-screen w-full flex flex-col items-center p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
