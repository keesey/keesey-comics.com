"use strict";
const { dest, src } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const pages = () =>
    src("./src/**/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
        }))
        .pipe(dest("dist"));
module.exports = pages;
