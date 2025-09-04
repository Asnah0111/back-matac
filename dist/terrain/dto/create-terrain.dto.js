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
exports.CreateTerrainDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateTerrainDto {
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
}
exports.CreateTerrainDto = CreateTerrainDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'TIT001',
        description: 'Numéro du titre foncier',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "num_titre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'IND001',
        description: 'Indice du terrain',
        maxLength: 50,
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 50),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "indice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Jean Dupont',
        description: 'Nom du propriétaire',
        maxLength: 200
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 200),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "nom_proprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lot II 34 Bis Ambohijatovo',
        description: 'Adresse du terrain',
        maxLength: 300
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 300),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "adresse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 500.75,
        description: 'Superficie en m²'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTerrainDto.prototype, "superficie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'PARC001',
        description: 'Numéro de parcelle',
        maxLength: 50
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "num_parcelle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Section A',
        description: 'Section dite',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "section_dite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Canton Nord',
        description: 'Canton',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "canton", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'KAR001',
        description: 'Numéro Karatany',
        maxLength: 50,
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 50),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "num_karatany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'FONK001',
        description: 'Fonkotany',
        maxLength: 100,
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "fokotany", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 47.521234,
        description: 'Longitude (coordonnée X)'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTerrainDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: -18.912345,
        description: 'Latitude (coordonnée Y)'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTerrainDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'titre',
        description: 'Statut du terrain (titre, cadastre, certificat-foncier)',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTerrainDto.prototype, "statut_terrain", void 0);
//# sourceMappingURL=create-terrain.dto.js.map