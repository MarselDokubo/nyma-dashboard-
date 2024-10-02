CREATE TABLE IF NOT EXISTS "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"url" text
);
--> statement-breakpoint
DROP TABLE "users";