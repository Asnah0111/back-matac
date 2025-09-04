"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerrainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const terrain_entity_1 = require("./entities/terrain.entity");
let TerrainService = class TerrainService {
    terrainRepository;
    constructor(terrainRepository) {
        this.terrainRepository = terrainRepository;
    }
    async create(createTerrainDto) {
        const terrainData = {
            ...createTerrainDto,
            statut_terrain: createTerrainDto.statut_terrain || 'titre'
        };
        const terrain = this.terrainRepository.create(terrainData);
        return await this.terrainRepository.save(terrain);
    }
    async findAll() {
        return await this.terrainRepository.find({
            order: {
                created_at: 'DESC'
            }
        });
    }
    async findOne(id) {
        const terrain = await this.terrainRepository.findOne({
            where: { id_terrain: id }
        });
        if (!terrain) {
            throw new common_1.NotFoundException(`Terrain avec l'ID ${id} non trouvé`);
        }
        return terrain;
    }
    async update(id, updateTerrainDto) {
        const terrain = await this.findOne(id);
        Object.assign(terrain, updateTerrainDto);
        return await this.terrainRepository.save(terrain);
    }
    async remove(id) {
        const terrain = await this.findOne(id);
        await this.terrainRepository.remove(terrain);
    }
    async findByNumTitre(numTitre) {
        return await this.terrainRepository.find({
            where: { num_titre: numTitre }
        });
    }
    async findByProprietaire(nomProprietaire) {
        return await this.terrainRepository.find({
            where: { nom_proprietaire: nomProprietaire }
        });
    }
};
exports.TerrainService = TerrainService;
exports.TerrainService = TerrainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(terrain_entity_1.Terrain)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TerrainService);
//# sourceMappingURL=terrain.service.js.map