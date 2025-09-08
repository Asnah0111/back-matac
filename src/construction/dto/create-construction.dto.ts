import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConstructionDto {
  @ApiProperty({ 
    example: 'Construction neuve', 
    description: 'Nature des travaux',
    maxLength: 200
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  nature_travaux: string;

  @ApiProperty({ 
    example: 'Résidentiel', 
    description: 'Type de construction',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  type: string;

  @ApiProperty({ 
    example: 'CIT001', 
    description: 'ID du mandataire (référence vers alignement)',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_mandataire: string;
}
