/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Uncomment if using a custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/agiflow' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://agiflow.pro' : '',
}

export default nextConfig
