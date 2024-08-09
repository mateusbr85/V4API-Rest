import { swaggerConfig } from './documentation/swaggerConfig';
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
// app.register(swaggerRoute);
app.register(import('@fastify/swagger'), {
    ...swaggerConfig
});
app.register(import('@fastify/swagger-ui'), {
    routePrefix: '/documentation'
});
app.register(webRoutes, { prefix: "/api/v1" });


export default app;