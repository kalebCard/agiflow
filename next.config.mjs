/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

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
  assetPrefix: isProd ? '/agiflow/' : '',
  basePath: isProd ? '/agiflow' : '',
  output: 'export',
  distDir: 'out',
}

export default nextConfig
