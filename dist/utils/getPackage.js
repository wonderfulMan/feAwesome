"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var basePath = path.resolve(__dirname, '../');
var getPackageField = function () {
    var readSteam = fs.createReadStream(basePath);
    return new Promise(function (resolve, reject) {
        readSteam.on('data', function (chunk) {
            resolve(chunk);
        });
    });
};
exports.getPackageField = getPackageField;
