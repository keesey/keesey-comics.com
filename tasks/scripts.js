"use strict";
const { dest, src } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const scripts = () =>
    src("./src/**/*.js")
    .pipe(uglify())
    .pipe(dest("dist"));
module.exports = scripts;
