"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port ".concat(_this.port));
        });
    };
    return Server;
}());
exports.default = Server;

