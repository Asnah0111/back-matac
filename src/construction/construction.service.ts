import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';

@Injectable()
export class ConstructionService {
  constructor(
    @InjectRepository(Construction)
    private readonly constructionRepository: Repository<Construction>,
  ) {}

  async create(createConstructionDto: CreateConstructionDto): Promise<Construction> {
    const construction = this.constructionRepository.create(createConstructionDto);
    return await this.constructionRepository.save(construction);
  }

  async findAll(): Promise<Construction[]> {
    return await this.constructionRepository.find({
      relations: {
        alignment: true,
        terrain: true
      },
      order: {
        created_at: 'DESC'
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

  async findByMandataire(idMandataire: string): Promise<Construction[]> {
    return await this.constructionRepository.find({
      where: { id_mandataire: idMandataire },
      relations: {
        alignment: true
      }
    });
  }
}
