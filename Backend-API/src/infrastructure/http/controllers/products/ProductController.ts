import { FastifyRequest, FastifyReply } from "fastify";
import { ProductService } from "@domain/products/services/ProductService";
import { ProductRepositoryImpl } from "@infrastructure/database/repositories/ProductRepositoryImpl";
import { IProduct } from "@domain/products/entities/IProduct";

const productRepository = new ProductRepositoryImpl();
const productService = new ProductService(productRepository);

export const getProductByCode = async (request: FastifyRequest, reply: FastifyReply) => {
    const { code } = request.params as { code: number };
    console.log({code})
    const product = await productService.getByCode({ code: Number(code) });
    return reply.send(product);
    return {
        'message': 'funciona'
    }
}