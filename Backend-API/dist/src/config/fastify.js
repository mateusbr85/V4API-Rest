"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const buildFastify = () => {
    const fastifyInstance = (0, fastify_1.default)({
        logger: {
            serializers: {
                req: (req) => {
                    return {
                        method: req.method,
                        url: req.url,
                        hostname: req.hostname,
                        remoteAddress: req.ip,
                    };
                },
                res: (res) => {
                    return {
                        statusCode: res.statusCode
                    };
                },
            },
            redact: ['req.headers.authorization']
        }
    });
    fastifyInstance.register(cors_1.default);
    return fastifyInstance;
};
exports.default = buildFastify;
//# sourceMappingURL=fastify.js.map