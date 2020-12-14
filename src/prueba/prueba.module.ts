import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebaController } from './prueba.controller';
import { PruebaService } from './prueba.service';
import { pruebaSchema } from './schemas/prueba.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'prueba', schema: pruebaSchema }])],
  controllers: [PruebaController],
  providers: [PruebaService]
})
export class PruebaModule {}
