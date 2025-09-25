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
exports.AlignmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const alignment_service_1 = require("./alignment.service");
const create_alignment_dto_1 = require("./dto/create-alignment.dto");
const update_alignment_dto_1 = require("./dto/update-alignment.dto");
const alignment_entity_1 = require("./entities/alignment.entity");
let AlignmentController = class AlignmentController {
    alignmentService;
    constructor(alignmentService) {
        this.alignmentService = alignmentService;
    }
    async create(createAlignmentDto) {
        return this.alignmentService.create(createAlignmentDto);
    }
    async findAll(demandeurId) {
        if (demandeurId) {
            return this.alignmentService.findByDemandeur(demandeurId);
        }
        return this.alignmentService.findAll();
    }
    async findOne(id) {
        return this.alignmentService.findOne(id);
    }
    async update(id, updateAlignmentDto) {
        return this.alignmentService.update(id, updateAlignmentDto);
    }
    async remove(id) {
        await this.alignmentService.remove(id);
        return { message: 'Alignement supprimé avec succès' };
    }
};
exports.AlignmentController = AlignmentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouvel alignement' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Alignement créé avec succès',
        type: alignment_entity_1.Alignment
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alignment_dto_1.CreateAlignmentDto]),
    __metadata("design:returntype", Promise)
], AlignmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer tous les alignements' }),
    (0, swagger_1.ApiQuery)({ name: 'demandeur', required: false, description: 'Filtrer par ID demandeur' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des alignements',
        type: [alignment_entity_1.Alignment]
    }),
    __param(0, (0, common_1.Query)('demandeur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlignmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer un alignement par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'alignement', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Alignement trouvé',
        type: alignment_entity_1.Alignment
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alignement non trouvé' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlignmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour un alignement' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'alignement', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Alignement mis à jour',
        type: alignment_entity_1.Alignment
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alignement non trouvé' }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_alignment_dto_1.UpdateAlignmentDto]),
    __metadata("design:returntype", Promise)
], AlignmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer un alignement' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'alignement', type: 'number' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alignement supprimé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alignement non trouvé' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AlignmentController.prototype, "remove", null);
exports.AlignmentController = AlignmentController = __decorate([
    (0, swagger_1.ApiTags)('Alignements'),
    (0, common_1.Controller)('servicealignement/alignment'),
    __metadata("design:paramtypes", [alignment_service_1.AlignmentService])
], AlignmentController);
//# sourceMappingURL=alignment.controller.js.map