import { FastifyRequest, FastifyReply } from "fastify";
import { ProductService } from "@domain/products/services/ProductService";
import { ProductRepositoryImpl } from "@infrastructure/database/repositories/ProductRepositoryImpl";
import { IProduct } from "@domain/products/entities/IProduct";
import { IGetProductsAllByPagination, IUpdateChangedProductTrashRequest } from "./entities/IProductController";

const productRepository = new ProductRepositoryImpl();
const productService = new ProductService(productRepository);

export const getProductByCode = async (request: FastifyRequest, reply: FastifyReply) => {
    const { code } = request.params as { code: number };
    const product = await productService.getByCode({ code: Number(code) });
    return reply.send(product);
}


export const updateChangedProductTrash = async (request: FastifyRequest<{ Params: IUpdateChangedProductTrashRequest }>, reply: FastifyReply) => {
    if (request.params.code) {
        const { code } = request.params as { code: number };
        const result = await productService.updateTrashByCode({ code: code });
        if(result.success) {
            return reply.code(200).send(result);
        }
    }
    return reply.code(404).send('Params code not found');
}

export const getAllProducts = async (request: FastifyRequest<{ Params: IGetProductsAllByPagination }>, reply: FastifyReply) => {
    if (request.params) {
        const { currentPage } = request.params as { currentPage: string };
        let currentPageConvert = Number(currentPage)
        if(currentPageConvert < 0) {
            return reply.code(400).send('Params currentPage not found');
        }

        if(currentPageConvert === 1) {
            currentPageConvert = 0
        } else {
            currentPageConvert = currentPageConvert - 1
        }
        if(currentPageConvert > 0) { 
            currentPageConvert = currentPageConvert * 10
        }
        const result = await productService.getAll(
            {
                limit: 10,
                offset: currentPageConvert
            }
        );
        if(result.totalItems > 0) { 
            return reply.code(200).send(
                {
                    ...result,
                    currentPage: currentPageConvert === 0 ? 1 : currentPageConvert
                }
            );
        }
    }
    return reply.code(404).send('Params code not found');
}