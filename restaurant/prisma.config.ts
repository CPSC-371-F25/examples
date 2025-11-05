import { defineConfig, env } from "prisma/config";
import "dotenv/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  // TODO: Seeding is not working. Created a tsconfig.ts-node.json, still nothing.
    // seed: "ts-node --project tsconfig.ts-node.json prisma/seed.ts" // docs say to put this in package.json, but CLI app says to put it here.
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
