import { ConstructionService } from './construction.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';
export declare class ConstructionController {
    private readonly constructionService;
    constructor(constructionService: ConstructionService);
    create(createConstructionDto: CreateConstructionDto): Promise<Construction>;
    findAll(mandataire?: string): Promise<Construction[]>;
    findOne(id: number): Promise<Construction>;
    update(id: number, updateConstructionDto: UpdateConstructionDto): Promise<Construction>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
