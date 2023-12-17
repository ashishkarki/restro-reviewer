import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Allow only your React app's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Optionally restrict methods
    allowedHeaders: 'Content-Type, Accept', // Optionally restrict headers
  });

  await app.listen(4000);
}
bootstrap();
