import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateAlignmentDto {
  @ApiProperty({ description: 'ID du mandataire (citoyen)', example: 'CIT001' })
  @IsString()
  id_mandataire: string;

  @ApiProperty({ description: 'Statut propriétaire', example: 'Propriétaire' })
  @IsString()
  status_proprietaire: string;

  @ApiProperty({ description: 'Qualité du demandeur', example: 'Demandeur principal' })
  @IsString()
  qualite_demandeur: string;

  @ApiProperty({ description: 'NIF (fiscal)', example: '12345678901' })
  @IsString()
  nif: string;

  @ApiProperty({ description: 'ID du certificat de situation juridique', example: 'CERT001' })
  @IsString()
  id_cert_sit_jur: string;

  @ApiProperty({ description: 'ID du plan officiel', example: 'PLAN001' })
  @IsString()
  id_plan_off: string;

  @ApiProperty({ description: 'ID du terrain associé', example: 1, required: false })
  @IsOptional()
  @IsInt()
  id_terrain?: number;

  @ApiProperty({ description: 'Nom du mandataire', example: 'Moana', required: false })
  @IsOptional()
  @IsString()
  nom_mandataire?: string;

  @ApiProperty({ description: 'Prénom du mandataire', example: 'Faly', required: false })
  @IsOptional()
  @IsString()
  prenom_mandataire?: string;

  @ApiProperty({ description: 'CIN ou passeport', example: '101251007007', required: false })
  @IsOptional()
  @IsString()
  cin_passeport?: string;

  @ApiProperty({ description: 'Raison sociale', example: 'Sociologue', required: false })
  @IsOptional()
  @IsString()
  raison_social?: string;

  @ApiProperty({ description: 'Numéro de carte statistique', example: '123456789', required: false })
  @IsOptional()
  @IsString()
  num_carte_stat?: string;

  @ApiProperty({ description: 'Adresse mandataire', example: 'Mahasoabe', required: false })
  @IsOptional()
  @IsString()
  adresse?: string;

  @ApiProperty({ description: 'Fonction du mandataire', example: 'Fonctionnaire', required: false })
  @IsOptional()
  @IsString()
  fonction?: string;

  @ApiProperty({ description: 'Âge du mandataire', example: '23', required: false })
  @IsOptional()
  @IsString()
  age?: string;

  @ApiProperty({ description: 'Nationalité du mandataire', example: 'Malagasy', required: false })
  @IsOptional()
  @IsString()
  nationalite?: string;

  @ApiProperty({ description: 'Status alignement', example: 'En attente', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}
