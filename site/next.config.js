/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'GTUKCDC',
    description: 'Tailored Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://alasdairwhclark.github.io/kasm-registry/',
    contactUrl: 'https://alasdairwhclark.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
