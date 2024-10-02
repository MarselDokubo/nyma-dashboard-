import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const project = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
});
