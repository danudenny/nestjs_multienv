import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EasyConfiguration } from './configs/easyconfig.service';
require('dotenv').config();

@Module({
  imports:  [EasyconfigModule.register({path: `environment/.env.${process.env.NODE_ENV}`, safe: true})],
  controllers: [AppController],
  providers: [AppService, EasyConfiguration],
})
export class AppModule {}
