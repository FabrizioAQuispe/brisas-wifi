import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://192.168.18.36'], // Dominios permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, application/json', // Encabezados permitidos
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
