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
exports.CreateConstructionDto = exports.PieceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class PieceDto {
    niveau;
    destination;
    surface;
    surfaceOuverture;
    hauteurLinteaux;
    hauteurPlafond;
}
exports.PieceDto = PieceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Niveau de la pièce' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PieceDto.prototype, "niveau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Destination de la pièce' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PieceDto.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface de la pièce en m²' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PieceDto.prototype, "surface", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface des ouvertures en m²' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PieceDto.prototype, "surfaceOuverture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hauteur des linteaux en mètres' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PieceDto.prototype, "hauteurLinteaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hauteur sous plafond en mètres' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PieceDto.prototype, "hauteurPlafond", void 0);
class CreateConstructionDto {
    natureTravaux;
    typeAffectation;
    referenceAlignement;
    civiliteProprietaire;
    nomProprietaire;
    telProprietaire;
    emailProprietaire;
    cinProprietaire;
    adresseProprietaire;
    auteurOuvrage;
    nomAuteur;
    fonctionAuteur;
    numeroOrdreAuteur;
    telAuteur;
    emailAuteur;
    adresseAuteur;
    zoneImplantation;
    materiaux;
    dureeTravaux;
    montantTravaux;
    longueurProjet;
    largeurProjet;
    hauteurProjet;
    surfaceTerrain;
    empriseSolExistant;
    empriseSol;
    cesProjet;
    surfacePlancherExistant;
    surfacePlancherProjet;
    surfaceVerte;
    niveauRPlus;
    distanceCheminPublic;
    distanceSentierPublic;
    distanceRouteNationale;
    distanceRiviere;
    distanceCanalPublic;
    distanceInstallationEnergie;
    distanceLigneElectrique;
    distanceProjetLimitePropriete;
    distanceMinimaleProjetConstructionExistante;
    equipementEau;
    equipementElectricite;
    equipementAssainissement;
    equipementVoieAcces;
    pieces;
    pieceSousSol;
    existantVhVb;
    existantTerasse;
    existantGardeCorp;
    nbrVeranda;
    nbrCouloir;
    nbrEscalier;
    nbrServitude;
    existantBranchementEauPublic;
    utilisationFosseEptique;
    typeFosseEptique;
    evacuationEauxPluviales;
    nbrUsageFosse;
    capaciteFosse;
    utilisationPuisard;
    puisardAuFondation;
    presentationGoutiere;
    presentationRegardCollecte;
    planTerrain;
    droitPropriete;
    planLimiteTerrain;
    planMasse;
    planFacade;
    id_mandataire;
    id_terrain;
}
exports.CreateConstructionDto = CreateConstructionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nouvelle construction',
        description: 'Nature des travaux',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "natureTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Maison individuelle',
        description: 'Type d\'affectation',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "typeAffectation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'REF-2024-001',
        description: 'Référence d\'alignement',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "referenceAlignement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Monsieur',
        description: 'Civilité du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "civiliteProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nom complet du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "nomProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Téléphone du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "telProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "emailProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CIN du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "cinProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adresse du propriétaire',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "adresseProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Architecte',
        description: 'Auteur de l\'ouvrage',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "auteurOuvrage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nom de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "nomAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fonction de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "fonctionAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Numéro d\'ordre de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "numeroOrdreAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Téléphone de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "telAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "emailAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Adresse de l\'auteur',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "adresseAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Zone à construire',
        description: 'Zone d\'implantation',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "zoneImplantation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Matériaux utilisés',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "materiaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Durée estimée des travaux en mois',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "dureeTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Montant estimé des travaux en Ariary',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "montantTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Longueur du projet en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "longueurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Largeur du projet en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "largeurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hauteur du projet en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "hauteurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Surface du terrain en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "surfaceTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Emprise au sol existant en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "empriseSolExistant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Emprise au sol en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "empriseSol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CES du projet',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "cesProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Surface de plancher des bâtiments existants en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "surfacePlancherExistant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Surface de plancher du projet en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "surfacePlancherProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Surface verte en m²',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "surfaceVerte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Niveau projet R+ en m³',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "niveauRPlus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport au chemin public en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceCheminPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport au sentier public en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceSentierPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport à la route nationale en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceRouteNationale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport au cours d\'eau/rivière en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceRiviere", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport au canal public en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceCanalPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport aux installations de transport d\'énergie en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceInstallationEnergie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance par rapport aux lignes électriques à haute tension en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceLigneElectrique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance du projet par rapport aux limites de la propriété en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceProjetLimitePropriete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distance minimale entre le projet et une construction existante en mètres',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "distanceMinimaleProjetConstructionExistante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de raccordement eau',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "equipementEau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de raccordement électricité',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "equipementElectricite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence d\'assainissement',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "equipementAssainissement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de voie d\'accès',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "equipementVoieAcces", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [PieceDto],
        description: 'Liste des pièces',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PieceDto),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "pieces", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de sous-sol',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "pieceSousSol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de VH/VB',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "existantVhVb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de terrasse',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "existantTerasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présence de garde-corps',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "existantGardeCorp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de vérandas',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "nbrVeranda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de couloirs',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "nbrCouloir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre d\'escaliers',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "nbrEscalier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de servitudes/voies d\'accès',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "nbrServitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Branchement au réseau public pour l\'écoulement des eaux',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "existantBranchementEauPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Utilisation de fosse septique',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "utilisationFosseEptique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type de fosse septique',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "typeFosseEptique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Évacuation des eaux pluviales',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "evacuationEauxPluviales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre d\'usagers de la fosse',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "nbrUsageFosse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Capacité de la fosse',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "capaciteFosse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Utilisation d\'un puisard',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "utilisationPuisard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Implantation du puisard par rapport à la fondation',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "puisardAuFondation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présentation de la gouttière et descentes d\'EP',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "presentationGoutiere", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Présentation des regards de collecte',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateConstructionDto.prototype, "presentationRegardCollecte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plan de situation du terrain',
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "planTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Titre de propriété',
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "droitPropriete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plan des limites du terrain',
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "planLimiteTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plan de masse',
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "planMasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Plan des façades',
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateConstructionDto.prototype, "planFacade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'CIT001',
        description: 'ID du mandataire (référence vers alignement)',
        maxLength: 100
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateConstructionDto.prototype, "id_mandataire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID du terrain associé',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateConstructionDto.prototype, "id_terrain", void 0);
//# sourceMappingURL=create-construction.dto.js.map