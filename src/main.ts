import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Note: Adding CORS to avoid issues,
  // but this shouldn't exist in production
  // and nginx should take care of proxying
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
