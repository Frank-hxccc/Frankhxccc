// const eslintplugin = require("eslint-webpack-plugin");

module.exports = {
    entry: { app: "./app.js" }, // 入口文件
    output: {
        path: __dirname + "/dist", // 打包后的文件存放的地方
        filename: "[name].[hash:4].bundle.js", // 打包后输出文件
    },
    mode: "development", // production
    //   devServer: {
    //     contentBase: "./dist", // 本地服务器所加载的页面所在的目录
    //     historyApiFallback: true, // 不跳转
    //     inline: true, // 实时刷新
    //     port: 8080, // 设置默认监听端口，如果省略，默认为”8080“
    //   },
    plugins: [
        // new eslintplugin({ context: "./.eslintrc.js" })
    ],
    resolve: {
        extensions: [".js", ".json", ".css"],
    },
    module: {
        rules: [
            {
                test: /\.tjx?$/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules文件夹
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
                parser: {
                    sourceType: "module",
                },
            },
        ],
    },
};
