import { auth } from "@/auth";
import Footer from "@repo/ui/components/Footer";
import Landing from "@repo/ui/components/landing";
import NavBar from "@repo/ui/components/navbar";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <main className="pt-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <NavBar session={session} />
      <Landing />
      <Footer />
    </main>
  );
};

export default page;
