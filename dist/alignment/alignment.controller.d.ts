import { AlignmentService } from './alignment.service';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';
import { Alignment } from './entities/alignment.entity';
export declare class AlignmentController {
    private readonly alignmentService;
    constructor(alignmentService: AlignmentService);
    create(createAlignmentDto: CreateAlignmentDto): Promise<Alignment>;
    findAll(demandeurId?: string): Promise<Alignment[]>;
    findOne(id: number): Promise<Alignment>;
    update(id: number, updateAlignmentDto: UpdateAlignmentDto): Promise<Alignment>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
