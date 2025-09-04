import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePieceJointeDto } from './dto/create-piece-jointe.dto';
import { UpdatePieceJointeDto } from './dto/update-piece-jointe.dto';
import { PieceJointe } from './entities/piece-jointe.entity';
import { AlignmentService } from '../alignment/alignment.service';

@Injectable()
export class PieceJointeService {
  constructor(
    @InjectRepository(PieceJointe)
    private readonly pieceJointeRepository: Repository<PieceJointe>,
    private readonly alignmentService: AlignmentService,
  ) {}

  async create(createPieceJointeDto: CreatePieceJointeDto): Promise<PieceJointe> {
    // Vérifier que l'alignement existe
    await this.alignmentService.findOne(createPieceJointeDto.id_align);
    
    const pieceJointe = this.pieceJointeRepository.create(createPieceJointeDto);
    return await this.pieceJointeRepository.save(pieceJointe);
  }

  async findAll(): Promise<PieceJointe[]> {
    return await this.pieceJointeRepository.find({
      relations: {
        alignment: true
      },
      order: {
        uploaded_at: 'DESC'
      }
    });
  }

  async findOne(id: number): Promise<PieceJointe> {
    const pieceJointe = await this.pieceJointeRepository.findOne({
      where: { id_piece: id },
      relations: {
        alignment: true
      }
    });
    
    if (!pieceJointe) {
      throw new NotFoundException(`Pièce jointe avec l'ID ${id} non trouvée`);
    }
    
    return pieceJointe;
  }

  async findByAlignment(alignmentId: number): Promise<PieceJointe[]> {
    return await this.pieceJointeRepository.find({
      where: { id_align: alignmentId },
      order: {
        uploaded_at: 'DESC'
      }
    });
  }

  async update(id: number, updatePieceJointeDto: UpdatePieceJointeDto): Promise<PieceJointe> {
    const pieceJointe = await this.findOne(id);
    Object.assign(pieceJointe, updatePieceJointeDto);
    return await this.pieceJointeRepository.save(pieceJointe);
  }

  async remove(id: number): Promise<void> {
    const pieceJointe = await this.findOne(id);
    await this.pieceJointeRepository.remove(pieceJointe);
  }

  // Méthode pour créer une entrée avec les informations du fichier (upload géré par le frontend)
  async createWithFileInfo(fileInfo: {
    filename: string;
    mimetype: string;
    size: number;
    url: string;
  }, createDto: CreatePieceJointeDto): Promise<PieceJointe> {
    const pieceJointeDto = {
      ...createDto,
      url_fichier: fileInfo.url,
      type_fichier: fileInfo.mimetype,
      taille_fichier: fileInfo.size,
    };

    return this.create(pieceJointeDto);
  }
}
