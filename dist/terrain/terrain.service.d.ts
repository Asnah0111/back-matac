import { Repository } from 'typeorm';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { Terrain } from './entities/terrain.entity';
export declare class TerrainService {
    private readonly terrainRepository;
    constructor(terrainRepository: Repository<Terrain>);
    create(createTerrainDto: CreateTerrainDto): Promise<Terrain>;
    findAll(): Promise<Terrain[]>;
    findOne(id: number): Promise<Terrain>;
    update(id: number, updateTerrainDto: UpdateTerrainDto): Promise<Terrain>;
    remove(id: number): Promise<void>;
    findByNumTitre(numTitre: string): Promise<Terrain[]>;
    findByProprietaire(nomProprietaire: string): Promise<Terrain[]>;
}
