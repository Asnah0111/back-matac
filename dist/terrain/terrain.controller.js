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
exports.TerrainController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const terrain_service_1 = require("./terrain.service");
const create_terrain_dto_1 = require("./dto/create-terrain.dto");
const update_terrain_dto_1 = require("./dto/update-terrain.dto");
const terrain_entity_1 = require("./entities/terrain.entity");
let TerrainController = class TerrainController {
    terrainService;
    constructor(terrainService) {
        this.terrainService = terrainService;
    }
    async create(createTerrainDto) {
        return this.terrainService.create(createTerrainDto);
    }
    async findAll(numTitre, proprietaire) {
        if (numTitre) {
            return this.terrainService.findByNumTitre(numTitre);
        }
        if (proprietaire) {
            return this.terrainService.findByProprietaire(proprietaire);
        }
        return this.terrainService.findAll();
    }
    async findOne(id) {
        return this.terrainService.findOne(id);
    }
    async update(id, updateTerrainDto) {
        return this.terrainService.update(id, updateTerrainDto);
    }
    async remove(id) {
        await this.terrainService.remove(id);
        return { message: 'Terrain supprimé avec succès' };
    }
};
exports.TerrainController = TerrainController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau terrain' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Terrain créé avec succès',
        type: terrain_entity_1.Terrain
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_terrain_dto_1.CreateTerrainDto]),
    __metadata("design:returntype", Promise)
], TerrainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les terrains' }),
    (0, swagger_1.ApiQuery)({ name: 'numTitre', required: false, description: 'Filtrer par numéro de titre' }),
    (0, swagger_1.ApiQuery)({ name: 'proprietaire', required: false, description: 'Filtrer par nom de propriétaire' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des terrains',
        type: [terrain_entity_1.Terrain]
    }),
    __param(0, (0, common_1.Query)('numTitre')),
    __param(1, (0, common_1.Query)('proprietaire')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TerrainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un terrain par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du terrain', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Terrain trouvé',
        type: terrain_entity_1.Terrain
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Terrain non trouvé' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TerrainController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un terrain' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du terrain', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Terrain mis à jour',
        type: terrain_entity_1.Terrain
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Terrain non trouvé' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_terrain_dto_1.UpdateTerrainDto]),
    __metadata("design:returntype", Promise)
], TerrainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un terrain' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du terrain', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Terrain supprimé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Terrain non trouvé' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TerrainController.prototype, "remove", null);
exports.TerrainController = TerrainController = __decorate([
    (0, swagger_1.ApiTags)('Terrains'),
    (0, common_1.Controller)('servicealignement/terrain'),
    __metadata("design:paramtypes", [terrain_service_1.TerrainService])
], TerrainController);
//# sourceMappingURL=terrain.controller.js.map