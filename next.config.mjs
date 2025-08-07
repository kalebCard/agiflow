/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/agiflow' : '',
  // Enable static exports
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Disable the default image optimization API
  images: {
    unoptimized: true,
  },
  // Optional: Add environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/agiflow' : '',
  },
}

export default nextConfig
