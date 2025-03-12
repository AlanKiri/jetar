import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Fix issues with pdfs and other files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    })
    return config
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
