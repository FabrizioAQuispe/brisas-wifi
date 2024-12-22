import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*'], // Dominios permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, application/json', // Encabezados permitidos
    credentials: true, // Permitir cookies o autenticación basada en credenciales  
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
