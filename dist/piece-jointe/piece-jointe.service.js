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
exports.PieceJointeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const piece_jointe_entity_1 = require("./entities/piece-jointe.entity");
const alignment_service_1 = require("../alignment/alignment.service");
let PieceJointeService = class PieceJointeService {
    pieceJointeRepository;
    alignmentService;
    constructor(pieceJointeRepository, alignmentService) {
        this.pieceJointeRepository = pieceJointeRepository;
        this.alignmentService = alignmentService;
    }
    async create(createPieceJointeDto) {
        await this.alignmentService.findOne(createPieceJointeDto.id_align);
        const pieceJointe = this.pieceJointeRepository.create(createPieceJointeDto);
        return await this.pieceJointeRepository.save(pieceJointe);
    }
    async findAll() {
        return await this.pieceJointeRepository.find({
            relations: {
                alignment: true
            },
            order: {
                uploaded_at: 'DESC'
            }
        });
    }
    async findOne(id) {
        const pieceJointe = await this.pieceJointeRepository.findOne({
            where: { id_piece: id },
            relations: {
                alignment: true
            }
        });
        if (!pieceJointe) {
            throw new common_1.NotFoundException(`Pièce jointe avec l'ID ${id} non trouvée`);
        }
        return pieceJointe;
    }
    async findByAlignment(alignmentId) {
        return await this.pieceJointeRepository.find({
            where: { id_align: alignmentId },
            order: {
                uploaded_at: 'DESC'
            }
        });
    }
    async update(id, updatePieceJointeDto) {
        const pieceJointe = await this.findOne(id);
        Object.assign(pieceJointe, updatePieceJointeDto);
        return await this.pieceJointeRepository.save(pieceJointe);
    }
    async remove(id) {
        const pieceJointe = await this.findOne(id);
        await this.pieceJointeRepository.remove(pieceJointe);
    }
    async createWithFileInfo(fileInfo, createDto) {
        const pieceJointeDto = {
            ...createDto,
            url_fichier: fileInfo.url,
            type_fichier: fileInfo.mimetype,
            taille_fichier: fileInfo.size,
        };
        return this.create(pieceJointeDto);
    }
};
exports.PieceJointeService = PieceJointeService;
exports.PieceJointeService = PieceJointeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(piece_jointe_entity_1.PieceJointe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        alignment_service_1.AlignmentService])
], PieceJointeService);
//# sourceMappingURL=piece-jointe.service.js.map