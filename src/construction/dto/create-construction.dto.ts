import { IsString, IsNotEmpty, Length, IsOptional, IsNumber, IsBoolean, IsArray, ValidateNested, IsEmail, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PieceDto {
  @ApiProperty({ description: 'Niveau de la pièce' })
  @IsNumber()
  niveau: number;

  @ApiProperty({ description: 'Destination de la pièce' })
  @IsString()
  destination: string;

  @ApiProperty({ description: 'Surface de la pièce en m²' })
  @IsNumber()
  surface: number;

  @ApiProperty({ description: 'Surface des ouvertures en m²' })
  @IsNumber()
  surfaceOuverture: number;

  @ApiProperty({ description: 'Hauteur des linteaux en mètres' })
  @IsNumber()
  hauteurLinteaux: number;

  @ApiProperty({ description: 'Hauteur sous plafond en mètres' })
  @IsNumber()
  hauteurPlafond: number;
}

export class CreateConstructionDto {
  // Section 1: Identification
  @ApiProperty({ 
    example: 'Nouvelle construction', 
    description: 'Nature des travaux',
    required: false
  })
  @IsOptional()
  @IsString()
  natureTravaux?: string;

  @ApiProperty({ 
    example: 'Maison individuelle', 
    description: 'Type d\'affectation',
    required: false
  })
  @IsOptional()
  @IsString()
  typeAffectation?: string;

  @ApiProperty({ 
    example: 'REF-2024-001', 
    description: 'Référence d\'alignement',
    required: false
  })
  @IsOptional()
  @IsString()
  referenceAlignement?: string;

  // Propriétaire
  @ApiProperty({ 
    example: 'Monsieur', 
    description: 'Civilité du propriétaire',
    required: false
  })
  @IsOptional()
  @IsString()
  civiliteProprietaire?: string;

  @ApiProperty({ 
    description: 'Nom complet du propriétaire',
    required: false
  })
  @IsOptional()
  @IsString()
  nomProprietaire?: string;

  @ApiProperty({ 
    description: 'Téléphone du propriétaire',
    required: false
  })
  @IsOptional()
  @IsString()
  telProprietaire?: string;

  @ApiProperty({ 
    description: 'Email du propriétaire',
    required: false
  })
  @IsOptional()
  @IsEmail()
  emailProprietaire?: string;

  @ApiProperty({ 
    description: 'CIN du propriétaire',
    required: false
  })
  @IsOptional()
  @IsString()
  cinProprietaire?: string;

  @ApiProperty({ 
    description: 'Adresse du propriétaire',
    required: false
  })
  @IsOptional()
  @IsString()
  adresseProprietaire?: string;

  // Section 2: Renseignement architectural
  @ApiProperty({ 
    example: 'Architecte', 
    description: 'Auteur de l\'ouvrage',
    required: false
  })
  @IsOptional()
  @IsString()
  auteurOuvrage?: string;

  @ApiProperty({ 
    description: 'Nom de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsString()
  nomAuteur?: string;

  @ApiProperty({ 
    description: 'Fonction de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsString()
  fonctionAuteur?: string;

  @ApiProperty({ 
    description: 'Numéro d\'ordre de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsString()
  numeroOrdreAuteur?: string;

  @ApiProperty({ 
    description: 'Téléphone de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsString()
  telAuteur?: string;

  @ApiProperty({ 
    description: 'Email de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsEmail()
  emailAuteur?: string;

  @ApiProperty({ 
    description: 'Adresse de l\'auteur',
    required: false
  })
  @IsOptional()
  @IsString()
  adresseAuteur?: string;

  @ApiProperty({ 
    example: 'Zone à construire', 
    description: 'Zone d\'implantation',
    required: false
  })
  @IsOptional()
  @IsString()
  zoneImplantation?: string;

  @ApiProperty({ 
    description: 'Matériaux utilisés',
    required: false
  })
  @IsOptional()
  @IsString()
  materiaux?: string;

  @ApiProperty({ 
    description: 'Durée estimée des travaux en mois',
    required: false
  })
  @IsOptional()
  @IsNumber()
  dureeTravaux?: number;

  @ApiProperty({ 
    description: 'Montant estimé des travaux en Ariary',
    required: false
  })
  @IsOptional()
  @IsNumber()
  montantTravaux?: number;

  @ApiProperty({ 
    description: 'Longueur du projet en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  longueurProjet?: number;

  @ApiProperty({ 
    description: 'Largeur du projet en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  largeurProjet?: number;

  @ApiProperty({ 
    description: 'Hauteur du projet en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  hauteurProjet?: number;

  // Section 3: Renseignement technique
  @ApiProperty({ 
    description: 'Surface du terrain en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  surfaceTerrain?: number;

  @ApiProperty({ 
    description: 'Emprise au sol existant en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  empriseSolExistant?: number;

  @ApiProperty({ 
    description: 'Emprise au sol en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  empriseSol?: number;

  @ApiProperty({ 
    description: 'CES du projet',
    required: false
  })
  @IsOptional()
  @IsNumber()
  cesProjet?: number;

  @ApiProperty({ 
    description: 'Surface de plancher des bâtiments existants en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  surfacePlancherExistant?: number;

  @ApiProperty({ 
    description: 'Surface de plancher du projet en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  surfacePlancherProjet?: number;

  @ApiProperty({ 
    description: 'Surface verte en m²',
    required: false
  })
  @IsOptional()
  @IsNumber()
  surfaceVerte?: number;

  @ApiProperty({ 
    description: 'Niveau projet R+ en m³',
    required: false
  })
  @IsOptional()
  @IsNumber()
  niveauRPlus?: number;

  // Distances
  @ApiProperty({ 
    description: 'Distance par rapport au chemin public en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceCheminPublic?: number;

  @ApiProperty({ 
    description: 'Distance par rapport au sentier public en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceSentierPublic?: number;

  @ApiProperty({ 
    description: 'Distance par rapport à la route nationale en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceRouteNationale?: number;

  @ApiProperty({ 
    description: 'Distance par rapport au cours d\'eau/rivière en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceRiviere?: number;

  @ApiProperty({ 
    description: 'Distance par rapport au canal public en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceCanalPublic?: number;

  @ApiProperty({ 
    description: 'Distance par rapport aux installations de transport d\'énergie en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceInstallationEnergie?: number;

  @ApiProperty({ 
    description: 'Distance par rapport aux lignes électriques à haute tension en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceLigneElectrique?: number;

  @ApiProperty({ 
    description: 'Distance du projet par rapport aux limites de la propriété en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceProjetLimitePropriete?: number;

  @ApiProperty({ 
    description: 'Distance minimale entre le projet et une construction existante en mètres',
    required: false
  })
  @IsOptional()
  @IsNumber()
  distanceMinimaleProjetConstructionExistante?: number;

  // Équipements
  @ApiProperty({ 
    description: 'Présence de raccordement eau',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  equipementEau?: boolean;

  @ApiProperty({ 
    description: 'Présence de raccordement électricité',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  equipementElectricite?: boolean;

  @ApiProperty({ 
    description: 'Présence d\'assainissement',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  equipementAssainissement?: boolean;

  @ApiProperty({ 
    description: 'Présence de voie d\'accès',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  equipementVoieAcces?: boolean;

  // Caractéristiques des pièces
  @ApiProperty({ 
    type: [PieceDto], 
    description: 'Liste des pièces',
    required: false
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PieceDto)
  pieces?: PieceDto[];

  @ApiProperty({ 
    description: 'Présence de sous-sol',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  pieceSousSol?: boolean;

  // Équipement de l'ouvrage
  @ApiProperty({ 
    description: 'Présence de VH/VB',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  existantVhVb?: boolean;

  @ApiProperty({ 
    description: 'Présence de terrasse',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  existantTerasse?: boolean;

  @ApiProperty({ 
    description: 'Présence de garde-corps',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  existantGardeCorp?: boolean;

  @ApiProperty({ 
    description: 'Nombre de vérandas',
    required: false
  })
  @IsOptional()
  @IsNumber()
  nbrVeranda?: number;

  @ApiProperty({ 
    description: 'Nombre de couloirs',
    required: false
  })
  @IsOptional()
  @IsNumber()
  nbrCouloir?: number;

  @ApiProperty({ 
    description: 'Nombre d\'escaliers',
    required: false
  })
  @IsOptional()
  @IsNumber()
  nbrEscalier?: number;

  @ApiProperty({ 
    description: 'Nombre de servitudes/voies d\'accès',
    required: false
  })
  @IsOptional()
  @IsNumber()
  nbrServitude?: number;

  // Assainissement
  @ApiProperty({ 
    description: 'Branchement au réseau public pour l\'écoulement des eaux',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  existantBranchementEauPublic?: boolean;

  @ApiProperty({ 
    description: 'Utilisation de fosse septique',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  utilisationFosseEptique?: boolean;

  @ApiProperty({ 
    description: 'Type de fosse septique',
    required: false
  })
  @IsOptional()
  @IsString()
  typeFosseEptique?: string;

  @ApiProperty({ 
    description: 'Évacuation des eaux pluviales',
    required: false
  })
  @IsOptional()
  @IsNumber()
  evacuationEauxPluviales?: number;

  @ApiProperty({ 
    description: 'Nombre d\'usagers de la fosse',
    required: false
  })
  @IsOptional()
  @IsNumber()
  nbrUsageFosse?: number;

  @ApiProperty({ 
    description: 'Capacité de la fosse',
    required: false
  })
  @IsOptional()
  @IsNumber()
  capaciteFosse?: number;

  @ApiProperty({ 
    description: 'Utilisation d\'un puisard',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  utilisationPuisard?: boolean;

  @ApiProperty({ 
    description: 'Implantation du puisard par rapport à la fondation',
    required: false
  })
  @IsOptional()
  @IsNumber()
  puisardAuFondation?: number;

  @ApiProperty({ 
    description: 'Présentation de la gouttière et descentes d\'EP',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  presentationGoutiere?: boolean;

  @ApiProperty({ 
    description: 'Présentation des regards de collecte',
    required: false
  })
  @IsOptional()
  @IsBoolean()
  presentationRegardCollecte?: boolean;

  // Documents (chemins des fichiers)
  @ApiProperty({ 
    description: 'Plan de situation du terrain',
    type: [String],
    required: false
  })
  @IsOptional()
  @IsArray()
  planTerrain?: string[];

  @ApiProperty({ 
    description: 'Titre de propriété',
    type: [String],
    required: false
  })
  @IsOptional()
  @IsArray()
  droitPropriete?: string[];

  @ApiProperty({ 
    description: 'Plan des limites du terrain',
    type: [String],
    required: false
  })
  @IsOptional()
  @IsArray()
  planLimiteTerrain?: string[];

  @ApiProperty({ 
    description: 'Plan de masse',
    type: [String],
    required: false
  })
  @IsOptional()
  @IsArray()
  planMasse?: string[];

  @ApiProperty({ 
    description: 'Plan des façades',
    type: [String],
    required: false
  })
  @IsOptional()
  @IsArray()
  planFacade?: string[];

  @ApiProperty({ 
    example: 1, 
    description: 'ID de l\'alignement associé',
  })
  @IsNumber()
  @IsNotEmpty()
  id_align: number;

  @ApiProperty({ 
    example: 1, 
    description: 'ID du terrain associé',
    required: false
  })
  @IsOptional()
  @IsNumber()
  id_terrain?: number;
}
