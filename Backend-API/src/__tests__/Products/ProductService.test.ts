import { ProductService } from '@domain/products/services/ProductService';
import { ProductRepositoryImpl } from '@infrastructure/database/repositories/ProductRepositoryImpl';
import { IProduct } from '@domain/products/entities/IProduct';
// import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { ProductModel } from '@infrastructure/database/models/Product';


// let productServer: ProductService;
// let mongoServer: MongoMemoryServer;


// beforeAll(async () => {
//     mongoServer = await MongoMemoryServer.create();
//     const mongoUri = mongoServer.getUri();
//     mongoose.connect(mongoUri);
//     productServer = new ProductService(new ProductRepositoryImpl());
// })

jest.mock('@infrastructure/database/models/Product');


describe('ProductService', () => {
    let productService: ProductService;
    let productRepository: ProductRepositoryImpl;

    beforeEach(() => {
        productRepository = new ProductRepositoryImpl();
        productService = new ProductService(productRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getByCode', () => {
        it('should return product by code', async () => {
            const mockProduct: IProduct = {
                code: 1,
                status: 'new',
                imported_t: new Date(),
                url: 'http://example.com',
                creator: 'creator',
                created_t: Date.now(),
                last_modified_t: Date.now(),
                product_name: 'Product',
                quantity: '1',
                brands: 'Brand',
                categories: 'Category',
                labels: 'Label',
                cities: 'City',
                purchase_places: 'Place',
                stores: 'Store',
                ingredients_text: 'Ingredients',
                traces: 'Traces',
                serving_size: 'Size',
                serving_quantity: 1,
                nutriscore_score: 1,
                nutriscore_grade: 'A',
                main_category: 'Main Category',
                image_url: 'http://image.com',
            };

            (ProductModel.findOne as jest.Mock).mockResolvedValue(mockProduct);

            const result = await productService.getByCode({ code: 1 });

            expect(result).toEqual(mockProduct);
        });
    });
})