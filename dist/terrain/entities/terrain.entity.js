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
exports.Terrain = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Terrain = class Terrain {
    id_terrain;
    num_titre;
    indice;
    nom_proprietaire;
    adresse;
    superficie;
    num_parcelle;
    section_dite;
    canton;
    num_karatany;
    fokotany;
    longitude;
    latitude;
    statut_terrain;
    created_at;
    updated_at;
};
exports.Terrain = Terrain;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant unique du terrain' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Terrain.prototype, "id_terrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numéro du titre foncier', example: 'TIT001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Terrain.prototype, "num_titre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indice du terrain', example: 'IND001', nullable: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Terrain.prototype, "indice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nom du propriétaire', example: 'Jean Dupont' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Terrain.prototype, "nom_proprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adresse du terrain', example: 'Lot II 34 Bis Ambohijatovo' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], Terrain.prototype, "adresse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Superficie en m²', example: 500.75 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Terrain.prototype, "superficie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numéro de parcelle', example: 'PARC001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Terrain.prototype, "num_parcelle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Section dite', example: 'Section A' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Terrain.prototype, "section_dite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Canton', example: 'Canton Nord' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Terrain.prototype, "canton", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numéro Karatany', example: 'KAR001', nullable: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Terrain.prototype, "num_karatany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fonkotany', example: 'FONK001', nullable: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Terrain.prototype, "fokotany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Longitude (coordonnée X)', example: 47.521234 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Terrain.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Latitude (coordonnée Y)', example: -18.912345 }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], Terrain.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Statut du terrain (titre, cadastre, certificat-foncier)', example: 'titre' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true, default: 'titre' }),
    __metadata("design:type", String)
], Terrain.prototype, "statut_terrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de création' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Terrain.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date de mise à jour' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Terrain.prototype, "updated_at", void 0);
exports.Terrain = Terrain = __decorate([
    (0, typeorm_1.Entity)('terrain')
], Terrain);
//# sourceMappingURL=terrain.entity.js.map