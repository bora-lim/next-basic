/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'style')],
    prependData: `@import 'styles/_variables.scss';`,
  },
  images: {
    domains: ['images.unsplash.com']
  },
  compiler: { styledComponents: true }
}

module.exports = nextConfig
