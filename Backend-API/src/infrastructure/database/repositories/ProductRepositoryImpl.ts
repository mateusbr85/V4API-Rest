import { ProductModel } from "../models/Product";
import { IProductPagination, ProductRepository } from '@domain/products/repositories/ProductRepository';
import { IProductOne } from '@domain/products/entities/IProductRepository';
import { IProductDeleteResponse } from "@domain/products/entities/IProductDelete";

export class ProductRepositoryImpl implements ProductRepository {
    async updateStatusTrashByCode(params: { code: number; }): Promise<IProductDeleteResponse> {
        const { code } = params;
        let objectReturn: IProductDeleteResponse = {
            message: "item is changed to trash",
            success: true
        }
        const resultUpdate = await ProductModel.updateOne({ code: code }, { status: 'trash' })
        if(resultUpdate.modifiedCount === 0) {
            objectReturn = {
                message: "item not found",
                success: false
            }
        }

        return objectReturn
        
    }
    async updateStatusByCode(params: { code: number; }): Promise<void> {

    }
    async getProductByCode(params: { code: number; }): Promise<IProductOne> {
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
    async getAllProducts(params: { offset: number; limit: number; }): Promise<IProductPagination> {
        const { offset, limit } = params;
        const resultGet = await ProductModel.find().skip(offset).limit(limit);
        const totalItems = await ProductModel.countDocuments();
        let getTotalPagesInt: number = Math.round((totalItems / 10));
        const splitFloat: Array<string> = (totalItems / 10)?.toString().split(".");

        if(splitFloat.length > 1) {
            getTotalPagesInt = getTotalPagesInt + 1;
        }
        let totalPages = getTotalPagesInt;


        return {
            items: resultGet,
            totalItems,
            totalPages: totalPages,
        }
       
    }

}