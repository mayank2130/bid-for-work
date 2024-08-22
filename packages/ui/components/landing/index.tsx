"use client"
import { Button } from "../../shadcn/button";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  const goToProposal = () => {
    router.push("/proposal");
  };

  const goToBids = () => {
    router.push("/bids");
  };
  return (
    <div className="flex h-screen justify-center items-center gap-2">
      <Button onClick={goToBids} variant="default" className="text-white">
        Put up a bid
      </Button>
      <Button onClick={goToProposal} variant="secondary" className="border border-gray-300">
        Post a Proposal
      </Button>
    </div>
  );
};

export default Landing;
