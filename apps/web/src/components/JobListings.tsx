import React from 'react';
import { Briefcase, TrendingUp, DollarSign } from 'lucide-react';
import { Job } from './bids';
interface JobListingProps {
    jobs: Job[];
  }
  
  const JobListing: React.FC<JobListingProps> = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {/* <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl font-bold ${job.logoBackground || 'bg-red-500'}`}>
                {job.logoText || job.company[0]}
              </div> */}
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{job.companyName}</h2>
              <p className="text-sm text-gray-600">{job.description}</p>
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
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <div>
                {/* <h3 className="text-lg font-semibold">{job.position}</h3> */}
                <p className="text-sm text-gray-600">{job.location} • {job.salary}</p>
              </div>
              <div className="space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Save</button>
                <button className="px-3 py-1 bg-black text-white rounded-md text-sm">Learn more</button>
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <div>
                {/* <span className="font-medium text-green-600">{job.recruiterStatus}</span> */}
                {/* <span> • {job.postedTime}</span> */}
              </div>
              <div>
                <button className="mr-2">Report</button>
                <button>Hide</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListing;