import NewProjBtn from "@/components/new-project-btn";
import { db } from "@/db";
import { project } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = auth();
  const allProjects = await db.select().from(project);

  if (!userId) return null;
  return (
    <div className="">
      <NewProjBtn />
    </div>
  );
}
