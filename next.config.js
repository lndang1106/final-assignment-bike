/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/next-gitlab-pages/' : '',
  trailingSlash: true
}

module.exports = nextConfig
