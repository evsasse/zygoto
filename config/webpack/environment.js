const { environment } = require('@rails/webpacker');

const usualBabelLoaderConfig = environment.loaders.get('babel').use[0];

const PnpWebpackPlugin = require('pnp-webpack-plugin');
const typescript = {
  test: /\.(ts|tsx)?(\.erb)?$/,
  use: [
    usualBabelLoaderConfig,
    {
      loader: 'ts-loader',
      options: PnpWebpackPlugin.tsLoaderOptions(),
    },
  ],
};

console.log('---------------------');
console.log(`Compiling for ${process.env.NODE_ENV}`);
console.log('---------------------');

environment.loaders.prepend('typescript', typescript);
module.exports = environment;
