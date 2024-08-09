import { IProduct } from "../entities/IProduct";
import { IProductDeleteResponse } from "../entities/IProductDelete";
import { IProductOne } from "../entities/IProductRepository";



export interface IProductPagination {
    items: IProduct[];
    totalItems: number;
    totalPages: number;
}


export interface ProductRepository {
    updateStatusByCode(params: {code: number}): Promise<void>;
    getProductByCode(params: {code: number}): Promise<IProductOne>;
    getAllProducts(params: {offset: number, limit: number}): Promise<IProductPagination>
    updateStatusTrashByCode(params: {code: number}): Promise<IProductDeleteResponse>;
}