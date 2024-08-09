"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductSwagger = exports.updateChangedProductTrashSwagger = exports.paramsSwagger = void 0;
exports.paramsSwagger = {
    schema: {
        description: 'Get product by code',
        tags: ['Product'],
        params: {
            type: 'object',
            properties: {
                code: { type: 'string' }
            },
            required: ['code']
        },
        response: {
            200: {
                items: { type: "object" },
                message: { type: "string" }
            },
            404: {
                description: 'Product not found',
                type: 'string'
            }
        }
    }
};
exports.updateChangedProductTrashSwagger = {
    schema: {
        description: 'Upsert product by code',
        tags: ['Product'],
        params: {
            type: 'object',
            properties: {
                code: { type: 'string' }
            },
            required: ['code']
        },
        response: {
            200: {
                success: { type: "boolean" },
                message: { type: "string" }
            },
            404: {
                success: { type: "boolean" },
                message: { type: "string" }
            }
        }
    }
};
exports.getAllProductSwagger = {
    schema: {
        description: 'get all products with pagination',
        tags: ['Product'],
        response: {
            200: {
                items: { type: "array" },
                totalItems: { type: "number" },
                totalPages: { type: "number" },
                currentPage: { type: "number" }
            }
        }
    }
};
//# sourceMappingURL=webInterfacesSwagger.js.map