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
exports.ConstructionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const construction_entity_1 = require("./entities/construction.entity");
const alignment_entity_1 = require("../alignment/entities/alignment.entity");
let ConstructionService = class ConstructionService {
    constructionRepository;
    alignmentRepository;
    constructor(constructionRepository, alignmentRepository) {
        this.constructionRepository = constructionRepository;
        this.alignmentRepository = alignmentRepository;
    }
    async create(createConstructionDto) {
        const alignment = await this.alignmentRepository.findOne({
            where: { id_align: createConstructionDto.id_align }
        });
        if (!alignment) {
            throw new common_1.NotFoundException(`Aucun alignement trouvé avec l'ID ${createConstructionDto.id_align}`);
        }
        const construction = this.constructionRepository.create(createConstructionDto);
        return await this.constructionRepository.save(construction);
    }
    async findAll() {
        return await this.constructionRepository.find({
            relations: {
                alignment: true,
                terrain: true
            }
        });
    }
    async findOne(id) {
        const construction = await this.constructionRepository.findOne({
            where: { id_const: id },
            relations: {
                alignment: true,
                terrain: true
            }
        });
        if (!construction) {
            throw new common_1.NotFoundException(`Construction avec l'ID ${id} non trouvée`);
        }
        return construction;
    }
    async update(id, updateConstructionDto) {
        const construction = await this.findOne(id);
        Object.assign(construction, updateConstructionDto);
        return await this.constructionRepository.save(construction);
    }
    async remove(id) {
        const construction = await this.findOne(id);
        await this.constructionRepository.remove(construction);
    }
    async findByAlignment(idAlign) {
        return await this.constructionRepository.find({
            where: { id_align: idAlign },
            relations: {
                alignment: true,
                terrain: true
            }
        });
    }
};
exports.ConstructionService = ConstructionService;
exports.ConstructionService = ConstructionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(construction_entity_1.Construction)),
    __param(1, (0, typeorm_1.InjectRepository)(alignment_entity_1.Alignment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ConstructionService);
//# sourceMappingURL=construction.service.js.map