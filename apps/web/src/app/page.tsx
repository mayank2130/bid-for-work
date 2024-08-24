import { auth } from "@/auth";
import Landing from "@repo/ui/components/landing";
import NavBar from "@repo/ui/components/navbar";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <main>
      <NavBar session={session} />
      <Landing />
    </main>
  );
};

export default page;
