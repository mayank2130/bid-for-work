import React from "react";
import Image from "next/image";
import { features } from "@repo/ui/lib/feature";
import PopularServices from "../PopularServices";
import Hero from "../Hero";
import ProMembers from "../ProMembers";

const FreelancePlatform: React.FC = () => {
  return (
    <div className=" min-h-screen p-8">
      <Hero />
      <PopularServices />
      <ProMembers />

      {/* Fiverr Pro section */}

      {/* Make it all happen section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Make it all happen with freelancers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.text} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded mr-4">
            Join now
          </button>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">fiverr logo maker</h3>
            <h2 className="text-3xl font-bold mb-4">
              Make an incredible logo{" "}
              <span className="text-orange-500">in seconds</span>
            </h2>
            <p className="mb-6">
              Pre-designed by top talent. Just add your touch.
            </p>
            <button className="bg-black text-white px-6 py-2 rounded">
              Try Fiverr Logo Maker
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/logo-maker.jpg"
              alt="Logo Maker"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelancePlatform;
