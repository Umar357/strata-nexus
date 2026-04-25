/** @type {import('next').NextConfig} */

/**
 * The site has two deploy targets:
 *
 *   - GitHub Pages → served from a sub-path: https://umar357.github.io/strata-nexus/
 *     Triggered by the GH Actions workflow which sets `GITHUB_PAGES=true`.
 *     Needs `output:"export"` + basePath/assetPrefix.
 *
 *   - Vercel → served from a domain root.
 *     Vercel does NOT set `GITHUB_PAGES`, so basePath stays empty here. Vercel
 *     can still consume `output:"export"` (it just serves the `out/` dir as a
 *     static deployment), so the same config works for both targets.
 *
 * Local dev (`next dev`) also has no `GITHUB_PAGES`, so localhost stays at "/".
 */
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGhPages ? "/strata-nexus" : "",
  assetPrefix: isGhPages ? "/strata-nexus/" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
