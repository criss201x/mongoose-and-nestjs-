import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './prueba/prueba.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PruebaModule, MongooseModule.forRoot('mongodb://localhost/prueba_nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
