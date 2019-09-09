"use strict";
const { dest, src } = require("gulp");
const imagemin = require("gulp-imagemin");
const images = () => src("./src/**/*.{png,svg}")
    .pipe(imagemin())
    .pipe(dest("./dist"));
module.exports = images;