export const swaggerConfig = {
    swagger: {
        info: {
            title: 'Test API',
            description: 'Documentation created for the API that will be running for testing purposes',
            version: '1.0.0',
        },
        host: 'localhost:3001',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    }
}