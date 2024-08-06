import { IProduct } from "../entities/IProduct";



export interface IProductPagination {
    items: IProduct[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

export interface ProductRepository {
    updateStatusByCode(params: {code: number}): Promise<void>;
    getProductByCode(params: {code: number}): Promise<IProduct>;
    getAllProducts(): Promise<IProductPagination>
}