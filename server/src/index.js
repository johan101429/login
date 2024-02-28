"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var server_1 = require("./models/server");
//se configura dotenv
dotenv_1.default.config();
var server = new server_1.default();
