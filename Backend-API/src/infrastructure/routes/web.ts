import { getAllProducts, getProductByCode, updateChangedProductTrash } from '@infrastructure/http/controllers/products/ProductController';
import Fastify, { FastifyInstance } from 'fastify';
import { getAllProductSwagger, paramsSwagger, updateChangedProductTrashSwagger } from './documentation/entities/webInterfacesSwagger';


const webRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/products/:code',paramsSwagger, getProductByCode);
    fastify.delete('/products/:code', updateChangedProductTrashSwagger, updateChangedProductTrash);
    fastify.get('/products/list/:currentPage', getAllProductSwagger, getAllProducts);
}


export default webRoutes