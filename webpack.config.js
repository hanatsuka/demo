const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');
module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@": path.resolve(__dirname, "/"),
            "@src": path.resolve(__dirname, "src"),
        },
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "file-loader",
                type: "javascript/auto",
            },
        ],
    },
    performance: {
        hints: 'error', 
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000 // 整数类型（以字节为单位）
      },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
    },
    plugins: [
        // 获取html模板 应该是自动插入dist文件
        new HtmlWebpackPlugin({
            template: `${path.resolve(__dirname, "public")}/index.html`,
        }),
        new EncodingPlugin({
            encoding: 'utf-8'
        }),
        // new BundleAnalyzerPlugin()
    ],
};
