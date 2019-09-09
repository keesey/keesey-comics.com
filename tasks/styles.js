"use strict";
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { dest, src } = require("gulp");
const postcss = require("gulp-postcss");
const styles = () =>
    src("./src/**/*.css")
        .pipe(postcss([
            autoprefixer(),
            cssnano(),
        ]))
        .pipe(dest("dist"));
module.exports = styles;
