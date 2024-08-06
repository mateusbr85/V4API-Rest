import Fastify, { FastifyInstance } from 'fastify';


const webRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/teste', async (request, reply) => {
        return { hello: 'world' }
    })
}


export default webRoutes