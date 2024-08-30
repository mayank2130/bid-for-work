"use client";
import { useState, useEffect } from "react";
import { DollarSign } from "lucide-react";
import { Job } from "../utils/types";
import { Button } from "@repo/ui/shadcn/button";
import JobDetailsModal from "./JobDetailsModal";
import MaxWidthWrapper from "@repo/ui/components/MaxWidthWrapper";
interface JobListingProps {
  jobs: Job[];
}

const JobListing: React.FC<JobListingProps> = ({ jobs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showBids, setShowBids] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  }, [isOpen]);

  const showOnClick = () => {
    setShowBids(true);
  };

  const handleOpen = (job: Job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      setShowBids(false);
      setSelectedJob(null);
    }, 300);
  };

  return (
    <MaxWidthWrapper>
      <div className="p-4 mt-10">
        {jobs.map((job) => (
          <div className="pb-4">
            <div key={job.id} className="rounded-lg shadow-sm border-b-2  p-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {/* <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl font-bold ${job.logoBackground || 'bg-red-500'}`}>
                {job.logoText || job.company[0]}
              </div> */}
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{job.companyName}</h2>
                  <p className="text-sm ">{job.description}</p>
                  <div className="flex space-x-2 mt-2">
                    {/* {job.activelyHiring && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    <Briefcase className="w-3 h-3 mr-1" />
                    ACTIVELY HIRING
                  </span>
                )}
                {job.growingFast && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    GROWING FAST
                  </span>
                )}
                {job.sameInvestor && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                    <DollarSign className="w-3 h-3 mr-1" />
                    SAME INVESTOR AS YELP
                  </span>
                )} */}
                  </div>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500">
                  {/* {job.employeeCount} */}
                </div>
              </div>
              <div className="mt-4 px-4 ">
                <div className="flex justify-between items-center">
                  <div>
                    {/* <h3 className="text-lg font-semibold">{job.position}</h3> */}
                    <p className="text-sm ">{job.location}</p>
                    <div className="flex flex-row items-center">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-sm ">{job.salary}</span>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button
                      onClick={() => handleOpen(job)}
                      className="px-3 py-1 text-white rounded-md text-sm"
                    >
                      Place a Bid
                    </Button>
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <div>
                    {/* <span className="font-medium text-green-600">{job.recruiterStatus}</span> */}
                    {/* <span> • {job.postedTime}</span> */}
                  </div>
                  {/* <div>
                <Button className="mr-2">Report</Button>
                <Button>Hide</Button>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
        <JobDetailsModal
          selectedJob={selectedJob}
          isOpen={isOpen}
          showBids={showOnClick}
          isBidsShown={showBids}
          isAnimating={isAnimating}
          handleClose={handleClose}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default JobListing;
