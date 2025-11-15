/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.dicebear.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
};

export default nextConfig;
