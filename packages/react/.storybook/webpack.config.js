// const path = require('path');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  });

  // Return the altered config
  return config;
};
