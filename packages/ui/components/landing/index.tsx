import React from "react";
import Image from "next/image";
import { features, footerSections } from "@repo/ui/lib/feature";
import PopularServices from "../PopularServices";
import Hero from "../Hero";
import ProMembers from "../ProMembers";
import { Button } from "../../shadcn/button";
import Footer from "../Footer";

const FreelancePlatform: React.FC = () => {
  return (
    <div className=" min-h-screen p-8">
      <Hero />
      <PopularServices />
      <ProMembers />
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
          <Button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded mr-4">
            Join now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FreelancePlatform;
