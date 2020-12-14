import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prueba } from './interfaces/prueba.interface';
import { CreatePruebaDTO } from './dto/prueba.dto';



@Injectable()
export class PruebaService {

  constructor(@InjectModel('prueba') private PruebaModel: Model<Prueba>) { }

  async create(CreatePruebaDTO: CreatePruebaDTO): Promise<any> {
    const prueba = await new this.PruebaModel(CreatePruebaDTO);//no lleva el await
    return prueba.save();
  }

  async findAll(): Promise<any> {
    return await this.PruebaModel.find().exec();
  }

  async findById(id: string): Promise<Prueba> {
    
   /* if (!respuesta) {
      console.log("no encontrado");
    } */
    try {
      const respuesta = await this.PruebaModel.findById(id).exec();
      if (!respuesta) {
        console.log("no encontrado");
      }
      return respuesta;
    } catch (error) {
      console.log("error!!!!!", error);
      return null; 
    }
    
  }

  async find(req): Promise<any> {
    return await this.PruebaModel.find(req).exec();
  }

  async update(id, CreatePruebaDTO: CreatePruebaDTO): Promise<any> {
    return await this.PruebaModel.findByIdAndUpdate(id, CreatePruebaDTO, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.PruebaModel.findByIdAndRemove(id);
  }

}
