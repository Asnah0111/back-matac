import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlignmentDto {
  @ApiProperty({ 
    example: 'CIT001', 
    description: 'ID du mandataire (citoyen)',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_mandataire: string;

  @ApiProperty({ 
    example: 'Propriétaire', 
    description: 'Statut du propriétaire',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  status_proprietaire: string;

  @ApiProperty({ 
    example: 'Demandeur principal', 
    description: 'Qualité du demandeur',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  qualite_demandeur: string;

  @ApiProperty({ 
    example: '12345678901', 
    description: 'Numéro d\'Identification Fiscale',
    maxLength: 20
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  nif: string;

  @ApiProperty({ 
    example: 'CERT001', 
    description: 'ID du certificat de situation juridique',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_cert_sit_jur: string;

  @ApiProperty({ 
    example: 'PLAN001', 
    description: 'ID du plan officiel',
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_plan_off: string;

  @ApiProperty({ 
    example: 1, 
    description: 'ID du terrain associé',
    required: false
  })
  @IsNumber()
  id_terrain?: number;
}
