import { IProduct } from '@domain/products/entities/IProduct';
import { ProductService } from "@domain/products/services/ProductService";
import { ProductModel } from "../models/Product";
import { IProductPagination, ProductRepository } from '@domain/products/repositories/ProductRepository';
import { IProductOne } from '@domain/products/entities/IProductRepository';

export class ProductRepositoryImpl implements ProductRepository {
    async updateStatusByCode(params: { code: number; }): Promise<void> {

    }
    async getProductByCode(params: { code: number; }): Promise<IProductOne> {
        console.log('testando ::: > ', params.code)
        const product = await ProductModel.findOne({ code: params.code})
        let objectReturn: IProductOne = {
            items: null,
            totalItems: 0
        }
        if (product) {
            objectReturn = {
                items: product,
                totalItems: 1,
            }

        }
        return objectReturn
    }
    getAllProducts(): Promise<IProductPagination> {
        throw new Error('Method not implemented.');
    }

}