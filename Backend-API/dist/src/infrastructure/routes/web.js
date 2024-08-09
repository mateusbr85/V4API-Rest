"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = require("@infrastructure/http/controllers/products/ProductController");
const webInterfacesSwagger_1 = require("./documentation/entities/webInterfacesSwagger");
const webRoutes = async (fastify) => {
    fastify.get('/products/:code', webInterfacesSwagger_1.paramsSwagger, ProductController_1.getProductByCode);
    fastify.delete('/products/:code', webInterfacesSwagger_1.updateChangedProductTrashSwagger, ProductController_1.updateChangedProductTrash);
    fastify.get('/products/list/:currentPage', webInterfacesSwagger_1.getAllProductSwagger, ProductController_1.getAllProducts);
};
exports.default = webRoutes;
//# sourceMappingURL=web.js.map