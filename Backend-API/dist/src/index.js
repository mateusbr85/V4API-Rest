"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/moduleAlias");
const node_cluster_1 = __importDefault(require("node:cluster"));
const doteEnv_1 = __importDefault(require("@config/doteEnv"));
const server_1 = __importDefault(require("@config/server"));
doteEnv_1.default;
if (node_cluster_1.default.isPrimary) {
    console.log(`Server started primary process: ${process.pid}`);
    const CPUS = 3;
    for (let i = 0; i < CPUS; i++) {
        node_cluster_1.default.fork();
    }
    node_cluster_1.default.on("exit", (worker, code, signal) => {
        console.log(`Server process dead: ${worker.process.pid} with code: ${code}`);
        console.log(`[New process started...... ]`);
        node_cluster_1.default.fork();
    });
}
else {
    try {
        const port = Number(process.env.PORT);
        server_1.default.listen({ port });
        console.log(`Server started on port ${port}`);
    }
    catch (err) {
        console.error(`Error starting server: ${err}`);
    }
}
//# sourceMappingURL=index.js.map