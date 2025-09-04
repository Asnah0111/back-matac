import { Repository } from 'typeorm';
import { CreatePieceJointeDto } from './dto/create-piece-jointe.dto';
import { UpdatePieceJointeDto } from './dto/update-piece-jointe.dto';
import { PieceJointe } from './entities/piece-jointe.entity';
import { AlignmentService } from '../alignment/alignment.service';
export declare class PieceJointeService {
    private readonly pieceJointeRepository;
    private readonly alignmentService;
    constructor(pieceJointeRepository: Repository<PieceJointe>, alignmentService: AlignmentService);
    create(createPieceJointeDto: CreatePieceJointeDto): Promise<PieceJointe>;
    findAll(): Promise<PieceJointe[]>;
    findOne(id: number): Promise<PieceJointe>;
    findByAlignment(alignmentId: number): Promise<PieceJointe[]>;
    update(id: number, updatePieceJointeDto: UpdatePieceJointeDto): Promise<PieceJointe>;
    remove(id: number): Promise<void>;
    createWithFileInfo(fileInfo: {
        filename: string;
        mimetype: string;
        size: number;
        url: string;
    }, createDto: CreatePieceJointeDto): Promise<PieceJointe>;
}
