import LoginForm from "@repo/ui/components/LoginForm";

const LoginPage = () => {
  return (
    <section className="w-full h-full flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
