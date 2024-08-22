"use client";
import React from "react";
import { Button } from "@repo/ui/shadcn/button";
import { Job } from "../bids";

interface JobDetailsModalProps {
  selectedJob: Job | null;
  isOpen: boolean;
  isAnimating: boolean;
  handleClose: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  selectedJob,
  isOpen,
  isAnimating,
  handleClose,
}) => {
  if (!selectedJob) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white w-full max-w-md p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{selectedJob.title}</h2>
        <p className="mb-2">
          <strong>Company:</strong> {selectedJob.companyName}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {selectedJob.location}
        </p>
        <p className="mb-2">
          <strong>Salary:</strong> {selectedJob.salary} {selectedJob.currency}
        </p>
        <p className="mb-6">
          <strong>Description:</strong> {selectedJob.description}
        </p>
        <Button className="px-5 py-1 text-white rounded-md text-sm">Bid</Button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
