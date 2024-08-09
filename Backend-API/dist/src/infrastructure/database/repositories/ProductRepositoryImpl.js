"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryImpl = void 0;
const Product_1 = require("../models/Product");
class ProductRepositoryImpl {
    async updateStatusTrashByCode(params) {
        const { code } = params;
        let objectReturn = {
            message: "item is changed to trash",
            success: true
        };
        const resultUpdate = await Product_1.ProductModel.updateOne({ code: code }, { status: 'trash' });
        if (resultUpdate.modifiedCount === 0) {
            objectReturn = {
                message: "item not found",
                success: false
            };
        }
        return objectReturn;
    }
    async updateStatusByCode(params) {
    }
    async getProductByCode(params) {
        const product = await Product_1.ProductModel.findOne({ code: params.code });
        let objectReturn = {
            items: null,
            message: "item not found"
        };
        if (product) {
            objectReturn = {
                items: product,
                message: "item found"
            };
        }
        return objectReturn;
    }
    async getAllProducts(params) {
        var _a;
        const { offset, limit } = params;
        const resultGet = await Product_1.ProductModel.find().skip(offset).limit(limit);
        const totalItems = await Product_1.ProductModel.countDocuments();
        let getTotalPagesInt = Math.round((totalItems / 10));
        const splitFloat = (_a = (totalItems / 10)) === null || _a === void 0 ? void 0 : _a.toString().split(".");
        if (splitFloat.length > 1) {
            getTotalPagesInt = getTotalPagesInt + 1;
        }
        let totalPages = getTotalPagesInt;
        return {
            items: resultGet,
            totalItems,
            totalPages: totalPages,
        };
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;
//# sourceMappingURL=ProductRepositoryImpl.js.map