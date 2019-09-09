"use strict";
const { parallel, series } = require("gulp");
const assets = require("./tasks/assets");
const clean = require("./tasks/clean");
const images = require("./tasks/images");
const pages = require("./tasks/pages");
const scripts = require("./tasks/scripts");
const styles = require("./tasks/styles");
exports.default = series(
    clean,
    parallel(
        assets,
        images,
        pages,
        scripts,
        styles,
    ),
);
