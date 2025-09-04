import { IsString, IsNotEmpty, Length, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTerrainDto {
  @ApiProperty({ 
    example: 'TIT001', 
    description: 'Numéro du titre foncier',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  num_titre: string;

  @ApiProperty({ 
    example: 'IND001', 
    description: 'Indice du terrain',
    maxLength: 50,
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(0, 50)
  indice?: string;

  @ApiProperty({ 
    example: 'Jean Dupont', 
    description: 'Nom du propriétaire',
    maxLength: 200
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  nom_proprietaire: string;

  @ApiProperty({ 
    example: 'Lot II 34 Bis Ambohijatovo', 
    description: 'Adresse du terrain',
    maxLength: 300
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 300)
  adresse: string;

  @ApiProperty({ 
    example: 500.75, 
    description: 'Superficie en m²'
  })
  @IsNumber()
  @IsNotEmpty()
  superficie: number;

  @ApiProperty({ 
    example: 'PARC001', 
    description: 'Numéro de parcelle',
    maxLength: 50
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  num_parcelle: string;

  @ApiProperty({ 
    example: 'Section A', 
    description: 'Section dite',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  section_dite: string;

  @ApiProperty({ 
    example: 'Canton Nord', 
    description: 'Canton',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  canton: string;

  @ApiProperty({ 
    example: 'KAR001', 
    description: 'Numéro Karatany',
    maxLength: 50,
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(0, 50)
  num_karatany?: string;

  @ApiProperty({ 
    example: 'FONK001', 
    description: 'Fonkotany',
    maxLength: 100,
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  fokotany?: string;

  @ApiProperty({ 
    example: 47.521234, 
    description: 'Longitude (coordonnée X)'
  })
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({ 
    example: -18.912345, 
    description: 'Latitude (coordonnée Y)'
  })
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({ 
    example: 'titre', 
    description: 'Statut du terrain (titre, cadastre, certificat-foncier)',
    required: false
  })
  @IsString()
  @IsOptional()
  statut_terrain?: string;
}