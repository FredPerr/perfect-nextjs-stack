import withBundleAnalyzer from "@next/bundle-analyzer";
import env from "./env.ts";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPlugins(
  [[withBundleAnalyzer({ enabled: env.BUNDLE_ANALYZER_ENABLED })]],
  { nextConfig },
);
