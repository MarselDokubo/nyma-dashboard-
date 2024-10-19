import { db } from "@/db";
import { subscription } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createSubscription({
  stripeCustomerId,
}: {
  stripeCustomerId: string;
}) {
  await db
    .update(subscription)
    .set({
      subscribed: true,
    })
    .where(eq(subscription.stripeCustomerId, stripeCustomerId));
}

export async function cancelSubscription({
  stripeCustomerId,
}: {
  stripeCustomerId: string;
}) {
  await db
    .update(subscription)
    .set({
      subscribed: false,
    })
    .where(eq(subscription.stripeCustomerId, stripeCustomerId));
}

export async function getSubscription({ userId }: { userId: string }) {
  const userSubscription = await db.query.subscription.findFirst({
    where: eq(subscription.userId, userId),
  });
  return userSubscription?.subscribed;
}
