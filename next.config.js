const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    const aliases = {
      '~components': path.join(__dirname, 'components'),
      '~store': path.join(__dirname, 'store'),
      '~lib': path.join(__dirname, 'lib'),
      '~pages': path.join(__dirname, 'pages'),
      '~hooks': path.join(__dirname, 'hooks'),
    };
    config.resolve.alias = Object.assign(config.resolve.alias, aliases);

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]',
  },
});
