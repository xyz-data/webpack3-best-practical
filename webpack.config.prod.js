"use strict";

/**
 * @Created by xgqfrms on 2016/1/26.
 * @version 1.0.0 created
 * @description Using Next Generation Vanilla JS & JS Modules today with Webpack 3 & Babel!
 *
 * @license MIT
 * @copyright xgqfrms 2016-forever || 2018-present
 * @update 2018.1.29
 *
 */

const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");// template
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");// extract css files
const CopyWebpackPlugin = require("copy-webpack-plugin");// copy folder

// vendor & package.dependencies
const npm_packages = require("./package.json");

// set process.env.NODE_ENV && npm run dev
if (process.env.NODE_ENV !== "production") {
    console.log(`😃, Looks like we are in development mode!`);
    console.log(`npm_packages = \n`, JSON.stringify(npm_packages.dependencies, null, 4));
}else{
    console.log(`Tada, 🎉, we are in production mode!`);
}


const extractSCSS = new ExtractTextPlugin({
    filename: (getPath) => {
        // relative path
        return getPath("./css/[name].min.css?[hash:8]");
    },
    // allChunks: true,
});


const HTMLMinifyGenerator = (datas = [], debug = false) => {
    let result = [];
    for (let i = 0; i < datas.length; i++) {
        let title = datas[i],
            filename = `./templates/${datas[i]}.min.html`,
            template = `./scr/templates/${datas[i]}.html`;
        let temp_obj = {
            title,
            filename,
            template,
            minify: {
                // minifyCSS: true,
                // minifyJS: true,
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeEmptyElements: true,
                quoteCharacter: true,
                // useShortDoctype: true,
                removeTagWhitespace: true,
            },
        };
        result.push(new HtmlWebpackPlugin(temp_obj));
    }
    return result;
};

const TemplateMinifyGenerator = (template_name = "", debug = false) => {
    let title = template_name,
        filename = `./templates/${template_name}.min.html`,
        template = `./src/templates/${template_name}.html`;
    let temp_obj = {
        title,
        filename,
        template,
        minify: {
            // minifyCSS: true,
            // minifyJS: true,
            html5: true,
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeEmptyElements: true,
            quoteCharacter: true,
            // useShortDoctype: true,
            removeTagWhitespace: true,
        },
    };
    return new HtmlWebpackPlugin(temp_obj);
};

const BASE_URI = {
    MODULES: './src/modules/',
    APP: './src/app.js',
    // INDEX: './src/index.js',
    // SERVER: './src/server.js',
};

const MODULES_OBJ = [
    "module_001",
    // "module_002",
    // "module_003",
    // ...
];

let entry_obj = {};

// babel-polyfill === index.js & Singleton pattern

entry_obj["app"] = `${BASE_URI.APP}`;
// entry_obj["index"] = `${BASE_URI.INDEX}`;
// entry_obj["server"] = `${BASE_URI.SERVER}`;

MODULES_OBJ.forEach(
    (item, i) => {
        // name & path
        entry_obj[item] = `${BASE_URI.MODULES}/${item}`;
    }
);

// module.exports = {
let configsObject = {
    entry: Object.assign({}, entry_obj),
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "js/[name].min.js?[hash:8]",// hash version
    },
    resolve: {
        // auto resolve files's extensions
        extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".scss",
            ".sass",
            ".css"
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                        },
                    }
                ],
            },
            {
                test: /\.((s*)css|sass)$/,
                // test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                // url: true,
                                minimize: true,
                                sourceMap: true,
                                modules: true,
                                localIdentName: "[local]",
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ],
                    fallback: "style-loader",
                    // allChunks: true,
                    // publicPath: "./public",// not work ant all
                }),
            },
            {
                test: /\.(png|jp(e*)g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,// 8KB ? 8192 : 8000
                    name: "imgs/[hash]-[name].[ext]",
                }
            },
        ],
    },
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
            extractComments: true,
            parallel: true,
            cache: true,
        }),
        extractSCSS,
        // new HtmlWebpackPlugin({
        //     title: "F10 Components FrameWork",
        //     // filename: "./app.html",
        //     // template: "./src/app.html",
        //     // only SPA need index.html
        //     // filename: "./index.html",
        //     // template: "./src/index.html",
        //     favicon: "./favicon.ico",
        //     minify: {
        //         minifyCSS: true,
        //         minifyJS: true,
        //         html5: true,
        //         collapseWhitespace: true,
        //         removeComments: true,
        //         removeEmptyAttributes: true,
        //         removeEmptyElements: true,
        //         quoteCharacter: true,
        //         // useShortDoctype: true,
        //         removeTagWhitespace: true,
        //     },
        //     // hash: true,
        // }),
        new CopyWebpackPlugin([
            {
                from: "./src/imgs",
                to: "./imgs"
            },
            {
                from: "./src/templates",
                to: "./templates"
            },
            {
                from: "./src/index.html",
                to: "./"
            },
            {
                from: "./src/index.css",
                to: "./"
            },
            {
                from: "./favicon.ico",
                to: "./"
            }
        ]),
    ],
};

MODULES_OBJ.forEach(
    (item, i) => {
        configsObject.plugins.push(TemplateMinifyGenerator(item));
        // configsObject.plugins.push(
        //     new HtmlWebpackPlugin({
        //         filename: `./templates/${item}.min.html`,
        //         template: `./src/templates/${item}.html`,
        //     }),
        // );
    }
);

module.exports = configsObject;

