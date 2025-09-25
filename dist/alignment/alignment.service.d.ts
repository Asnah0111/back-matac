import { Repository } from 'typeorm';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';
import { Alignment } from './entities/alignment.entity';
export declare class AlignmentService {
    private readonly alignmentRepository;
    constructor(alignmentRepository: Repository<Alignment>);
    create(createAlignmentDto: CreateAlignmentDto): Promise<Alignment>;
    findAll(): Promise<Alignment[]>;
    findOne(id: number): Promise<Alignment>;
    update(id: number, updateAlignmentDto: UpdateAlignmentDto): Promise<Alignment>;
    remove(id: number): Promise<void>;
    findByDemandeur(idDemandeur: string): Promise<Alignment[]>;
}
