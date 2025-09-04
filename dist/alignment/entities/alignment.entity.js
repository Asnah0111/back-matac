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
exports.Alignment = void 0;
const typeorm_1 = require("typeorm");
const piece_jointe_entity_1 = require("../../piece-jointe/entities/piece-jointe.entity");
const terrain_entity_1 = require("../../terrain/entities/terrain.entity");
const swagger_1 = require("@nestjs/swagger");
let Alignment = class Alignment {
    id_align;
    id_mandataire;
    status_proprietaire;
    qualite_demandeur;
    nif;
    id_cert_sit_jur;
    id_plan_off;
    id_terrain;
    created_at;
    updated_at;
    pieces_jointes;
    terrain;
};
exports.Alignment = Alignment;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant unique de l\'alignement' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Alignment.prototype, "id_align", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du mandataire (citoyen)', example: 'CIT001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alignment.prototype, "id_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Statut propriétaire', example: 'Propriétaire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alignment.prototype, "status_proprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Qualité du demandeur', example: 'Demandeur principal' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alignment.prototype, "qualite_demandeur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NIF (fiscal)', example: '12345678901' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Alignment.prototype, "nif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du certificat de situation juridique', example: 'CERT001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alignment.prototype, "id_cert_sit_jur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du plan officiel', example: 'PLAN001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Alignment.prototype, "id_plan_off", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du terrain associé', example: 1, nullable: true }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Alignment.prototype, "id_terrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de création' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Alignment.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de mise à jour' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Alignment.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [piece_jointe_entity_1.PieceJointe], description: 'Pièces jointes associées' }),
    (0, typeorm_1.OneToMany)(() => piece_jointe_entity_1.PieceJointe, (piece) => piece.alignment, { cascade: true }),
    __metadata("design:type", Array)
], Alignment.prototype, "pieces_jointes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => terrain_entity_1.Terrain, description: 'Terrain associé' }),
    (0, typeorm_1.ManyToOne)(() => terrain_entity_1.Terrain),
    (0, typeorm_1.JoinColumn)({ name: 'id_terrain' }),
    __metadata("design:type", terrain_entity_1.Terrain)
], Alignment.prototype, "terrain", void 0);
exports.Alignment = Alignment = __decorate([
    (0, typeorm_1.Entity)('alignement')
], Alignment);
//# sourceMappingURL=alignment.entity.js.map