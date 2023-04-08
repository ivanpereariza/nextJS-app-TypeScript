/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true
  },
  rewrites: function () {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      }
    ]
  }
}

module.exports = nextConfig
