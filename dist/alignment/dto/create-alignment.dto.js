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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAlignmentDto {
    id_mandataire;
    status_proprietaire;
    qualite_demandeur;
    nif;
    id_cert_sit_jur;
    id_plan_off;
    id_terrain;
    nom_mandataire;
    prenom_mandataire;
    cin_passeport;
    raison_social;
    num_carte_stat;
    adresse;
    fonction;
    age;
    nationalite;
    status;
}
exports.CreateAlignmentDto = CreateAlignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du mandataire (citoyen)', example: 'CIT001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Statut propriétaire', example: 'Propriétaire' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "status_proprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Qualité du demandeur', example: 'Demandeur principal' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "qualite_demandeur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NIF (fiscal)', example: '12345678901' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "nif", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du certificat de situation juridique', example: 'CERT001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_cert_sit_jur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du plan officiel', example: 'PLAN001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "id_plan_off", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du terrain associé', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAlignmentDto.prototype, "id_terrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nom du mandataire', example: 'Moana', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "nom_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Prénom du mandataire', example: 'Faly', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "prenom_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CIN ou passeport', example: '101251007007', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "cin_passeport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Raison sociale', example: 'Sociologue', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "raison_social", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numéro de carte statistique', example: '123456789', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "num_carte_stat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adresse mandataire', example: 'Mahasoabe', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "adresse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fonction du mandataire', example: 'Fonctionnaire', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "fonction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Âge du mandataire', example: '23', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nationalité du mandataire', example: 'Malagasy', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "nationalite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status alignement', example: 'En attente', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAlignmentDto.prototype, "status", void 0);
//# sourceMappingURL=create-alignment.dto.js.map