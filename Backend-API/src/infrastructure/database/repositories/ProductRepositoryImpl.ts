import { IProduct } from '@domain/products/entities/IProduct';
import { ProductService } from "@domain/products/services/ProductService";
import { ProductModel } from "../models/Product";
import { IProductPagination } from '@domain/products/repositories/ProductRepository';

export class ProductRepositoryImpl implements ProductService {
    async updateByCode(params: { code: number; }): Promise<void> {
        const product = await ProductModel.findOne().exec();
        if(product) { 
            
        }
        return
    }
    getByCode(params: { code: number; }): Promise<IProduct | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<IProductPagination> {
        throw new Error('Method not implemented.');
    } 
    
}