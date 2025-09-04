import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createAlignmentDto: CreateAlignmentDto): Promise<Alignment> {
    const alignment = this.alignmentRepository.create(createAlignmentDto);
    return await this.alignmentRepository.save(alignment);
  }

  async findAll(): Promise<Alignment[]> {
    return await this.alignmentRepository.find({
      relations: {
        pieces_jointes: true,
        terrain: true
      },
      order: {
        created_at: 'DESC'
      }
    });
  }

  async findOne(id: number): Promise<Alignment> {
    const alignment = await this.alignmentRepository.findOne({
      where: { id_align: id },
      relations: {
        pieces_jointes: true,
        terrain: true
      }
    });
    
    if (!alignment) {
      throw new NotFoundException(`Alignement avec l'ID ${id} non trouvé`);
    }
    
    return alignment;
  }

  async update(id: number, updateAlignmentDto: UpdateAlignmentDto): Promise<Alignment> {
    const alignment = await this.findOne(id);
    Object.assign(alignment, updateAlignmentDto);
    return await this.alignmentRepository.save(alignment);
  }

  async remove(id: number): Promise<void> {
    const alignment = await this.findOne(id);
    await this.alignmentRepository.remove(alignment);
  }

  async findByMandataire(idMandataire: string): Promise<Alignment[]> {
    return await this.alignmentRepository.find({
      where: { id_mandataire: idMandataire },
      relations: {
        pieces_jointes: true,
        terrain: true
      }
    });
  }
}