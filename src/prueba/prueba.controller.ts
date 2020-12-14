import {
  Controller, Res, Query, Get, HttpStatus, Post, Body, Param, NotFoundException,
  Put, Delete } from '@nestjs/common';
import { from } from 'rxjs';

import { PruebaService } from './prueba.service';
import { CreatePruebaDTO } from './dto/prueba.dto'
import { query } from 'express';


@Controller('prueba')
export class PruebaController {

  constructor(private readonly PruebaService: PruebaService ) {}

  @Post('/create')
  async create(@Res() res, @Body() CreatePruebaDTO: CreatePruebaDTO) {
    const list = await this.PruebaService.create(CreatePruebaDTO);
    return res.status(HttpStatus.OK).json({
      message: "agregado: ", list
    })

  }

  @Get('all')
  async findAll(@Res() res) {
    const list = await this.PruebaService.findAll();
    return res.status(HttpStatus.OK).json(list);
  }

  @Get('findById:id')
  async findById(@Res() res, @Query('id') id: string ) {
    const list = await this.PruebaService.findById(id);
  
    if (!list) {
      throw new NotFoundException('no encontrado!!!!!!!');
    } 
    return res.status(HttpStatus.OK).json(list);
  }

  @Put('/update')
  async update(@Res() res, @Query('id') id: string, @Body() CreatePruebaDTO: CreatePruebaDTO) {
    const list = await this.PruebaService.update(id, CreatePruebaDTO);
    if (!list) throw new NotFoundException('no encontrado!!!!!!!');
    return res.status(HttpStatus.OK).json({
      message: 'actualizado', list
    });
  }

  @Delete('/delete')
  async delete(@Res() res, @Query('id') id: string) {
    const list = await this.PruebaService.delete(id);
    if (!list) throw new NotFoundException('no encontrado!!!!!!!');
    return res.status(HttpStatus.OK).json({
      message: 'eliminado...', list
    })
  }
}
