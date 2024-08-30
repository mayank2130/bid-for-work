import { auth } from "@/auth";
import Bids from "@/src/components/bids";
import NavBar from "@repo/ui/components/navbar";

const Page = async () => {
  const session = await auth();
  return (
    <div className="min-h-screen pt-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
    <NavBar session={session} />
    <Bids />
  </div>
  );
};

export default Page;
