import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  transpilePackages: ['@note/component'],
  experimental: {
    appDir: false
  }
}

export default withVanillaExtract(nextConfig)
