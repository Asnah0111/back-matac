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
exports.ConstructionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const construction_service_1 = require("./construction.service");
const create_construction_dto_1 = require("./dto/create-construction.dto");
const update_construction_dto_1 = require("./dto/update-construction.dto");
const construction_entity_1 = require("./entities/construction.entity");
let ConstructionController = class ConstructionController {
    constructionService;
    constructor(constructionService) {
        this.constructionService = constructionService;
    }
    async create(createConstructionDto) {
        return this.constructionService.create(createConstructionDto);
    }
    async findAll(mandataire) {
        if (mandataire) {
            return this.constructionService.findByMandataire(mandataire);
        }
        return this.constructionService.findAll();
    }
    async findOne(id) {
        return this.constructionService.findOne(id);
    }
    async update(id, updateConstructionDto) {
        return this.constructionService.update(id, updateConstructionDto);
    }
    async remove(id) {
        await this.constructionService.remove(id);
        return { message: 'Construction supprimée avec succès' };
    }
};
exports.ConstructionController = ConstructionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle construction' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Construction créée avec succès',
        type: construction_entity_1.Construction
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_construction_dto_1.CreateConstructionDto]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les constructions' }),
    (0, swagger_1.ApiQuery)({ name: 'mandataire', required: false, description: 'Filtrer par ID mandataire' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des constructions',
        type: [construction_entity_1.Construction]
    }),
    __param(0, (0, common_1.Query)('mandataire')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une construction par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Construction trouvée',
        type: construction_entity_1.Construction
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une construction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Construction mise à jour',
        type: construction_entity_1.Construction
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_construction_dto_1.UpdateConstructionDto]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une construction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Construction supprimée avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "remove", null);
exports.ConstructionController = ConstructionController = __decorate([
    (0, swagger_1.ApiTags)('Constructions'),
    (0, common_1.Controller)('serviceconstruction/construction'),
    __metadata("design:paramtypes", [construction_service_1.ConstructionService])
], ConstructionController);
//# sourceMappingURL=construction.controller.js.map