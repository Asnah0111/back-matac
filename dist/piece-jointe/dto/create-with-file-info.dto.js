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
exports.CreateWithFileInfoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateWithFileInfoDto {
    nom_piece;
    filename;
    mimetype;
    size;
    url;
    id_align;
}
exports.CreateWithFileInfoDto = CreateWithFileInfoDto;
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
], CreateWithFileInfoDto.prototype, "nom_piece", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'document.pdf',
        description: 'Nom du fichier'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWithFileInfoDto.prototype, "filename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'application/pdf',
        description: 'Type MIME du fichier'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWithFileInfoDto.prototype, "mimetype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1024000,
        description: 'Taille du fichier en bytes'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateWithFileInfoDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://storage.example.com/files/document.pdf',
        description: 'URL du fichier uploadé'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWithFileInfoDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID de l\'alignement associé'
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateWithFileInfoDto.prototype, "id_align", void 0);
//# sourceMappingURL=create-with-file-info.dto.js.map