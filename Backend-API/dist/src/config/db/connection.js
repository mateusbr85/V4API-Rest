"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const doteEnv_1 = __importDefault(require("@config/doteEnv"));
doteEnv_1.default;
const connectDb = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI, {});
        console.log('[database mongoDB] connected');
    }
    catch (error) {
        throw error;
    }
};
exports.connectDb = connectDb;
//# sourceMappingURL=connection.js.map