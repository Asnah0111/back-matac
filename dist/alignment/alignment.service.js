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
exports.AlignmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alignment_entity_1 = require("./entities/alignment.entity");
let AlignmentService = class AlignmentService {
    alignmentRepository;
    constructor(alignmentRepository) {
        this.alignmentRepository = alignmentRepository;
    }
    async create(createAlignmentDto) {
        const existingAlignment = await this.alignmentRepository.findOne({
            where: { id_demandeur: createAlignmentDto.id_demandeur }
        });
        if (existingAlignment) {
            throw new common_1.ConflictException(`Un alignement avec l'id_demandeur '${createAlignmentDto.id_demandeur}' existe déjà`);
        }
        const alignment = this.alignmentRepository.create(createAlignmentDto);
        const saved = await this.alignmentRepository.save(alignment);
        const fullAlignment = await this.alignmentRepository.findOne({
            where: { id_align: saved.id_align },
            relations: {
                terrain: true,
                pieces_jointes: true,
            },
        });
        if (!fullAlignment) {
            throw new common_1.NotFoundException('Impossible de récupérer l’alignement après création');
        }
        return fullAlignment;
    }
    async findAll() {
        return await this.alignmentRepository.find({
            relations: {
                pieces_jointes: true,
                terrain: true,
            },
            order: {
                created_at: 'DESC',
            },
        });
    }
    async findOne(id) {
        const alignment = await this.alignmentRepository.findOne({
            where: { id_align: id },
            relations: {
                pieces_jointes: true,
                terrain: true,
            },
        });
        if (!alignment) {
            throw new common_1.NotFoundException(`Alignement avec l'ID ${id} non trouvé`);
        }
        return alignment;
    }
    async update(id, updateAlignmentDto) {
        const alignment = await this.findOne(id);
        Object.assign(alignment, updateAlignmentDto);
        const saved = await this.alignmentRepository.save(alignment);
        const fullAlignment = await this.alignmentRepository.findOne({
            where: { id_align: saved.id_align },
            relations: {
                terrain: true,
                pieces_jointes: true,
            },
        });
        if (!fullAlignment) {
            throw new common_1.NotFoundException('Impossible de récupérer l’alignement après mise à jour');
        }
        return fullAlignment;
    }
    async remove(id) {
        const alignment = await this.findOne(id);
        await this.alignmentRepository.remove(alignment);
    }
    async findByDemandeur(idDemandeur) {
        return await this.alignmentRepository.find({
            where: { id_demandeur: idDemandeur },
            relations: {
                pieces_jointes: true,
                terrain: true,
            },
        });
    }
};
exports.AlignmentService = AlignmentService;
exports.AlignmentService = AlignmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alignment_entity_1.Alignment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlignmentService);
//# sourceMappingURL=alignment.service.js.map