import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//import 'dotenv/config';

//const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

 // const globalPrefix = 'api';
  app.setGlobalPrefix('api');

  app.enableCors({});
 // app.useGlobalPipes(new ValidationPipe());
 app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
);



 // app.setGlobalPrefix(globalPrefix);
 await app.listen(process.env.PORT);
  logger.log(`App Running on port ${process.env.PORT}`);
//  await app.listen(3000);
}

bootstrap();
