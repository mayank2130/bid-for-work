import { auth } from "@/auth";
import Bids from "@/src/components/bids";
import NavBar from "@repo/ui/components/navbar";

const Page = async () => {
  const session = await auth();
  return (
    <div className="overflow-y-auto w-full flex-1 px-40 mt-8">
      <NavBar session={session} />

      <Bids />
    </div>
  );
};

export default Page;
