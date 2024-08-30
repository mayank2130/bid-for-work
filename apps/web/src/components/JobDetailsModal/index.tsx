"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@repo/ui/shadcn/button";
import { Bid, Job } from "@/utils/types";
import { getBids } from "@/actions/bids";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface JobDetailsModalProps {
  selectedJob: Job | null;
  isOpen: boolean;
  showBids: () => void;
  isBidsShown: boolean;
  isAnimating: boolean;
  handleClose: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  selectedJob,
  isOpen,
  showBids,
  isBidsShown,
  isAnimating,
  handleClose,
}) => {
  if (!selectedJob) return null;

  const router = useRouter();
  const pathname = usePathname();

  const [bids, setBids] = useState<Bid[] | undefined>(undefined);

  useEffect(() => {
    if (selectedJob) {
      fetchBids();
    }
  }, [selectedJob]);

  const fetchBids = async () => {
    const response = await getBids(selectedJob.id);
    if (response.status === "success") {
      const data = response.data
        ? Array.isArray(response.data)
          ? response.data
          : [response.data]
        : undefined;
      setBids(data);
    } else {
      setBids(undefined);
    }
  };

  const placeBid = () => {
    if (selectedJob) {
      const jobDetails = encodeURIComponent(JSON.stringify(selectedJob));
      router.push(`/bids/${selectedJob.id}?jobDetails=${jobDetails}`, {
        scroll: false,
      });
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`fixed inset-0 bg-opacity-50 flex justify-end items-stretch transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleClose}
    >
      <div
        className={` ${theme === "light" ? "bg-white": "bg-black"}  w-full max-w-4xl p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pb-40 flex flex-col h-full overflow-auto scrollbar-hide mb-40">
          <style jsx global>{`
            .scrollbar-hide {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex flex-row gap-12">
            <div className="">
              <h3 className="font-bold mb-2">Qualifications:</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Experience in assembling a team of senior developers with
                  demonstrated expertise in various tech stacks and other
                  relevant technologies.
                </li>
                <li>
                  Strong communication skills in English, with the ability to
                  convey technical concepts to non-technical team members.
                </li>
                <li>Ability to work in an agile development environment.</li>
              </ul>

              <h3 className="font-bold mb-2">Why Partner with Us?</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Work on innovative and impactful projects.</li>
                <li>Collaborative and supportive work culture.</li>
                <li>Flexible work arrangements.</li>
                <li>
                  Competitive compensation based on experience and project
                  scope.
                </li>
              </ul>

              <p className="mb-4">
                If your agency possesses the expertise and experience we seek,
                we would love to hear from you! Please submit your resume,
                portfolio or website, case studies, and a brief outline of your
                development team's qualifications.
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">$ {selectedJob.salary}</p>
                  <p className="text-sm text-gray-500">Fixed-price</p>
                </div>
                <div>
                  <p className="font-bold">Expert</p>
                  <p className="text-sm text-gray-500">
                    I am willing to pay higher rates for the most experienced
                    freelancers
                  </p>
                </div>
              </div>
              {isBidsShown ? (
                <div className="">
                  {bids?.map((bid) => <div key={bid.id}>{bid.message}</div>)}
                </div>
              ) : null}

              {isBidsShown ? null : (
                <Button onClick={showBids} className="text-white">
                  View current Bids
                </Button>
              )}
            </div>

            <div className="">
              <div className="flex justify-between items-center mb-4">
                <a href="#" className="text-green-500 text-sm">
                  Open job in a new window
                </a>
              </div>

              <h1 className="text-2xl font-bold mb-2">
                {selectedJob.companyName}
              </h1>
              <div className="text-sm text-gray-500 mb-4">
                <span>Posted yesterday</span> &middot; <span>Worldwide</span>
              </div>

              <p className="text-sm mb-4">
                Specialized profiles can help you better highlight your
                expertise when submitting proposals to jobs like these.{" "}
                <a href="#" className="text-green-500">
                  Create a specialized profile
                </a>
                .
              </p>

              <div className="mb-4">
                <Button
                  onClick={placeBid}
                  className="text-white w-full py-2 rounded-md mb-2"
                >
                  Put up a Bid
                </Button>
              </div>

              <div className="text-sm mb-4">
                <p>Required Connects to submit a proposal: 10</p>
                <p>Available Connects: 120</p>
              </div>

              <div className="mb-4">
                <h2 className="font-bold mb-2">About the client</h2>
                <p>Payment method not verified</p>
                <p>Phone number verified</p>
                <p>India</p>
                <p>12:13 AM</p>
                <p>5 jobs posted</p>
                <p>0% hire rate, 5 open jobs</p>
                <p>Tech & IT</p>
                <p>Mid-sized company (10-99 people)</p>
                <p>Member since Jul 30, 2024</p>
                <h2 className="font-bold mb-2">Job details</h2>
                <p className="mb-2">Needs to hire 5 Freelancers</p>
                <p className="mb-4">
                  they must be fluent in English and I prefer the developer that
                  has US accent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
