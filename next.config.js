/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.module.(s(a|c)ss)$/,
      use: {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.join(__dirname, 'styles/variables/breakpoints.scss')],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
