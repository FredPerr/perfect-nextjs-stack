import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BUNDLE_ANALYZER_ENABLED: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    DATABASE_URL: z.string(),
  },
  client: {
    // NEXT_PUBLIC_... keys here
  },
  runtimeEnv: {
    BUNDLE_ANALYZER_ENABLED: process.env.BUNDLE_ANALYZER_ENABLED,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});

export default env;
