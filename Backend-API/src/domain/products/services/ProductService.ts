import { IProduct } from "../entities/IProduct";
import { IProductDeleteResponse } from "../entities/IProductDelete";
import { IProductOne } from "../entities/IProductRepository";
import { IProductPagination, ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
    constructor(
        private productRepository: ProductRepository
    ) {
    }
    async updateByCode(params: {code: number}): Promise<void> {
        this.productRepository.updateStatusByCode(params);
    }

    async getByCode(params: {code: number}): Promise<IProductOne> {
        return this.productRepository.getProductByCode(params);
    }

    async getAll(params: {offset: number, limit: number}): Promise<IProductPagination> {
        return this.productRepository.getAllProducts({offset: params.offset, limit: params.limit});
    }

    async updateTrashByCode(params: {code: number}): Promise<IProductDeleteResponse> {
        return this.productRepository.updateStatusTrashByCode(params);
    }
}