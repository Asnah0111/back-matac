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
exports.CreateAlignmentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAlignmentDto {
    id_demandeur;
    status_proprietaire;
    qualite_demandeur;
    nif;
    id_cert_sit_jur;
    id_plan_off;
    id_terrain;
}
exports.CreateAlignmentDto = CreateAlignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'DEM001',
        description: 'ID du demandeur',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_demandeur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Propriétaire',
        description: 'Statut du propriétaire',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "status_proprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Demandeur principal',
        description: 'Qualité du demandeur',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "qualite_demandeur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '12345678901',
        description: 'Numéro d\'Identification Fiscale',
        maxLength: 20
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "nif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'CERT001',
        description: 'ID du certificat de situation juridique',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_cert_sit_jur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'PLAN001',
        description: 'ID du plan officiel',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_plan_off", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID du terrain associé',
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAlignmentDto.prototype, "id_terrain", void 0);
//# sourceMappingURL=create-alignment.dto.js.map