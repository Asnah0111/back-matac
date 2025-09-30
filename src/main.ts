import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration CORS améliorée
  app.enableCors({
    origin: true, // ou spécifiez les origines autorisées : ['http://localhost:5173']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 600, // Durée de mise en cache des pré-vérifications CORS (en secondes)
    exposedHeaders: ['Authorization'] // Exposer les en-têtes personnalisés
  });

  // Middleware pour gérer les requêtes OPTIONS
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.status(204).end();
      return;
    }
    next();
  });

  // Validation globale
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Service Alignement')
    .setDescription('API REST pour la gestion des alignements et pièces jointes')
    .setVersion('1.0.0')
    .addBearerAuth(
      { 
        type: 'http', 
        scheme: 'bearer', 
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Entrez le token JWT',
        in: 'header'
      },
      'JWT-auth', // Ce nom doit correspondre à celui utilisé dans @ApiBearerAuth() dans vos contrôleurs
    )
    .addTag('App', 'Endpoints généraux')
    .addTag('Alignements', 'Gestion des alignements')
    .addTag('Pièces Jointes', 'Gestion des pièces jointes')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
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