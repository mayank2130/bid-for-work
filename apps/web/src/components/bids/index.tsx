"use client";
import { getJobs } from "@/src/actions/job";
import React, { SetStateAction, useEffect, useState } from "react";
import { Loader2, Banknote, MapPin, SquareArrowOutUpRight } from "lucide-react";
import JobListing from "../JobListings";

export interface Job {
  id: string;
  userId: string;
  title: string;
  description: string;
  companyName: string;
  salary: string;
  currency: "USD" | "INR";
  location: string;
  state: string | null;
  country: string | null;
}

const Page = () => {
  const [jobs, setJobs] = useState<Job[] | undefined>(undefined);

  const fetchJobs = async () => {
    const response = await getJobs();
    if (response.status === "success") {
      setJobs(response.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-4">
      {jobs === undefined ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        // jobs.map((job) => (
        //   <div
        //     key={job.id}
        //     className="max-w-full mx-auto h-fit w-full flex flex-col sm:flex-row items-start gap-4 border border-gray-200 hover:border-gray-300 transition-all shadow-sm rounded-md px-4 py-3 mb-4"
        //   >
        //     <div className="logo-area p-2 flex-shrink-0">
        //       <div className="h-20 w-20 bg-gray-100 border border-gray-300 rounded-full"></div>
        //     </div>
        //     <div className="p-2 h-full flex-grow flex flex-col gap-1">
        //       <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-gray-700">
        //         {job.title}
        //       </h3>
        //       <h4 className="text-sm sm:text-base tracking-tight font-semibold text-gray-500">
        //         {job.companyName}
        //       </h4>
        //       <span className="flex items-end gap-2 text-gray-500">
        //         <Banknote className="text-gray-700" />
        //         <h4 className="text-sm sm:text-base tracking-tight font-medium">
        //           {job.salary}
        //         </h4>
        //       </span>

        //       <div className="w-full flex flex-col sm:flex-row justify-between">
        //         <span className="flex items-end gap-2 text-gray-500">
        //           <MapPin className="text-gray-700" />
        //           <h4 className="text-sm sm:text-base tracking-tight font-medium">
        //             {job.location}
        //           </h4>
        //         </span>
        //         <p className="flex gap-2 items-center cursor-pointer hover:underline mt-2 sm:mt-0">
        //           view details{" "}
        //           <span>
        //             <SquareArrowOutUpRight size={14} />
        //           </span>
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // ))

        <JobListing jobs={jobs} />
      )}
    </div>
  );
};

export default Page;
