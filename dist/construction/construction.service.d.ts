import { Repository } from 'typeorm';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';
export declare class ConstructionService {
    private readonly constructionRepository;
    constructor(constructionRepository: Repository<Construction>);
    create(createConstructionDto: CreateConstructionDto): Promise<Construction>;
    findAll(): Promise<Construction[]>;
    findOne(id: number): Promise<Construction>;
    update(id: number, updateConstructionDto: UpdateConstructionDto): Promise<Construction>;
    remove(id: number): Promise<void>;
    findByMandataire(idMandataire: string): Promise<Construction[]>;
}
