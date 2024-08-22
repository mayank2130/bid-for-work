"use server";

import { auth } from "@/auth";
import { SAPayload } from "@/types";
import {} from "@repo/ui/zod/profile";
import { prisma } from "@repo/ui/lib/db";
import { NewJob } from "@repo/ui/zod/job";

export const placeBid = async (data: NewJob): Promise<SAPayload> => {
  const session = await auth();
  if (!session) {
    return { status: "error", message: "internal server error" };
  }

  try {
    const newBid = await prisma.bid.create({
      data: {
        userId: session.user.id as string,
        jobId: data.companyName,
        amount: 200,
        currency: "USD",
      },
    });

    return { status: "success", message: "Job created Successfully" };
  } catch (error) {
    return { status: "error", message: "Internal Server Error" };
  }
};
