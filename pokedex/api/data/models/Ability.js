"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schemas_1 = require("../schemas");
var model = mongoose_1["default"].model;
var Ability = model('Ability', schemas_1.ability);
exports["default"] = Ability;
