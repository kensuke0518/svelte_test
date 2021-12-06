const path = require('path');
const outputPath = path.resolve(__dirname, 'htdocs');

module.exports = {
    mode: 'development',
    entry: {
        'index':'./src/index.js',
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    resolve: {
        // see below for an explanation
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(html|svelte)$/,
                use: 'svelte-loader'
            },
            {
                // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    target: ['web', 'es5'],
    devServer: {
        static: outputPath
    }
}