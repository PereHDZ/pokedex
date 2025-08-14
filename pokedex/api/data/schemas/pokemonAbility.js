"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var pokemonAbility = new Schema({
    name: {
        type: String,
        required: true
    },
    isHidden: {
        type: Boolean,
        required: true
    },
    slot: {
        type: Number,
        required: true
    }
});
exports["default"] = pokemonAbility;
