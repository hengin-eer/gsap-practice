const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
    }
}