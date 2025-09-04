import { IsString, IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePieceJointeDto {
  @ApiProperty({ 
    example: 'Certificat de propriété', 
    description: 'Nom de la pièce jointe',
    maxLength: 255
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nom_piece: string;

  @ApiProperty({ 
    example: 'https://files.service.com/cert123.pdf', 
    description: 'URL du fichier',
    required: false
  })
  @IsString()
  @IsOptional()
  url_fichier?: string;

  @ApiProperty({ 
    example: 'application/pdf', 
    description: 'Type MIME du fichier',
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  type_fichier?: string;

  @ApiProperty({ 
    example: 1024000, 
    description: 'Taille du fichier en bytes',
    required: false
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  taille_fichier?: number;

  @ApiProperty({ 
    example: 1, 
    description: 'ID de l\'alignement associé'
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id_align: number;
}