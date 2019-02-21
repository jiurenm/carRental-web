const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),
    filename:'index.html'
});

module.exports = {
    mode: "production",
    plugins: [
        htmlPlugin
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".ts",".tsx",".js",".json"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {test: /\.css$/, loader: 'typings-for-css-modules-loader?modules' },
            {test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' },
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}