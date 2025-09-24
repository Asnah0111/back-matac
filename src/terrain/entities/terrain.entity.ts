import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('terrain')
export class Terrain {
  @ApiProperty({ description: 'Identifiant unique du terrain' })
  @PrimaryGeneratedColumn()
  id_terrain: number;

  @ApiProperty({ description: 'Numéro du titre foncier', example: 'TIT001' })
  @Column({ type: 'varchar', length: 100, })
  num_titre: string;

  @ApiProperty({ description: 'Indice du terrain', example: 'IND001', nullable: true })
  @Column({ type: 'varchar', length: 50, nullable: true })
  indice?: string;

  @ApiProperty({ description: 'Nom du propriétaire', example: 'Jean Dupont' })
  @Column({ type: 'varchar', length: 200 })
  nom_proprietaire: string;

  @ApiProperty({ description: 'Adresse du terrain', example: 'Lot II 34 Bis Ambohijatovo' })
  @Column({ type: 'varchar', length: 300 })
  adresse: string;

  @ApiProperty({ description: 'Superficie en m²', example: 500.75 })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  superficie: number;

  @ApiProperty({ description: 'Numéro de parcelle', example: 'PARC001' })
  @Column({ type: 'varchar', length: 50 })
  num_parcelle: string;

  @ApiProperty({ description: 'Section dite', example: 'Section A' })
  @Column({ type: 'varchar', length: 100 })
  section_dite: string;

  @ApiProperty({ description: 'Canton', example: 'Canton Nord' })
  @Column({ type: 'varchar', length: 100 })
  canton: string;

  @ApiProperty({ description: 'Numéro Karatany', example: 'KAR001', nullable: true })
  @Column({ type: 'varchar', length: 50, nullable: true })
  num_karatany?: string;

  @ApiProperty({ description: 'Fonkotany', example: 'FONK001', nullable: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  fokotany?: string;

  @ApiProperty({ description: 'Longitude (coordonnée X)', example: 47.521234 })
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @ApiProperty({ description: 'Latitude (coordonnée Y)', example: -18.912345 })
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @ApiProperty({ description: 'Statut du terrain (titre, cadastre, certificat-foncier)', example: 'titre' })
  @Column({ type: 'varchar', length: 50, nullable: true, default: 'titre' })
  statut_terrain: string;

  @ApiProperty({ description: 'Date de création' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Date de mise à jour' })
  @UpdateDateColumn()
  updated_at: Date;
}