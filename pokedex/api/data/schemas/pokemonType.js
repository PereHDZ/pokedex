"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var pokemonType = new Schema({
    name: {
        type: String,
        required: true
    },
    smallIconPath: {
        type: String,
        required: true
    },
    fullIconPath: {
        type: String,
        required: true
    }
});
exports["default"] = pokemonType;
