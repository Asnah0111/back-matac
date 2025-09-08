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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Construction = void 0;
const typeorm_1 = require("typeorm");
const alignment_entity_1 = require("../../alignment/entities/alignment.entity");
const swagger_1 = require("@nestjs/swagger");
let Construction = class Construction {
    id_const;
    nature_travaux;
    type;
    id_mandataire;
    created_at;
    updated_at;
    alignment;
};
exports.Construction = Construction;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant unique de la construction' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Construction.prototype, "id_const", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nature des travaux', example: 'Construction neuve' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Construction.prototype, "nature_travaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type de construction', example: 'Résidentiel' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Construction.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du mandataire (référence vers alignement)', example: 'CIT001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Construction.prototype, "id_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de création' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Construction.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de mise à jour' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Construction.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => alignment_entity_1.Alignment, description: 'Alignement associé' }),
    (0, typeorm_1.ManyToOne)(() => alignment_entity_1.Alignment, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_mandataire', referencedColumnName: 'id_mandataire' }),
    __metadata("design:type", alignment_entity_1.Alignment)
], Construction.prototype, "alignment", void 0);
exports.Construction = Construction = __decorate([
    (0, typeorm_1.Entity)('construction')
], Construction);
//# sourceMappingURL=construction.entity.js.map