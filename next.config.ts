import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

// Vars needed for enquiry emails. Missing these only warns — the site still
// runs, but enquiry submissions won't notify the restaurant.
const RECOMMENDED_ENV = ["RESEND_API_KEY", "ENQUIRY_FROM_EMAIL", "ENQUIRY_NOTIFY_EMAIL"] as const;

function validateEnv(isProductionBuild: boolean) {
  const missingRecommended = RECOMMENDED_ENV.filter((k) => !process.env[k]);
  if (missingRecommended.length > 0 && isProductionBuild) {
    console.warn(
      `⚠️  Missing recommended env vars (enquiry emails will be skipped): ${missingRecommended.join(", ")}.\n` +
        "    Set them in .env.local locally, or in your host's env vars (e.g. Vercel), then redeploy."
    );
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default (phase: string) => {
  validateEnv(phase === PHASE_PRODUCTION_BUILD);
  return nextConfig;
};
