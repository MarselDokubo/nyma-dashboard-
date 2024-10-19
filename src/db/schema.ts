import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const project = pgTable("project", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
});

export const projectRelation = relations(project, ({ many }) => ({
  feedback: many(feedback),
}));

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id"),
  userName: text("user_name"),
  userEmail: text("user_email"),
  message: text("message"),
  rating: integer("rating"),
});

export const feedbackRelation = relations(feedback, ({ one }) => ({
  project: one(project, {
    fields: [feedback.projectId],
    references: [project.id],
  }),
}));

export const subscription = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  subscribed: boolean("subscribed"),
});
