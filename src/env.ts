import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    // Add server-side env vars here, e.g. DATABASE_URL: z.string().url(),
  },
  client: {
    // Add client-side env vars here, prefixed with NEXT_PUBLIC_
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // Add mapping for client-side vars here
  },
});
