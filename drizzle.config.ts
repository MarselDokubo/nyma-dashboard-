import "./envConfig.ts";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "src/db/schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "supabase",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
