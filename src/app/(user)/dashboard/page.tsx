import NewProjBtn from "@/components/new-project-btn";
import { db } from "@/db";
import { project } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import ProjectList from "./project-list";
import { getSubscription } from "@/actions/userSubscriptions";
import { maxFreeProjects } from "@/lib/payment";

export default async function Page() {
  const { userId } = auth();
  if (!userId) return null;
  const userProjects = await db
    .select()
    .from(project)
    .where(eq(project.userId, userId ?? ""));

  const subscribed = await getSubscription({ userId });

  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
          {subscribed !== true &&
          userProjects.length > maxFreeProjects ? null : (
            <NewProjBtn />
          )}
        </div>
        <ProjectList projects={userProjects} subscribed={subscribed} />
      </div>
    </>
  );
}
