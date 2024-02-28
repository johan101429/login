"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers["authorization"];
    console.log(headerToken);
    if (headerToken != undefined && headerToken.startsWith("Bearer ")) {
        // tiene token
        try {
            const bearerToken = headerToken.slice(7);
            console.log(bearerToken);
            jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || "pepito123");
            next();
        }
        catch (error) {
            res.status(401).json({
                message: "Token  no valido"
            });
        }
    }
    else {
        res.status(401).json({
            message: "Acceso denegado",
        });
    }
};
exports.default = validateToken;
