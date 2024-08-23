"use client";
import { getJobs } from "@/src/actions/job";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import JobListing from "../JobListings";
import { Job } from "@/src/utils/types";



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
    <>
      {jobs === undefined ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="animate-spin h-4 w-4" />
        </div>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <JobListing jobs={jobs} />
      )}
    </>
  );
};

export default Page;
