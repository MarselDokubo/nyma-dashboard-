import { db } from "@/db";
import { eq } from "drizzle-orm";
import { project as projectSchema } from "@/db/schema";
import Link from "next/link";
async function Project({
  params,
}: {
  params: {
    projectId: string;
  };
}) {
  const projects = await db.query.project.findMany({
    where: eq(projectSchema.id, +params.projectId),
    with: {
      feedback: true,
    },
  });

  if (!params.projectId) return <div>Invalid Project ID</div>;

  const project = projects[0];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className=""></div>
        <h1 className="text-3xl mb-3 font-bold">{project.name}</h1>
        <h2 className="text-primary-background text-xl mb-2">
          {project.description}
        </h2>
        {project.url && (
          <Link
            href={project.url}
            className="text-indigo-700 underline text-lg"
          >
            Visit site
          </Link>
        )}
      </div>
    </div>
  );
}

export default Project;
