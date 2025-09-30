import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Alignment } from '../../alignment/entities/alignment.entity';
import { Terrain } from '../../terrain/entities/terrain.entity';
import { ApiProperty } from '@nestjs/swagger';

export class Piece {
  @ApiProperty({ description: 'Niveau de la pièce' })
  niveau: number;

  @ApiProperty({ description: 'Destination de la pièce' })
  destination: string;

  @ApiProperty({ description: 'Surface de la pièce en m²' })
  surface: number;

  @ApiProperty({ description: 'Surface des ouvertures en m²' })
  surfaceOuverture: number;

  @ApiProperty({ description: 'Hauteur des linteaux en mètres' })
  hauteurLinteaux: number;

  @ApiProperty({ description: 'Hauteur sous plafond en mètres' })
  hauteurPlafond: number;
}

@Entity('construction')
export class Construction {
  @ApiProperty({ description: 'Identifiant unique de la construction' })
  @PrimaryGeneratedColumn()
  id_const: number;

  // Section 1: Identification
  @ApiProperty({ description: 'Nature des travaux', example: 'Nouvelle construction' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  natureTravaux: string;

  @ApiProperty({ description: 'Type d\'affectation', example: 'Maison individuelle' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  typeAffectation: string;

  @ApiProperty({ description: 'Référence d\'alignement', example: 'REF-2024-001' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  referenceAlignement: string;

  // Propriétaire
  @ApiProperty({ description: 'Civilité du propriétaire', example: 'Monsieur' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  civiliteProprietaire: string;

  @ApiProperty({ description: 'Nom complet du propriétaire' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  nomProprietaire: string;

  @ApiProperty({ description: 'Téléphone du propriétaire' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  telProprietaire: string;

  @ApiProperty({ description: 'Email du propriétaire' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  emailProprietaire: string;

  @ApiProperty({ description: 'CIN du propriétaire' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  cinProprietaire: string;

  @ApiProperty({ description: 'Adresse du propriétaire' })
  @Column({ type: 'text', nullable: true })
  adresseProprietaire: string;

  // Section 2: Renseignement architectural
  @ApiProperty({ description: 'Auteur de l\'ouvrage', example: 'Architecte' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  auteurOuvrage: string;

  @ApiProperty({ description: 'Nom de l\'auteur' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  nomAuteur: string;

  @ApiProperty({ description: 'Fonction de l\'auteur' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  fonctionAuteur: string;

  @ApiProperty({ description: 'Numéro d\'ordre de l\'auteur' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  numeroOrdreAuteur: string;

  @ApiProperty({ description: 'Téléphone de l\'auteur' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  telAuteur: string;

  @ApiProperty({ description: 'Email de l\'auteur' })
  @Column({ type: 'varchar', length: 200, nullable: true })
  emailAuteur: string;

  @ApiProperty({ description: 'Adresse de l\'auteur' })
  @Column({ type: 'text', nullable: true })
  adresseAuteur: string;

  @ApiProperty({ description: 'Zone d\'implantation', example: 'Zone à construire' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  zoneImplantation: string;

  @ApiProperty({ description: 'Matériaux utilisés' })
  @Column({ type: 'text', nullable: true })
  materiaux: string;

  @ApiProperty({ description: 'Durée estimée des travaux en mois' })
  @Column({ type: 'int', nullable: true })
  dureeTravaux: number;

  @ApiProperty({ description: 'Montant estimé des travaux en Ariary' })
  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  montantTravaux: number;

  @ApiProperty({ description: 'Longueur du projet en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  longueurProjet: number;

  @ApiProperty({ description: 'Largeur du projet en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  largeurProjet: number;

  @ApiProperty({ description: 'Hauteur du projet en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  hauteurProjet: number;

  // Section 3: Renseignement technique
  @ApiProperty({ description: 'Surface du terrain en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  surfaceTerrain: number;

  @ApiProperty({ description: 'Emprise au sol existant en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  empriseSolExistant: number;

  @ApiProperty({ description: 'Emprise au sol en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  empriseSol: number;

  @ApiProperty({ description: 'CES du projet' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cesProjet: number;

  @ApiProperty({ description: 'Surface de plancher des bâtiments existants en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  surfacePlancherExistant: number;

  @ApiProperty({ description: 'Surface de plancher du projet en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  surfacePlancherProjet: number;

  @ApiProperty({ description: 'Surface verte en m²' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  surfaceVerte: number;

  @ApiProperty({ description: 'Niveau projet R+ en m³' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  niveauRPlus: number;

  // Distances
  @ApiProperty({ description: 'Distance par rapport au chemin public en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceCheminPublic: number;

  @ApiProperty({ description: 'Distance par rapport au sentier public en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceSentierPublic: number;

  @ApiProperty({ description: 'Distance par rapport à la route nationale en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceRouteNationale: number;

  @ApiProperty({ description: 'Distance par rapport au cours d\'eau/rivière en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceRiviere: number;

  @ApiProperty({ description: 'Distance par rapport au canal public en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceCanalPublic: number;

  @ApiProperty({ description: 'Distance par rapport aux installations de transport d\'énergie en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceInstallationEnergie: number;

  @ApiProperty({ description: 'Distance par rapport aux lignes électriques à haute tension en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceLigneElectrique: number;

  @ApiProperty({ description: 'Distance du projet par rapport aux limites de la propriété en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceProjetLimitePropriete: number;

  @ApiProperty({ description: 'Distance minimale entre le projet et une construction existante en mètres' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distanceMinimaleProjetConstructionExistante: number;

  // Équipements
  @ApiProperty({ description: 'Présence de raccordement eau' })
  @Column({ type: 'boolean', nullable: true })
  equipementEau: boolean;

  @ApiProperty({ description: 'Présence de raccordement électricité' })
  @Column({ type: 'boolean', nullable: true })
  equipementElectricite: boolean;

  @ApiProperty({ description: 'Présence d\'assainissement' })
  @Column({ type: 'boolean', nullable: true })
  equipementAssainissement: boolean;

  @ApiProperty({ description: 'Présence de voie d\'accès' })
  @Column({ type: 'boolean', nullable: true })
  equipementVoieAcces: boolean;

  // Caractéristiques des pièces
  @ApiProperty({ type: [Piece], description: 'Liste des pièces' })
  @Column({ type: 'jsonb', nullable: true })
  pieces: Piece[];

  @ApiProperty({ description: 'Présence de sous-sol' })
  @Column({ type: 'boolean', nullable: true })
  pieceSousSol: boolean;

  // Équipement de l'ouvrage
  @ApiProperty({ description: 'Présence de VH/VB' })
  @Column({ type: 'boolean', nullable: true })
  existantVhVb: boolean;

  @ApiProperty({ description: 'Présence de terrasse' })
  @Column({ type: 'boolean', nullable: true })
  existantTerasse: boolean;

  @ApiProperty({ description: 'Présence de garde-corps' })
  @Column({ type: 'boolean', nullable: true })
  existantGardeCorp: boolean;

  @ApiProperty({ description: 'Nombre de vérandas' })
  @Column({ type: 'int', nullable: true })
  nbrVeranda: number;

  @ApiProperty({ description: 'Nombre de couloirs' })
  @Column({ type: 'int', nullable: true })
  nbrCouloir: number;

  @ApiProperty({ description: 'Nombre d\'escaliers' })
  @Column({ type: 'int', nullable: true })
  nbrEscalier: number;

  @ApiProperty({ description: 'Nombre de servitudes/voies d\'accès' })
  @Column({ type: 'int', nullable: true })
  nbrServitude: number;

  // Assainissement
  @ApiProperty({ description: 'Branchement au réseau public pour l\'écoulement des eaux' })
  @Column({ type: 'boolean', nullable: true })
  existantBranchementEauPublic: boolean;

  @ApiProperty({ description: 'Utilisation de fosse septique' })
  @Column({ type: 'boolean', nullable: true })
  utilisationFosseEptique: boolean;

  @ApiProperty({ description: 'Type de fosse septique', nullable: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  typeFosseEptique: string;

  @ApiProperty({ description: 'Évacuation des eaux pluviales' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  evacuationEauxPluviales: number;

  @ApiProperty({ description: 'Nombre d\'usagers de la fosse' })
  @Column({ type: 'int', nullable: true })
  nbrUsageFosse: number;

  @ApiProperty({ description: 'Capacité de la fosse' })
  @Column({ type: 'int', nullable: true })
  capaciteFosse: number;

  @ApiProperty({ description: 'Utilisation d\'un puisard' })
  @Column({ type: 'boolean', nullable: true })
  utilisationPuisard: boolean;

  @ApiProperty({ description: 'Implantation du puisard par rapport à la fondation' })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  puisardAuFondation: number;

  @ApiProperty({ description: 'Présentation de la gouttière et descentes d\'EP' })
  @Column({ type: 'boolean', nullable: true })
  presentationGoutiere: boolean;

  @ApiProperty({ description: 'Présentation des regards de collecte' })
  @Column({ type: 'boolean', nullable: true })
  presentationRegardCollecte: boolean;

  // Documents (stockage des chemins des fichiers)
  @ApiProperty({ description: 'Plan de situation du terrain', type: [String] })
  @Column({ type: 'jsonb', nullable: true })
  planTerrain: string[];

  @ApiProperty({ description: 'Titre de propriété', type: [String] })
  @Column({ type: 'jsonb', nullable: true })
  droitPropriete: string[];

  @ApiProperty({ description: 'Plan des limites du terrain', type: [String] })
  @Column({ type: 'jsonb', nullable: true })
  planLimiteTerrain: string[];

  @ApiProperty({ description: 'Plan de masse', type: [String] })
  @Column({ type: 'jsonb', nullable: true })
  planMasse: string[];

  @ApiProperty({ description: 'Plan des façades', type: [String] })
  @Column({ type: 'jsonb', nullable: true })
  planFacade: string[];

  @ApiProperty({ description: 'ID de l\'alignement associé', example: 1 })
  @Column({ type: 'int' })
  id_align: number;

  @ApiProperty({ description: 'Date de création' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Date de mise à jour' })
  @UpdateDateColumn()
  updated_at: Date;

  @ApiProperty({ type: () => Alignment, description: 'Alignement associé' })
  @ManyToOne(() => Alignment, { eager: true })
  @JoinColumn({ name: 'id_align', referencedColumnName: 'id_align' })
  alignment: Alignment;

  @ApiProperty({ description: 'ID du terrain associé', example: 1 })
  @Column({ type: 'int', nullable: true })
  id_terrain: number;

  @ApiProperty({ type: () => Terrain, description: 'Terrain associé' })
  @ManyToOne(() => Terrain, { eager: true })
  @JoinColumn({ name: 'id_terrain', referencedColumnName: 'id_terrain' })
  terrain: Terrain;
}
