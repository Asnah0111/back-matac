import { IsString, IsNotEmpty, IsNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateWithFileInfoDto {
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
    example: 'document.pdf', 
    description: 'Nom du fichier'
  })
  @IsString()
  @IsNotEmpty()
  filename: string;

  @ApiProperty({ 
    example: 'application/pdf', 
    description: 'Type MIME du fichier'
  })
  @IsString()
  @IsNotEmpty()
  mimetype: string;

  @ApiProperty({ 
    example: 1024000, 
    description: 'Taille du fichier en bytes'
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  size: number;

  @ApiProperty({ 
    example: 'https://storage.example.com/files/document.pdf', 
    description: 'URL du fichier uploadé'
  })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ 
    example: 1, 
    description: 'ID de l\'alignement associé'
  })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id_align: number;
}
