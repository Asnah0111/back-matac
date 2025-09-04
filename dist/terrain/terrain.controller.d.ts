import { TerrainService } from './terrain.service';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { Terrain } from './entities/terrain.entity';
export declare class TerrainController {
    private readonly terrainService;
    constructor(terrainService: TerrainService);
    create(createTerrainDto: CreateTerrainDto): Promise<Terrain>;
    findAll(numTitre?: string, proprietaire?: string): Promise<Terrain[]>;
    findOne(id: number): Promise<Terrain>;
    update(id: number, updateTerrainDto: UpdateTerrainDto): Promise<Terrain>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
