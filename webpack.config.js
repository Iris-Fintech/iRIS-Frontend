const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const withReport = process.env.withReport ? true : false;

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist/www',
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({}), new CssMinimizerPlugin({}), new TerserPlugin({}), '...'],
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    maxSize: 500000,
                },
            },
        },
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './public/index.html',
            favicon: './public/logo_no_bg.svg',
            inject: true,
        }),
        new MiniCssExtractPlugin({}),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-tw|en/),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),
        new NodePolyfillPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './public/robots.txt', to: 'robots.txt' },
                { from: './public/manifest.json', to: 'manifest.json' },
            ],
        }),
        new WorkboxPlugin.GenerateSW({
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],

            runtimeCaching: [
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                        expiration: {
                            maxEntries: 10,
                        },
                    },
                },
            ],
        }),
    ].concat(withReport ? [new BundleAnalyzerPlugin()] : []),

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            stream: require.resolve('stream-browserify'),
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
        },
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/www'),
    },
};
