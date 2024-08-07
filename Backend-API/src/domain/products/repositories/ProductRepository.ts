import { IProduct } from "../entities/IProduct";
import { IProductOne } from "../entities/IProductRepository";



export interface IProductPagination {
    items: IProduct[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}


export interface ProductRepository {
    updateStatusByCode(params: {code: number}): Promise<void>;
    getProductByCode(params: {code: number}): Promise<IProductOne>;
    getAllProducts(): Promise<IProductPagination>
}