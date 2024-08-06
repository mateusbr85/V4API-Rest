import fastify, { FastifyInstance } from "fastify";
import cors from '@fastify/cors'


const buildFastify = (): FastifyInstance => {
    const fastifyInstance = fastify({
        logger: {
            serializers: {
                req: (req) => {
                    return {
                        method: req.method,
                        url: req.url,
                        hostname: req.hostname,
                        remoteAddress: req.ip,
                        // remotePort: req.connection.remotePort
                    }
                },
                res: (res) => {
                    return {
                        statusCode: res.statusCode
                    }
                },
            },
            redact: ['req.headers.authorization']
        }
    });
    fastifyInstance.register(cors)
    return fastifyInstance;
};


export default buildFastify;