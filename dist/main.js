"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
        maxAge: 600,
        exposedHeaders: ['Authorization']
    });
    app.use((req, res, next) => {
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(204).end();
            return;
        }
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Service Alignement')
        .setDescription('API REST pour la gestion des alignements et pièces jointes')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Entrez le token JWT',
        in: 'header'
    }, 'JWT-auth')
        .addTag('App', 'Endpoints généraux')
        .addTag('Alignements', 'Gestion des alignements')
        .addTag('Pièces Jointes', 'Gestion des pièces jointes')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🚀 API démarrée sur http://localhost:${port}`);
    console.log(`📚 Documentation Swagger: http://localhost:${port}/api/docs`);
    console.log(`🏥 Health check: http://localhost:${port}/health`);
}
bootstrap();
//# sourceMappingURL=main.js.map