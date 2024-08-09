"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerConfig_1 = require("./documentation/swaggerConfig");
const web_1 = __importDefault(require("@infrastructure/routes/web"));
const fastify_1 = __importDefault(require("./fastify"));
const connection_1 = require("./db/connection");
const app = (0, fastify_1.default)();
app.addHook('onReady', async () => {
    try {
        await (0, connection_1.connectDb)();
    }
    catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1);
    }
});
app.register(Promise.resolve().then(() => __importStar(require('@fastify/swagger'))), {
    ...swaggerConfig_1.swaggerConfig
});
app.register(Promise.resolve().then(() => __importStar(require('@fastify/swagger-ui'))), {
    routePrefix: '/documentation'
});
app.register(web_1.default, { prefix: "/api/v1" });
exports.default = app;
//# sourceMappingURL=server.js.map