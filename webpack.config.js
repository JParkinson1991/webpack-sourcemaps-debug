const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const process = require('process');

module.exports = env => {
    if (typeof env !== "object"
        || typeof env.implementation !== "string"
        || ['dart', 'node'].indexOf(env.implementation) === -1
    ) {
        console.error("Implementation must be provided. Expected: node | dart")
        process.exit(1);
    }

    sassImplementation = (env.implementation === "node")
        ? require('node-sass')
        : require('sass');

    return {
        mode: 'development',
        context: path.resolve(__dirname, 'src'),
        entry: {
            'css/style': './scss/style.scss'
        },
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: "[name].js"
        },
        devtool: 'source-map',
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: sassImplementation,
                                sourceMap: true,
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]',
                                publicPath: '../'
                            }
                        }
                    ]
                }
            ]
        }
    }
};