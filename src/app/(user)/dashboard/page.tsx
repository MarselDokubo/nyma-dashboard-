import NewProjBtn from "@/components/new-project-btn";
import { db } from "@/db";
import { project } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectList from "./project-list";

export default async function Page() {
  const { userId } = auth();
  const userProjects = await db
    .select()
    .from(project)
    .where(eq(project.userId, userId ?? ""));

  if (!userId) return null;
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
        <NewProjBtn />
      </div>
      <ProjectList projects={userProjects} />
    </>
  );
}
