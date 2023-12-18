/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/final-assignment-bike/' : '',
  trailingSlash: true
}

module.exports = nextConfig
