"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { categories } from "@repo/ui/lib/feature";
import { Input } from "@repo/ui/shadcn/input";
import { Button } from "@repo/ui/shadcn/button";

const Hero = () => {
  const router = useRouter();

  const goToProposal = () => {
    router.push("/jobs");
  };

  const goToBids = () => {
    router.push("/bids");
  };

  return (
    <div className="max-w-6xl mx-auto p-3 rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-left flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4 mt-16 max-w-2xl tracking-wide">
            Find best people through a{" "}
            <span className="text-blue-600">
              bidding process for your projects.
            </span>
          </h1>
          <h2 className="text-2xl font-medium mt-5">
            Find people with lowest{" "}
            <span className="text-green-500 ">bids</span> and highest
            <span className="text-blue-500"> quality</span>.
          </h2>
        </div>
      </div>

      {/* Landing Search Bar */}
      <div className="flex mx-auto justify-center max-w-2xl">
        <div className="gap-3 flex mt-20 mx-auto">
          <Button
            onClick={goToProposal}
            variant="secondary"
            className={`border border-gray-300 text-white`}
          >
            Post a Proposal
          </Button>
          <Button onClick={goToBids} variant="default" className="text-white">
            Place a Bid
          </Button>
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-4 mb-8">
          {["Jenny", "Veronika", "Jordan", "Collin"].map((name, index) => (
            <div
              key={name}
              className="relative w-24 h-24 rounded-lg overflow-hidden"
            >
              <Image
                src={`/placeholder-${index + 1}.jpg`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1">
                <p className="text-sm text-center">{name}</p>
              </div>
            </div>
          ))}
        </div> */}

      {/* <div className="mb-8">
          <p className="text-sm mb-2">Trusted by:</p>
          <div className="flex gap-4">
            {["Meta", "Google", "Netflix", "P&G", "PayPal", "Payoneer"].map(
              (company) => (
                <div key={company} className="text-gray-300 text-sm">
                  {company}
                </div>
              )
            )}
          </div>
        </div> */}

      <div className="mt-20">
        <h3 className="text-xl font-normal mb-2">Choose by Category</h3>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 mt-3">
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-700 to-gray-400 p-4 rounded-lg text-center"
          >
            <span className="text-2xl mb-2">{icon}</span>
            <p className="text-sm">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
