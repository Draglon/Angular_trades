var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },
    output:{
       path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
       publicPath: '/public/',
       filename: "[name].js"       // название создаваемого файла
    },
    performance: {
        // maxEntrypointSize: 512000,
        // maxAssetSize: 512000
        hints : false
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module:{
        rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname,'src/app'),
                loader: 'raw-loader'
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'less-loader']
            }, {
                test: /.(eot|ttf|woff|woff2|svg)(\?.+)?$/,
                include: path.resolve(__dirname,'src/assets'),
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10000,
                            name: './fonts/TradesFonts/[name].[ext]',
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
       ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'), // каталог с исходными файлами
            {} // карта маршрутов
        ),
        new UglifyJSPlugin()
    ]
}