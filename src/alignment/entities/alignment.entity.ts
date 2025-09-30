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
  @Column({ type: 'varchar', length: 100})
  id_mandataire: string;

  @ApiProperty({ description: 'Statut propriétaire', example: 'Propriétaire' }) 
  @Column({ type: 'varchar', length: 100})
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

  @ApiProperty({ description: 'Raison sociale', example: 'sociologue' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  raison_social: string;

  @ApiProperty({ description: 'Numéro de carte statistique', example: '123456789' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  num_carte_stat: string;

  @ApiProperty({ description: 'Nom du mandataire', example: 'Moana' })
  @Column({ type: 'varchar', length: 100 })
  nom_demandaire: string;

  @ApiProperty({ description: 'Prénom du mandataire', example: 'Faly' })
  @Column({ type: 'varchar', length: 100 })
  prenom_mandataire: string;

  @ApiProperty({ description: 'CIN ou passeport', example: '101251007007' })
  @Column({ type: 'varchar', length: 100 })
  cin_passeport_demandaire: string;

  @ApiProperty({ description: 'Adresse mandataire', example: 'Mahasoabe' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  adresse_demandaire: string;

  @ApiProperty({ description: 'Fonction du mandataire', example: 'Fonctionnaire' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  fonction_demandaire: string;

  @ApiProperty({ description: 'Nationalité du mandataire', example: 'Malagasy' })
  @Column({ type: 'varchar', length: 50, nullable: true })
  nationalite_demandaire: string;

  @ApiProperty({ description: 'Âge du mandataire', example: '23' })
  @Column({ type: 'varchar', length: 3, nullable: true })
  age_demandaire: string;
}