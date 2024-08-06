import { IProduct } from "../entities/IProduct";
import { IProductPagination, ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
    constructor(
        private productRepository: ProductRepository
    ) {
    }
    async updateByCode(params: {code: number}): Promise<void> {
        this.productRepository.updateStatusByCode(params);
    }

    async getByCode(params: {code: number}): Promise<IProduct | null> {
        return this.productRepository.getProductByCode(params);
    }

    async getAll(): Promise<IProductPagination> {
        return this.productRepository.getAllProducts();
    }
}