import { ApiProperty } from '@nestjs/swagger';

export class CreatePruebaDTO {
  
  @ApiProperty()
  readonly dato: string;
  

}