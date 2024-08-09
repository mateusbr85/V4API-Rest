"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    code: { type: Number, required: true, unique: true },
    status: { type: String, required: true },
    imported_t: { type: Date, required: true },
    url: { type: String, required: true },
    creator: { type: String, required: true },
    created_t: { type: Number, required: true },
    last_modified_t: { type: Number, required: true },
    product_name: { type: String, required: true },
    quantity: { type: String, required: true },
    brands: { type: String, required: true },
    categories: { type: String, required: true },
    labels: { type: String, required: true },
    cities: { type: String, required: true },
    purchase_places: { type: String, required: true },
    stores: { type: String, required: true },
    ingredients_text: { type: String, required: true },
    traces: { type: String, required: true },
    serving_size: { type: String, required: true },
    serving_quantity: { type: Number, required: true },
    nutriscore_score: { type: Number, required: true },
    nutriscore_grade: { type: String, required: true },
    main_category: { type: String, required: true },
    image_url: { type: String, required: true }
});
exports.ProductModel = mongoose_1.default.model('products', ProductSchema);
//# sourceMappingURL=Product.js.map