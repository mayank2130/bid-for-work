"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/shadcn/dialog";
import { Button } from "@repo/ui/shadcn/button";
import NewJobForm from "../NewJobForm";
import { useState } from "react";

const NewJobModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Job</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter the Job details below</DialogTitle>
          <DialogDescription>
            This form contains all the job details that are required to post a
            job
          </DialogDescription>
        </DialogHeader>
        <NewJobForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default NewJobModal;
