"use client";
import { useState, useEffect } from "react";
import { Button } from "@repo/ui/shadcn/button";
import NewJobForm from "../NewJobForm";
import { useTheme } from "next-themes";

const NewJobModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };
  
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };
  
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg-slate-900 text-white hover:bg-slate-800"
      >
        Create Job Proposal
      </Button>
      <div
        className={`fixed inset-0 bg-gray-950 bg-opacity-50 flex justify-end items-stretch transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      >
        <div
          className={`  ${theme === "light" ? "bg-white" : "bg-black"}  w-full max-w-md p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isAnimating ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-4">
            Enter the Job details below
          </h2>
          <p className="mb-6">
            This form contains all the job details that are required to post a
            job
          </p>
          <NewJobForm setOpen={handleClose} />
        </div>
      </div>
    </>
  );
};

export default NewJobModal;
