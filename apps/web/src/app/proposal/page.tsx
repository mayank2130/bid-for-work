import { auth } from "@/auth";
import NewJobModal from "@/src/components/jobmodal";
import Navbar from "@repo/ui/components/navbar";

const ManageJobsPage = async () => {
  const session = await auth();

  return (
    <div className="w-full p-2">
      <Navbar session={session} />
      <NewJobModal />
    </div>
  );
};

export default ManageJobsPage;
