"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async updateByCode(params) {
        this.productRepository.updateStatusByCode(params);
    }
    async getByCode(params) {
        return this.productRepository.getProductByCode(params);
    }
    async getAll(params) {
        return this.productRepository.getAllProducts({ offset: params.offset, limit: params.limit });
    }
    async updateTrashByCode(params) {
        return this.productRepository.updateStatusTrashByCode(params);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map