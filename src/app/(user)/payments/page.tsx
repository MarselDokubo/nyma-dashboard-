import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscription } from "@/db/schema";
import { eq } from "drizzle-orm";
import ManageSubscription from "./manage-subscription";

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const userSubscription = await db.query.subscription.findFirst({
    where: eq(subscription.userId, userId),
  });

  const plan =
    userSubscription && userSubscription.subscribed ? "premium" : "free";

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-4xl mb-3">Subscription Details</h1>
      <p className="mb-2 text-lg">Your current plan is: {plan}</p>
      <ManageSubscription />
    </div>
  );
};

export default page;
