module.exports = {
    preset: 'ts-jest',
    testEnvironment: "node",
    setupFilesAfterEnv: ['./src/__tests__/setup.ts'],
    verbose: true,
    moduleNameMapper: {
        '@domain/(.*)$': './src/domain/**',
        '@infrastructure/(.*)$': './src/infrastructure/**',
        '@application/(.*)$': './src/application/**',
        '@config/(.*)$': './src/config/**',
    },
}