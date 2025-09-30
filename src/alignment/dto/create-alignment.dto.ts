import { IsString, IsNotEmpty, Length, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlignmentDto {
  @ApiProperty({ example: 'CIT001', description: 'ID du mandataire (citoyen)', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_mandataire: string;

  @ApiProperty({ example: 'Propriétaire', description: 'Statut du propriétaire', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  status_proprietaire: string;

  @ApiProperty({ example: 'Demandeur principal', description: 'Qualité du demandeur', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  qualite_demandeur: string;

  @ApiProperty({ example: '12345678901', description: 'Numéro d\'Identification Fiscale', maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  nif: string;

  @ApiProperty({ example: 'CERT001', description: 'ID du certificat de situation juridique', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_cert_sit_jur: string;

  @ApiProperty({ example: 'PLAN001', description: 'ID du plan officiel', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  id_plan_off: string;

  @ApiProperty({ example: 1, description: 'ID du terrain associé', required: false })
  @IsNumber()
  @IsOptional()
  id_terrain?: number;

  // Champs supplémentaires
  @ApiProperty({ example: 'Moana', description: 'Nom du mandataire', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  nom_demandaire?: string;

  @ApiProperty({ example: 'Faly', description: 'Prénom du mandataire', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  prenom_mandataire?: string;

  @ApiProperty({ example: '101251007007', description: 'CIN ou passeport', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  cin_passeport_demandaire?: string;

  @ApiProperty({ example: 'Mahasoabe', description: 'Adresse du mandataire', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  adresse_demandaire?: string;

  @ApiProperty({ example: 'Fonctionnaire', description: 'Fonction du mandataire', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  fonction_demandaire?: string;

  @ApiProperty({ example: 'Malagasy', description: 'Nationalité du mandataire', maxLength: 50, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 50)
  nationalite_demandaire?: string;

  @ApiProperty({ example: '23', description: 'Âge du mandataire', maxLength: 3, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 3)
  age_demandaire?: string;

  @ApiProperty({ example: 'sociologue', description: 'Raison sociale', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  raison_social?: string;

  @ApiProperty({ example: '123456789', description: 'Numéro de carte statistique', maxLength: 100, required: false })
  @IsString()
  @IsOptional()
  @Length(0, 100)
  num_carte_stat?: string;
}
