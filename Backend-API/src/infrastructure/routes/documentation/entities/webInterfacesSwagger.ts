import { IProduct } from "@domain/products/entities/IProduct"

export const paramsSwagger = {
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
}


export const updateChangedProductTrashSwagger = {
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
}

export const getAllProductSwagger = {
    schema: {
        description: 'get all products with pagination',
        tags: ['Product'],
        response: {
            200: {
                items: {type: "array"},
                totalItems: {type: "number"},
                totalPages: {type: "number"},
                currentPage: {type: "number"}
            }
        }
    }
}