import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Alignment } from '../../alignment/entities/alignment.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('piece_jointe')
export class PieceJointe {
  @ApiProperty({ description: 'Identifiant unique de la pièce jointe' })
  @PrimaryGeneratedColumn()
  id_piece: number;

  @ApiProperty({ description: 'Nom de la pièce jointe', example: 'Certificat de propriété.pdf' })
  @Column({ type: 'varchar', length: 255 })
  nom_piece: string;

  @ApiProperty({ description: 'URL ou chemin du fichier', example: 'https://files.service.com/cert123.pdf' })
  @Column({ type: 'text', nullable: true })
  url_fichier: string;

  @ApiProperty({ description: 'Type MIME du fichier', example: 'application/pdf' })
  @Column({ type: 'varchar', length: 100, nullable: true })
  type_fichier: string;

  @ApiProperty({ description: 'Taille du fichier en bytes', example: 1024000 })
  @Column({ type: 'bigint', nullable: true })
  taille_fichier: number;

  @ApiProperty({ description: 'Date d\'upload' })
  @CreateDateColumn()
  uploaded_at: Date;

  @ApiProperty({ description: 'ID de l\'alignement associé' })
  @Column()
  id_align: number;

  @ApiProperty({ type: () => Alignment, description: 'Alignement associé' })
  @ManyToOne(() => Alignment, (alignment) => alignment.pieces_jointes, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'id_align' })
  alignment: Alignment;
}