import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  Res,
  StreamableFile,
  Header,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiConsumes,
  ApiBody,
  ApiBearerAuth,
  ApiProperty,
} from '@nestjs/swagger';
import { ConstructionService } from './construction.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';

// DTO pour le téléchargement de fichiers
class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary', isArray: true })
  files: any[];
}

// Dossier de stockage des fichiers
const UPLOAD_DIR = './uploads/constructions';

@ApiTags('Constructions')
@Controller('serviceconstruction/construction')
@ApiBearerAuth()
export class ConstructionController {
  constructor(private readonly constructionService: ConstructionService) {
    // Créer le dossier de téléchargement s'il n'existe pas
    fs.mkdir(UPLOAD_DIR, { recursive: true }).catch(console.error);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle construction' })
  @ApiResponse({ 
    status: 201, 
    description: 'Construction créée avec succès', 
    type: Construction 
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'planTerrain', maxCount: 10 },
        { name: 'droitPropriete', maxCount: 10 },
        { name: 'planLimiteTerrain', maxCount: 10 },
        { name: 'planMasse', maxCount: 10 },
        { name: 'planFacade', maxCount: 10 },
      ],
      {
        dest: UPLOAD_DIR,
        limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
      },
    ),
  )
  async create(
    @Body() createConstructionDto: CreateConstructionDto,
    @UploadedFiles()
    files: {
      planTerrain?: Express.Multer.File[];
      droitPropriete?: Express.Multer.File[];
      planLimiteTerrain?: Express.Multer.File[];
      planMasse?: Express.Multer.File[];
      planFacade?: Express.Multer.File[];
    },
  ): Promise<Construction> {
    // Traiter les fichiers téléchargés
    const filePaths = {};
    
    if (files) {
      for (const [field, uploadedFiles] of Object.entries(files)) {
        if (uploadedFiles && uploadedFiles.length > 0) {
          filePaths[field] = uploadedFiles.map(file => file.filename);
        }
      }
    }
    
    // Fusionner les chemins de fichiers avec les données du formulaire
    const constructionData = { ...createConstructionDto, ...filePaths };
    
    return this.constructionService.create(constructionData);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les constructions' })
  @ApiQuery({ name: 'alignement', required: false, description: 'Filtrer par ID alignement' })
  @ApiResponse({ 
    status: 200, 
    description: 'Liste des constructions', 
    type: [Construction] 
  })
  async findAll(@Query('alignement') alignement?: number): Promise<Construction[]> {
    if (alignement) {
      return this.constructionService.findByAlignment(alignement);
    }
    return this.constructionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une construction par ID' })
  @ApiParam({ name: 'id', description: 'ID de la construction', type: 'number' })
  @ApiResponse({ 
    status: 200, 
    description: 'Construction trouvée', 
    type: Construction 
  })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Construction> {
    return this.constructionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une construction' })
  @ApiParam({ name: 'id', description: 'ID de la construction à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Construction mise à jour', type: Construction })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'planTerrain', maxCount: 10 },
        { name: 'droitPropriete', maxCount: 10 },
        { name: 'planLimiteTerrain', maxCount: 10 },
        { name: 'planMasse', maxCount: 10 },
        { name: 'planFacade', maxCount: 10 },
      ],
      {
        dest: UPLOAD_DIR,
        limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
      },
    ),
  )
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConstructionDto: UpdateConstructionDto,
    @UploadedFiles()
    files: {
      planTerrain?: Express.Multer.File[];
      droitPropriete?: Express.Multer.File[];
      planLimiteTerrain?: Express.Multer.File[];
      planMasse?: Express.Multer.File[];
      planFacade?: Express.Multer.File[];
    },
  ): Promise<Construction> {
    // Traiter les fichiers téléchargés
    const filePaths = {};
    
    if (files) {
      for (const [field, uploadedFiles] of Object.entries(files)) {
        if (uploadedFiles && uploadedFiles.length > 0) {
          filePaths[field] = uploadedFiles.map(file => file.filename);
        }
      }
    }
    
    // Fusionner les chemins de fichiers avec les données de mise à jour
    const updateData = { ...updateConstructionDto, ...filePaths };
    
    return this.constructionService.update(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une construction' })
  @ApiParam({ name: 'id', description: 'ID de la construction à supprimer' })
  @ApiResponse({ status: 200, description: 'Construction supprimée' })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    // Récupérer la construction pour avoir les chemins des fichiers
    const construction = await this.constructionService.findOne(id);
    
    // Supprimer les fichiers associés
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
          } catch (err) {
            console.error(`Erreur lors de la suppression du fichier ${filename}:`, err);
          }
        }
      }
    }
    
    // Supprimer l'entrée en base de données
    return this.constructionService.remove(id);
  }
  
  @Get('files/:filename')
  @Header('Content-Type', 'application/octet-stream')
  @Header('Content-Disposition', 'attachment')
  @ApiOperation({ summary: 'Télécharger un fichier' })
  @ApiParam({ name: 'filename', description: 'Nom du fichier à télécharger' })
  @ApiResponse({ status: 200, description: 'Fichier téléchargé avec succès' })
  @ApiResponse({ status: 404, description: 'Fichier non trouvé' })
  async getFile(
    @Param('filename') filename: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const filePath = path.join(UPLOAD_DIR, filename);
    
    try {
      await fs.access(filePath);
      const file = createReadStream(filePath);
      return new StreamableFile(file);
    } catch (err) {
      throw new BadRequestException('Fichier non trouvé');
    }
  }
}
