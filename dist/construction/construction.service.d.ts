import { Repository } from 'typeorm';
import { Construction } from './entities/construction.entity';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Alignment } from '../alignment/entities/alignment.entity';
export declare class ConstructionService {
    private readonly constructionRepository;
    private readonly alignmentRepository;
    constructor(constructionRepository: Repository<Construction>, alignmentRepository: Repository<Alignment>);
    create(createConstructionDto: CreateConstructionDto): Promise<Construction>;
    findAll(): Promise<Construction[]>;
    findOne(id: number): Promise<Construction>;
    update(id: number, updateConstructionDto: UpdateConstructionDto): Promise<Construction>;
    remove(id: number): Promise<void>;
    findByAlignment(idAlign: number): Promise<Construction[]>;
}
