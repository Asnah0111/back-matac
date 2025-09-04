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
exports.PieceJointeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const piece_jointe_service_1 = require("./piece-jointe.service");
const create_piece_jointe_dto_1 = require("./dto/create-piece-jointe.dto");
const update_piece_jointe_dto_1 = require("./dto/update-piece-jointe.dto");
const create_with_file_info_dto_1 = require("./dto/create-with-file-info.dto");
const piece_jointe_entity_1 = require("./entities/piece-jointe.entity");
let PieceJointeController = class PieceJointeController {
    pieceJointeService;
    constructor(pieceJointeService) {
        this.pieceJointeService = pieceJointeService;
    }
    async create(createPieceJointeDto) {
        return this.pieceJointeService.create(createPieceJointeDto);
    }
    async createWithFileInfo(createWithFileInfoDto) {
        const fileInfo = {
            filename: createWithFileInfoDto.filename,
            mimetype: createWithFileInfoDto.mimetype,
            size: createWithFileInfoDto.size,
            url: createWithFileInfoDto.url,
        };
        const pieceJointeDto = {
            nom_piece: createWithFileInfoDto.nom_piece,
            id_align: createWithFileInfoDto.id_align,
        };
        return this.pieceJointeService.createWithFileInfo(fileInfo, pieceJointeDto);
    }
    async findAll() {
        return this.pieceJointeService.findAll();
    }
    async findOne(id) {
        return this.pieceJointeService.findOne(id);
    }
    async findByAlignment(alignmentId) {
        return this.pieceJointeService.findByAlignment(alignmentId);
    }
    async update(id, updatePieceJointeDto) {
        return this.pieceJointeService.update(id, updatePieceJointeDto);
    }
    async remove(id) {
        return this.pieceJointeService.remove(id);
    }
};
exports.PieceJointeController = PieceJointeController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle pièce jointe' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pièce jointe créée avec succès', type: piece_jointe_entity_1.PieceJointe }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_piece_jointe_dto_1.CreatePieceJointeDto]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('with-file-info'),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une pièce jointe avec informations de fichier' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pièce jointe créée avec succès', type: piece_jointe_entity_1.PieceJointe }),
    (0, swagger_1.ApiConsumes)('application/x-www-form-urlencoded'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_with_file_info_dto_1.CreateWithFileInfoDto]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "createWithFileInfo", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les pièces jointes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des pièces jointes', type: [piece_jointe_entity_1.PieceJointe] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une pièce jointe par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la pièce jointe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pièce jointe trouvée', type: piece_jointe_entity_1.PieceJointe }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pièce jointe non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('alignment/:alignmentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les pièces jointes par alignement' }),
    (0, swagger_1.ApiParam)({ name: 'alignmentId', description: 'ID de l\'alignement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pièces jointes de l\'alignement', type: [piece_jointe_entity_1.PieceJointe] }),
    __param(0, (0, common_1.Param)('alignmentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "findByAlignment", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une pièce jointe' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la pièce jointe' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pièce jointe mise à jour', type: piece_jointe_entity_1.PieceJointe }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pièce jointe non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_piece_jointe_dto_1.UpdatePieceJointeDto]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une pièce jointe' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la pièce jointe' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Pièce jointe supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pièce jointe non trouvée' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PieceJointeController.prototype, "remove", null);
exports.PieceJointeController = PieceJointeController = __decorate([
    (0, swagger_1.ApiTags)('piece-jointe'),
    (0, common_1.Controller)('servicealignement/piece-jointe'),
    __metadata("design:paramtypes", [piece_jointe_service_1.PieceJointeService])
], PieceJointeController);
//# sourceMappingURL=piece-jointe.controller.js.map