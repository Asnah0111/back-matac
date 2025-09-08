import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { PieceJointe } from '../../piece-jointe/entities/piece-jointe.entity';
import { Terrain } from '../../terrain/entities/terrain.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('alignement')
export class Alignment {
  @ApiProperty({ description: 'Identifiant unique de l\'alignement' })
  @PrimaryGeneratedColumn()
  id_align: number;

  @ApiProperty({ description: 'ID du mandataire (citoyen)', example: 'CIT001' })
  @Column({ type: 'varchar', length: 100, unique: true })
  id_mandataire: string;

  @ApiProperty({ description: 'Statut propriétaire', example: 'Propriétaire' })
  @Column({ type: 'varchar', length: 100 })
  status_proprietaire: string;

  @ApiProperty({ description: 'Qualité du demandeur', example: 'Demandeur principal' })
  @Column({ type: 'varchar', length: 100 })
  qualite_demandeur: string;

  @ApiProperty({ description: 'NIF (fiscal)', example: '12345678901' })
  @Column({ type: 'varchar', length: 20 })
  nif: string;

  @ApiProperty({ description: 'ID du certificat de situation juridique', example: 'CERT001' })
  @Column({ type: 'varchar', length: 100 })
  id_cert_sit_jur: string;

  @ApiProperty({ description: 'ID du plan officiel', example: 'PLAN001' })
  @Column({ type: 'varchar', length: 100 })
  id_plan_off: string;

  @ApiProperty({ description: 'ID du terrain associé', example: 1, nullable: true })
  @Column({ type: 'int', nullable: true })
  id_terrain?: number;

  @ApiProperty({ description: 'Date de création' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Date de mise à jour' })
  @UpdateDateColumn()
  updated_at: Date;

  @ApiProperty({ type: () => [PieceJointe], description: 'Pièces jointes associées' })
  @OneToMany(() => PieceJointe, (piece) => piece.alignment, { cascade: true })
  pieces_jointes: PieceJointe[];

  @ApiProperty({ type: () => Terrain, description: 'Terrain associé' })
  @ManyToOne(() => Terrain)
  @JoinColumn({ name: 'id_terrain' })
  terrain: Terrain;
}