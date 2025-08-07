/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build settings
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/agiflow' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static exports
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/agiflow' : '',
  },
  
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optional: Add asset prefix if using a custom domain
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : '',
}

export default nextConfig
