import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { Terrain } from './entities/terrain.entity';

@Injectable()
export class TerrainService {
  constructor(
    @InjectRepository(Terrain)
    private readonly terrainRepository: Repository<Terrain>,
  ) {}

  async create(createTerrainDto: CreateTerrainDto): Promise<Terrain> {
    const terrainData = {
      ...createTerrainDto,
      statut_terrain: createTerrainDto.statut_terrain || 'titre' // Default to 'titre' if not provided
    };
    const terrain = this.terrainRepository.create(terrainData);
    return await this.terrainRepository.save(terrain);
  }

  async findAll(): Promise<Terrain[]> {
    return await this.terrainRepository.find({
      order: {
        created_at: 'DESC'
      }
    });
  }

  async findOne(id: number): Promise<Terrain> {
    const terrain = await this.terrainRepository.findOne({
      where: { id_terrain: id }
    });
    
    if (!terrain) {
      throw new NotFoundException(`Terrain avec l'ID ${id} non trouvé`);
    }
    
    return terrain;
  }

  async update(id: number, updateTerrainDto: UpdateTerrainDto): Promise<Terrain> {
    const terrain = await this.findOne(id);
    Object.assign(terrain, updateTerrainDto);
    return await this.terrainRepository.save(terrain);
  }

  async remove(id: number): Promise<void> {
    const terrain = await this.findOne(id);
    await this.terrainRepository.remove(terrain);
  }

  async findByNumTitre(numTitre: string): Promise<Terrain[]> {
    return await this.terrainRepository.find({
      where: { num_titre: numTitre }
    });
  }

  async findByProprietaire(nomProprietaire: string): Promise<Terrain[]> {
    return await this.terrainRepository.find({
      where: { nom_proprietaire: nomProprietaire }
    });
  }
}