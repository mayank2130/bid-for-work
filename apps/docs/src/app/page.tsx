import { auth } from "../../../web/src/auth";
import NavBar from "@repo/ui/components/navbar";

const page = async () => {
  const session = await auth();
  return (
    <main className="pt-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <NavBar session={session} />
  </main>
  )
}

export default page