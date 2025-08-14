"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var pokemon = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    spritePath: {
        type: String,
        required: true
    },
    typing: {
        type: [String],
        required: true
    },
    abilities: {
        type: [String],
        required: true
    }
});
exports["default"] = pokemon;
