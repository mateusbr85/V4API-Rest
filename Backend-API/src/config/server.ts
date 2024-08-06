import webRoutes from "@infrastructure/routes/web";
import buildFastify from "./fastify";

const app = buildFastify();
app.register(webRoutes, { prefix: "/api/v1" });


export default app;