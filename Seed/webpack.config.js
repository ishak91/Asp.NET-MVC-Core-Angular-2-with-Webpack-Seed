//var path = require('path');

//module.exports = {
//    entry: {
//        app: 'app/app.ts',
//        vendor: 'app/vendor.ts'
//    },
//    output: {
//        filename: '[name].bundle.js',
//        path: path.resolve(__dirname, 'wwwroot/dist')
//    },
//    rules: [
//        {
//            test: /\.ts$/,
//            loader: 'awesome-typescript-loader'
//        },
//        {
//            test: /\.css$/,
//            loaders: 'style-loader!css-loader'
//        }
//    ]
//};
module.exports = require('./config/webpack.dev.js');