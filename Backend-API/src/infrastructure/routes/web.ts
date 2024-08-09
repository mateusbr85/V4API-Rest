import { getAllProducts, getProductByCode, updateChangedProductTrash } from '@infrastructure/http/controllers/products/ProductController';
import Fastify, { FastifyInstance } from 'fastify';


const webRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/teste', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/products/:code', getProductByCode);
    fastify.delete('/products/:code', updateChangedProductTrash);
    fastify.get('/products/list/:currentPage', getAllProducts);
}


export default webRoutes