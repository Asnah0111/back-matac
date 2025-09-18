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
exports.Construction = exports.Piece = void 0;
const typeorm_1 = require("typeorm");
const alignment_entity_1 = require("../../alignment/entities/alignment.entity");
const terrain_entity_1 = require("../../terrain/entities/terrain.entity");
const swagger_1 = require("@nestjs/swagger");
class Piece {
    niveau;
    destination;
    surface;
    surfaceOuverture;
    hauteurLinteaux;
    hauteurPlafond;
}
exports.Piece = Piece;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Niveau de la pièce' }),
    __metadata("design:type", Number)
], Piece.prototype, "niveau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Destination de la pièce' }),
    __metadata("design:type", String)
], Piece.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface de la pièce en m²' }),
    __metadata("design:type", Number)
], Piece.prototype, "surface", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface des ouvertures en m²' }),
    __metadata("design:type", Number)
], Piece.prototype, "surfaceOuverture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hauteur des linteaux en mètres' }),
    __metadata("design:type", Number)
], Piece.prototype, "hauteurLinteaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hauteur sous plafond en mètres' }),
    __metadata("design:type", Number)
], Piece.prototype, "hauteurPlafond", void 0);
let Construction = class Construction {
    id_const;
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
    created_at;
    updated_at;
    alignment;
    id_terrain;
    terrain;
};
exports.Construction = Construction;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Identifiant unique de la construction' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Construction.prototype, "id_const", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nature des travaux', example: 'Nouvelle construction' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "natureTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type d\'affectation', example: 'Maison individuelle' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "typeAffectation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Référence d\'alignement', example: 'REF-2024-001' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "referenceAlignement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Civilité du propriétaire', example: 'Monsieur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "civiliteProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nom complet du propriétaire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "nomProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Téléphone du propriétaire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "telProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email du propriétaire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "emailProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CIN du propriétaire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "cinProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adresse du propriétaire' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "adresseProprietaire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Auteur de l\'ouvrage', example: 'Architecte' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "auteurOuvrage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nom de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "nomAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fonction de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "fonctionAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numéro d\'ordre de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "numeroOrdreAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Téléphone de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "telAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "emailAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Adresse de l\'auteur' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "adresseAuteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zone d\'implantation', example: 'Zone à construire' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "zoneImplantation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Matériaux utilisés' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "materiaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Durée estimée des travaux en mois' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "dureeTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Montant estimé des travaux en Ariary' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 15, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "montantTravaux", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Longueur du projet en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "longueurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Largeur du projet en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "largeurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hauteur du projet en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "hauteurProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface du terrain en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "surfaceTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emprise au sol existant en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "empriseSolExistant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emprise au sol en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "empriseSol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CES du projet' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "cesProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface de plancher des bâtiments existants en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "surfacePlancherExistant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface de plancher du projet en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "surfacePlancherProjet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Surface verte en m²' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "surfaceVerte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Niveau projet R+ en m³' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "niveauRPlus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport au chemin public en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceCheminPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport au sentier public en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceSentierPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport à la route nationale en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceRouteNationale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport au cours d\'eau/rivière en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceRiviere", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport au canal public en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceCanalPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport aux installations de transport d\'énergie en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceInstallationEnergie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance par rapport aux lignes électriques à haute tension en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceLigneElectrique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance du projet par rapport aux limites de la propriété en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceProjetLimitePropriete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distance minimale entre le projet et une construction existante en mètres' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "distanceMinimaleProjetConstructionExistante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de raccordement eau' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "equipementEau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de raccordement électricité' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "equipementElectricite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence d\'assainissement' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "equipementAssainissement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de voie d\'accès' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "equipementVoieAcces", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Piece], description: 'Liste des pièces' }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "pieces", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de sous-sol' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "pieceSousSol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de VH/VB' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "existantVhVb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de terrasse' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "existantTerasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présence de garde-corps' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "existantGardeCorp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de vérandas' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "nbrVeranda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de couloirs' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "nbrCouloir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre d\'escaliers' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "nbrEscalier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de servitudes/voies d\'accès' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "nbrServitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Branchement au réseau public pour l\'écoulement des eaux' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "existantBranchementEauPublic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Utilisation de fosse septique' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "utilisationFosseEptique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type de fosse septique', nullable: true }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Construction.prototype, "typeFosseEptique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Évacuation des eaux pluviales' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "evacuationEauxPluviales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre d\'usagers de la fosse' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "nbrUsageFosse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Capacité de la fosse' }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "capaciteFosse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Utilisation d\'un puisard' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "utilisationPuisard", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Implantation du puisard par rapport à la fondation' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "puisardAuFondation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présentation de la gouttière et descentes d\'EP' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "presentationGoutiere", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Présentation des regards de collecte' }),
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Construction.prototype, "presentationRegardCollecte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan de situation du terrain', type: [String] }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "planTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Titre de propriété', type: [String] }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "droitPropriete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan des limites du terrain', type: [String] }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "planLimiteTerrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan de masse', type: [String] }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "planMasse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Plan des façades', type: [String] }),
    (0, typeorm_1.Column)({ type: 'jsonb', nullable: true }),
    __metadata("design:type", Array)
], Construction.prototype, "planFacade", void 0);
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
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID du terrain associé', example: 1 }),
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Construction.prototype, "id_terrain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => terrain_entity_1.Terrain, description: 'Terrain associé' }),
    (0, typeorm_1.ManyToOne)(() => terrain_entity_1.Terrain, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_terrain', referencedColumnName: 'id_terrain' }),
    __metadata("design:type", terrain_entity_1.Terrain)
], Construction.prototype, "terrain", void 0);
exports.Construction = Construction = __decorate([
    (0, typeorm_1.Entity)('construction')
], Construction);
//# sourceMappingURL=construction.entity.js.map