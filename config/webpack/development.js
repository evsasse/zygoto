process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin());

const webpackConfig = environment.toWebpackConfig();

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const wrappedWebpackConfig = (new SpeedMeasurePlugin()).wrap(webpackConfig);

module.exports = wrappedWebpackConfig;
