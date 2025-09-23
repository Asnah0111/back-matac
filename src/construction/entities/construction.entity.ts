import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Alignment } from '../../alignment/entities/alignment.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('construction')
export class Construction {
  @ApiProperty({ description: 'Identifiant unique de la construction' })
  @PrimaryGeneratedColumn()
  id_const: number;

  @ApiProperty({ description: 'Nature des travaux', example: 'Construction neuve' })
  @Column({ type: 'varchar', length: 200 })
  nature_travaux: string;

  @ApiProperty({ description: 'Type de construction', example: 'Résidentiel' })
  @Column({ type: 'varchar', length: 100 })
  type: string;

  @ApiProperty({ description: 'ID du mandataire (référence vers alignement)', example: 'CIT001' })
  @Column({ type: 'varchar', length: 100 })
  id_mandataire: string;

  @ApiProperty({ description: 'Date de création' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'Date de mise à jour' })
  @UpdateDateColumn()
  updated_at: Date;

  @ApiProperty({ type: () => Alignment, description: 'Alignement associé' })
  @ManyToOne(() => Alignment, { eager: true })
  alignment: Alignment;
}
