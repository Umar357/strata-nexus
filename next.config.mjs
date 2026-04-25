/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

/**
 * Static export for GitHub Pages at https://umar357.github.io/strata-nexus/
 *
 * - `output: "export"` runs `next build` straight to `out/` (no Node server)
 * - `basePath` + `assetPrefix` map every absolute URL into the project sub-path
 *   so `/_next/...`, `/favicon.svg`, etc. resolve under `/strata-nexus`
 * - `images.unoptimized` disables the Next.js image runtime (no /strata-nexus/_next/image
 *   endpoint exists on a static host)
 * - `trailingSlash` keeps the URL shape consistent with what GH Pages serves
 *
 * Dev mode (`NODE_ENV !== "production"`) skips basePath so localhost stays at "/".
 */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/strata-nexus" : "",
  assetPrefix: isProd ? "/strata-nexus/" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
