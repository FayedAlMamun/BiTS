/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 85, 100], // ✅ add all quality values you use
  }
}

export default nextConfig