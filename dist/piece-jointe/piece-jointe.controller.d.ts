import { PieceJointeService } from './piece-jointe.service';
import { CreatePieceJointeDto } from './dto/create-piece-jointe.dto';
import { UpdatePieceJointeDto } from './dto/update-piece-jointe.dto';
import { CreateWithFileInfoDto } from './dto/create-with-file-info.dto';
import { PieceJointe } from './entities/piece-jointe.entity';
export declare class PieceJointeController {
    private readonly pieceJointeService;
    constructor(pieceJointeService: PieceJointeService);
    create(createPieceJointeDto: CreatePieceJointeDto): Promise<PieceJointe>;
    createWithFileInfo(createWithFileInfoDto: CreateWithFileInfoDto): Promise<PieceJointe>;
    findAll(): Promise<PieceJointe[]>;
    findOne(id: number): Promise<PieceJointe>;
    findByAlignment(alignmentId: number): Promise<PieceJointe[]>;
    update(id: number, updatePieceJointeDto: UpdatePieceJointeDto): Promise<PieceJointe>;
    remove(id: number): Promise<void>;
}
