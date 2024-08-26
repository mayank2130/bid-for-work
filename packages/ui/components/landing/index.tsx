"use client";
import { useTheme } from "next-themes";
import { Button } from "../../shadcn/button";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  const goToProposal = () => {
    router.push("/jobs");
  };

  const goToBids = () => {
    router.push("/bids");
  };

  const { theme, setTheme } = useTheme();
  return (
    <div className="flex mt-96 justify-center items-center gap-2">
      <Button onClick={goToBids} variant="default" className="text-white">
        Put up a bid
      </Button>
      <Button
        onClick={goToProposal}
        variant="secondary"
        className={`border border-gray-300 text-white`}
      >
        Post a Proposal
      </Button>
    </div>
  );
};

export default Landing;
