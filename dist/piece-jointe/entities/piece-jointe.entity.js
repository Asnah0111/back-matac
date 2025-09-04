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
exports.PieceJointe = void 0;
const typeorm_1 = require("typeorm");
const alignment_entity_1 = require("../../alignment/entities/alignment.entity");
const swagger_1 = require("@nestjs/swagger");
let PieceJointe = class PieceJointe {
    id_piece;
    nom_piece;
    url_fichier;
    type_fichier;
    taille_fichier;
    uploaded_at;
    id_align;
    alignment;
};
exports.PieceJointe = PieceJointe;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant unique de la pièce jointe' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PieceJointe.prototype, "id_piece", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nom de la pièce jointe', example: 'Certificat de propriété.pdf' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PieceJointe.prototype, "nom_piece", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL ou chemin du fichier', example: 'https://files.service.com/cert123.pdf' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PieceJointe.prototype, "url_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type MIME du fichier', example: 'application/pdf' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], PieceJointe.prototype, "type_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Taille du fichier en bytes', example: 1024000 }),
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], PieceJointe.prototype, "taille_fichier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date d\'upload' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PieceJointe.prototype, "uploaded_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de l\'alignement associé' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PieceJointe.prototype, "id_align", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => alignment_entity_1.Alignment, description: 'Alignement associé' }),
    (0, typeorm_1.ManyToOne)(() => alignment_entity_1.Alignment, (alignment) => alignment.pieces_jointes, {
        onDelete: 'CASCADE'
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_align' }),
    __metadata("design:type", alignment_entity_1.Alignment)
], PieceJointe.prototype, "alignment", void 0);
exports.PieceJointe = PieceJointe = __decorate([
    (0, typeorm_1.Entity)('piece_jointe')
], PieceJointe);
//# sourceMappingURL=piece-jointe.entity.js.map