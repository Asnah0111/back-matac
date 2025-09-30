import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Construction } from './entities/construction.entity';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Alignment } from '../alignment/entities/alignment.entity';
import { CreateAlignmentDto } from '../alignment/dto/create-alignment.dto';

@Injectable()
export class ConstructionService {
  constructor(
    @InjectRepository(Construction)
    private readonly constructionRepository: Repository<Construction>,
    @InjectRepository(Alignment)
    private readonly alignmentRepository: Repository<Alignment>,
  ) {}

  async create(createConstructionDto: CreateConstructionDto): Promise<Construction> {
    // Vérifier si l'alignement existe
    const alignment = await this.alignmentRepository.findOne({
      where: { id_align: createConstructionDto.id_align }
    });

    if (!alignment) {
      throw new NotFoundException(`Aucun alignement trouvé avec l'ID ${createConstructionDto.id_align}`);
    }

    // Créer la construction
    const construction = this.constructionRepository.create(createConstructionDto);
    return await this.constructionRepository.save(construction);
  }

  async findAll(): Promise<Construction[]> {
    return await this.constructionRepository.find({
      relations: {
        alignment: true,
        terrain: true
      }
    });
  }

  async findOne(id: number): Promise<Construction> {
    const construction = await this.constructionRepository.findOne({
      where: { id_const: id },
      relations: {
        alignment: true,
        terrain: true
      }
    });

    if (!construction) {
      throw new NotFoundException(`Construction avec l'ID ${id} non trouvée`);
    }

    return construction;
  }

  async update(id: number, updateConstructionDto: UpdateConstructionDto): Promise<Construction> {
    const construction = await this.findOne(id);
    Object.assign(construction, updateConstructionDto);
    return await this.constructionRepository.save(construction);
  }

  async remove(id: number): Promise<void> {
    const construction = await this.findOne(id);
    await this.constructionRepository.remove(construction);
  }

  async findByAlignment(idAlign: number): Promise<Construction[]> {
    return await this.constructionRepository.find({
      where: { id_align: idAlign },
      relations: {
        alignment: true,
        terrain: true
      }
    });
  }
}
