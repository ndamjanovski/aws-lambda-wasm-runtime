/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Correct way in Next.js 15+
  basePath: '/aws-lambda-wasm-runtime',
}

module.exports = nextConfig;
