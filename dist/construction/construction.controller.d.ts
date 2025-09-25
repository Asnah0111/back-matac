import { StreamableFile } from '@nestjs/common';
import type { Response } from 'express';
import { ConstructionService } from './construction.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';
export declare class ConstructionController {
    private readonly constructionService;
    constructor(constructionService: ConstructionService);
    create(createConstructionDto: CreateConstructionDto, files: {
        planTerrain?: Express.Multer.File[];
        droitPropriete?: Express.Multer.File[];
        planLimiteTerrain?: Express.Multer.File[];
        planMasse?: Express.Multer.File[];
        planFacade?: Express.Multer.File[];
    }): Promise<Construction>;
    findAll(alignement?: number): Promise<Construction[]>;
    findOne(id: number): Promise<Construction>;
    update(id: number, updateConstructionDto: UpdateConstructionDto, files: {
        planTerrain?: Express.Multer.File[];
        droitPropriete?: Express.Multer.File[];
        planLimiteTerrain?: Express.Multer.File[];
        planMasse?: Express.Multer.File[];
        planFacade?: Express.Multer.File[];
    }): Promise<Construction>;
    remove(id: number): Promise<void>;
    getFile(filename: string, res: Response): Promise<StreamableFile>;
}
