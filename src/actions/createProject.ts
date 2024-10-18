"use server";
import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { project as projectSchema } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const { userId } = auth();

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  };

  const [newProject] = await db
    .insert(projectSchema)
    .values(project)
    .returning({ insertedId: projectSchema.id });

  redirect(`/projects/${newProject.insertedId}/instructions`);
}
