"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.updateChangedProductTrash = exports.getProductByCode = void 0;
const ProductService_1 = require("@domain/products/services/ProductService");
const ProductRepositoryImpl_1 = require("@infrastructure/database/repositories/ProductRepositoryImpl");
const productRepository = new ProductRepositoryImpl_1.ProductRepositoryImpl();
const productService = new ProductService_1.ProductService(productRepository);
const getProductByCode = async (request, reply) => {
    const { code } = request.params;
    const product = await productService.getByCode({ code: Number(code) });
    return reply.send(product);
};
exports.getProductByCode = getProductByCode;
const updateChangedProductTrash = async (request, reply) => {
    if (request.params.code) {
        const { code } = request.params;
        const result = await productService.updateTrashByCode({ code: code });
        if (result.success) {
            return reply.code(200).send(result);
        }
    }
    return reply.code(404).send('Params code not found');
};
exports.updateChangedProductTrash = updateChangedProductTrash;
const getAllProducts = async (request, reply) => {
    if (request.params) {
        const { currentPage } = request.params;
        let currentPageConvert = Number(currentPage);
        if (currentPageConvert < 0) {
            return reply.code(400).send('Params currentPage not found');
        }
        if (currentPageConvert === 1) {
            currentPageConvert = 0;
        }
        else {
            currentPageConvert = currentPageConvert - 1;
        }
        if (currentPageConvert > 0) {
            currentPageConvert = currentPageConvert * 10;
        }
        const result = await productService.getAll({
            limit: 10,
            offset: currentPageConvert
        });
        if (result.totalItems > 0) {
            return reply.code(200).send({
                ...result,
                currentPage: currentPageConvert === 0 ? 1 : currentPageConvert
            });
        }
    }
    return reply.code(404).send('Params code not found');
};
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=ProductController.js.map