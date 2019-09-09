"use strict";
const { dest, src } = require("gulp");
const assets = () => src("./src/**/*.{woff,woff2}")
    .pipe(dest("./dist"));
module.exports = assets;