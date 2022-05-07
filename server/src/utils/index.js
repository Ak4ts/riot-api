"use strict";
exports.__esModule = true;
exports.regions = exports.api = void 0;
var axios_1 = require("axios");
require("dotenv").config();
exports.api = axios_1["default"].create({
    headers: {
        "X-Riot-Token": process.env.API_KEY
    }
});
exports.regions = ["br1", "eun1", "euw1", "jp1", "kr", "la1", "la2", "na1", "oc1", "ru", "tr1"];
