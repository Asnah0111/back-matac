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
exports.CreatePieceJointeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreatePieceJointeDto {
    nom_piece;
    url_fichier;
    type_fichier;
    taille_fichier;
    id_align;
}
exports.CreatePieceJointeDto = CreatePieceJointeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Certificat de propriété',
        description: 'Nom de la pièce jointe',
        maxLength: 255
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 255),
    __metadata("design:type", String)
], CreatePieceJointeDto.prototype, "nom_piece", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://files.service.com/cert123.pdf',
        description: 'URL du fichier',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePieceJointeDto.prototype, "url_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'application/pdf',
        description: 'Type MIME du fichier',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreatePieceJointeDto.prototype, "type_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1024000,
        description: 'Taille du fichier en bytes',
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreatePieceJointeDto.prototype, "taille_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID de l\'alignement associé'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreatePieceJointeDto.prototype, "id_align", void 0);
//# sourceMappingURL=create-piece-jointe.dto.js.map