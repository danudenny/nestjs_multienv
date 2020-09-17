import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { EasyconfigService } from 'nestjs-easyconfig';
import { env } from 'process';
import { AppModule } from './app.module';
import { EasyConfiguration } from './configs/easyconfig.service';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter({
      logger: true
  }));

  const configService : EasyConfiguration = app.get('EasyconfigService');
  let objConfig = configService["envConfig"]

  await app.listen(objConfig.PORT);
}

bootstrap();
