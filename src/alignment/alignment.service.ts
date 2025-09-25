import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';
import { Alignment } from './entities/alignment.entity';

@Injectable()
export class AlignmentService {
  constructor(
    @InjectRepository(Alignment)
    private readonly alignmentRepository: Repository<Alignment>,
  ) {}

  // 🔹 Création d'un alignement avec terrain et pièces jointes
  async create(createAlignmentDto: CreateAlignmentDto): Promise<Alignment> {
    // Vérifier si l'id_demandeur existe déjà
    const existingAlignment = await this.alignmentRepository.findOne({
      where: { id_demandeur: createAlignmentDto.id_demandeur }
    });

    if (existingAlignment) {
      throw new ConflictException(
        `Un alignement avec l'id_demandeur '${createAlignmentDto.id_demandeur}' existe déjà`
      );
    }

    const alignment = this.alignmentRepository.create(createAlignmentDto);
    const saved = await this.alignmentRepository.save(alignment);

    const fullAlignment = await this.alignmentRepository.findOne({
      where: { id_align: saved.id_align },
      relations: {
        terrain: true,
        pieces_jointes: true,
      },
    });

    if (!fullAlignment) {
      throw new NotFoundException('Impossible de récupérer l’alignement après création');
    }

    return fullAlignment;
  }

  // 🔹 Récupérer tous les alignements
  async findAll(): Promise<Alignment[]> {
    return await this.alignmentRepository.find({
      relations: {
        pieces_jointes: true,
        terrain: true,
      },
      order: {
        created_at: 'DESC',
      },
    });
  }

  // 🔹 Récupérer un alignement par ID
  async findOne(id: number): Promise<Alignment> {
    const alignment = await this.alignmentRepository.findOne({
      where: { id_align: id },
      relations: {
        pieces_jointes: true,
        terrain: true,
      },
    });

    if (!alignment) {
      throw new NotFoundException(`Alignement avec l'ID ${id} non trouvé`);
    }

    return alignment;
  }

  // 🔹 Mettre à jour un alignement avec retour de l'objet complet
  async update(id: number, updateAlignmentDto: UpdateAlignmentDto): Promise<Alignment> {
    const alignment = await this.findOne(id);
    Object.assign(alignment, updateAlignmentDto);
    const saved = await this.alignmentRepository.save(alignment);

    const fullAlignment = await this.alignmentRepository.findOne({
      where: { id_align: saved.id_align },
      relations: {
        terrain: true,
        pieces_jointes: true,
      },
    });

    if (!fullAlignment) {
      throw new NotFoundException('Impossible de récupérer l’alignement après mise à jour');
    }

    return fullAlignment;
  }

  // 🔹 Supprimer un alignement
  async remove(id: number): Promise<void> {
    const alignment = await this.findOne(id);
    await this.alignmentRepository.remove(alignment);
  }

  // 🔹 Filtrer par demandeur
  async findByDemandeur(idDemandeur: string): Promise<Alignment[]> {
    return await this.alignmentRepository.find({
      where: { id_demandeur: idDemandeur },
      relations: {
        pieces_jointes: true,
        terrain: true,
      },
    });
  }
}
