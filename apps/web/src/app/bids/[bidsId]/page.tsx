"use client";

import { Job } from "@/src/utils/types";
import MaxWidthWrapper from "@repo/ui/components/MaxWidthWrapper";
import { useSearchParams } from "next/navigation";

const BidsPage = ({ params }: { params: { bidId: string } }) => {
  const searchParams = useSearchParams();
  const bidId = params.bidId;
  const jobDetailsParam = searchParams.get("jobDetails");

  let jobDetails: Job | null = null;
  if (jobDetailsParam) {
    try {
      jobDetails = JSON.parse(decodeURIComponent(jobDetailsParam));
    } catch (error) {
      console.error("Failed to parse job details:", error);
    }
  }

  if (!jobDetails) {
    return <div>Error: No job details available</div>;
  }

  const skills = [
    "Web Application",
    "Full-Stack Development",
    "TypeScript",
    "Python",
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white p-6 h-screen">
      <MaxWidthWrapper>
        <h1 className="text-3xl font-bold mb-6">Submit a proposal</h1>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Proposal settings</h2>
          {/* <p>This proposal requires {requiredConnects} Connects</p> */}
          {/* <p>When you submit this proposal, you'll have {remainingConnects} Connects remaining.</p> */}
        </div>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Job details</h2>
          <h3 className="text-lg font-medium mb-2">{jobDetails.title}</h3>
          <div className="flex items-center space-x-4 mb-2">
            <span className="bg-gray-800 px-3 py-1 rounded">
              {jobDetails.currency}
            </span>
            <span>Posted {jobDetails.country}</span>
          </div>
          <p className="mb-4">{jobDetails.description}</p>
          <div className="flex justify-between">
            <div>
              <span className="mr-2">🎓</span>
              <span>{jobDetails.description}</span>
              <p className="text-gray-400">Experience level</p>
            </div>
            <div>
              <span className="mr-2">💰</span>
              <span>{jobDetails.salary}</span>
              <p className="text-gray-400">Fixed-price</p>
            </div>
          </div>
          <a href="#" className="text-green-500 mt-4 block">
            View job posting
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Skills and expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-800 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BidsPage;
