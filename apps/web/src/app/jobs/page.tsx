import { auth } from "../../auth";
import NewJobModal from "@/components/jobmodal";
import Navbar from "@repo/ui/components/navbar";

const ManageJobsPage = async () => {
  const session = await auth();

  return (
    <div className="w-full p-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <Navbar session={session} />
      <NewJobModal />
    </div>
  );
};

export default ManageJobsPage;
