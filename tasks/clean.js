"use strict";
const del = require("del");
const clean = () => del("./dist", { dot: true });
module.exports = clean;