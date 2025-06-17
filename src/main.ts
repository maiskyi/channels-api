import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: (process.env.CORS_ORIGINS || '').split(',').map((v) => v.trim()),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Channels')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, documentFactory, {
    jsonDocumentUrl: 'docs/swagger.json',
    yamlDocumentUrl: 'docs/swagger.yaml',
  });

  await app.listen(process.env.PORT ?? 3001);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
