import webRoutes from "@infrastructure/routes/web";
import buildFastify from "./fastify";
import {connectDb} from "./db/connection";
const app = buildFastify();
app.addHook('onReady', async () => {
    try {
        await connectDb();
    } catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1);
    }
})
app.register(webRoutes, { prefix: "/api/v1" });


export default app;