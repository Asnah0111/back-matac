"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const swagger_1 = require("@nestjs/swagger");
const construction_service_1 = require("./construction.service");
const create_construction_dto_1 = require("./dto/create-construction.dto");
const update_construction_dto_1 = require("./dto/update-construction.dto");
const construction_entity_1 = require("./entities/construction.entity");
class FileUploadDto {
    files;
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'binary', isArray: true }),
    __metadata("design:type", Array)
], FileUploadDto.prototype, "files", void 0);
const UPLOAD_DIR = './uploads/constructions';
let ConstructionController = class ConstructionController {
    constructionService;
    constructor(constructionService) {
        this.constructionService = constructionService;
        fs.mkdir(UPLOAD_DIR, { recursive: true }).catch(console.error);
    }
    async create(createConstructionDto, files) {
        const filePaths = {};
        if (files) {
            for (const [field, uploadedFiles] of Object.entries(files)) {
                if (uploadedFiles && uploadedFiles.length > 0) {
                    filePaths[field] = uploadedFiles.map(file => file.filename);
                }
            }
        }
        const constructionData = { ...createConstructionDto, ...filePaths };
        return this.constructionService.create(constructionData);
    }
    async findAll(alignement) {
        if (alignement) {
            return this.constructionService.findByAlignment(alignement);
        }
        return this.constructionService.findAll();
    }
    async findOne(id) {
        return this.constructionService.findOne(id);
    }
    async update(id, updateConstructionDto, files) {
        const filePaths = {};
        if (files) {
            for (const [field, uploadedFiles] of Object.entries(files)) {
                if (uploadedFiles && uploadedFiles.length > 0) {
                    filePaths[field] = uploadedFiles.map(file => file.filename);
                }
            }
        }
        const updateData = { ...updateConstructionDto, ...filePaths };
        return this.constructionService.update(id, updateData);
    }
    async remove(id) {
        const construction = await this.constructionService.findOne(id);
        const fileFields = [
            'planTerrain',
            'droitPropriete',
            'planLimiteTerrain',
            'planMasse',
            'planFacade',
        ];
        for (const field of fileFields) {
            const files = construction[field];
            if (files && Array.isArray(files)) {
                for (const filename of files) {
                    try {
                        await fs.unlink(path.join(UPLOAD_DIR, filename));
                    }
                    catch (err) {
                        console.error(`Erreur lors de la suppression du fichier ${filename}:`, err);
                    }
                }
            }
        }
        return this.constructionService.remove(id);
    }
    async getFile(filename, res) {
        const filePath = path.join(UPLOAD_DIR, filename);
        try {
            await fs.access(filePath);
            const file = (0, fs_1.createReadStream)(filePath);
            return new common_1.StreamableFile(file);
        }
        catch (err) {
            throw new common_1.BadRequestException('Fichier non trouvé');
        }
    }
};
exports.ConstructionController = ConstructionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle construction' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Construction créée avec succès',
        type: construction_entity_1.Construction
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Données invalides' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'planTerrain', maxCount: 10 },
        { name: 'droitPropriete', maxCount: 10 },
        { name: 'planLimiteTerrain', maxCount: 10 },
        { name: 'planMasse', maxCount: 10 },
        { name: 'planFacade', maxCount: 10 },
    ], {
        dest: UPLOAD_DIR,
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_construction_dto_1.CreateConstructionDto, Object]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer toutes les constructions' }),
    (0, swagger_1.ApiQuery)({ name: 'alignement', required: false, description: 'Filtrer par ID alignement' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Liste des constructions',
        type: [construction_entity_1.Construction]
    }),
    __param(0, (0, common_1.Query)('alignement')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer une construction par ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction', type: 'number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Construction trouvée',
        type: construction_entity_1.Construction
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une construction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction à mettre à jour' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Construction mise à jour', type: construction_entity_1.Construction }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'planTerrain', maxCount: 10 },
        { name: 'droitPropriete', maxCount: 10 },
        { name: 'planLimiteTerrain', maxCount: 10 },
        { name: 'planMasse', maxCount: 10 },
        { name: 'planFacade', maxCount: 10 },
    ], {
        dest: UPLOAD_DIR,
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_construction_dto_1.UpdateConstructionDto, Object]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une construction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la construction à supprimer' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Construction supprimée' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Construction non trouvée' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('files/:filename'),
    (0, common_1.Header)('Content-Type', 'application/octet-stream'),
    (0, common_1.Header)('Content-Disposition', 'attachment'),
    (0, swagger_1.ApiOperation)({ summary: 'Télécharger un fichier' }),
    (0, swagger_1.ApiParam)({ name: 'filename', description: 'Nom du fichier à télécharger' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Fichier téléchargé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Fichier non trouvé' }),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ConstructionController.prototype, "getFile", null);
exports.ConstructionController = ConstructionController = __decorate([
    (0, swagger_1.ApiTags)('Constructions'),
    (0, common_1.Controller)('serviceconstruction/construction'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [construction_service_1.ConstructionService])
], ConstructionController);
//# sourceMappingURL=construction.controller.js.map