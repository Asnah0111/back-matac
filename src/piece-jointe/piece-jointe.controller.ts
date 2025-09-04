import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe,
  HttpStatus,
  HttpCode
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiConsumes } from '@nestjs/swagger';
import { PieceJointeService } from './piece-jointe.service';
import { CreatePieceJointeDto } from './dto/create-piece-jointe.dto';
import { UpdatePieceJointeDto } from './dto/update-piece-jointe.dto';
import { CreateWithFileInfoDto } from './dto/create-with-file-info.dto';
import { PieceJointe } from './entities/piece-jointe.entity';

@ApiTags('piece-jointe')
@Controller('servicealignement/piece-jointe')
export class PieceJointeController {
  constructor(private readonly pieceJointeService: PieceJointeService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle pièce jointe' })
  @ApiResponse({ status: 201, description: 'Pièce jointe créée avec succès', type: PieceJointe })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPieceJointeDto: CreatePieceJointeDto): Promise<PieceJointe> {
    return this.pieceJointeService.create(createPieceJointeDto);
  }

  @Post('with-file-info')
  @ApiOperation({ summary: 'Créer une pièce jointe avec informations de fichier' })
  @ApiResponse({ status: 201, description: 'Pièce jointe créée avec succès', type: PieceJointe })
  @ApiConsumes('application/x-www-form-urlencoded')
  @HttpCode(HttpStatus.CREATED)
  async createWithFileInfo(
    @Body() createWithFileInfoDto: CreateWithFileInfoDto
  ): Promise<PieceJointe> {
    const fileInfo = {
      filename: createWithFileInfoDto.filename,
      mimetype: createWithFileInfoDto.mimetype,
      size: createWithFileInfoDto.size,
      url: createWithFileInfoDto.url,
    };
    
    const pieceJointeDto = {
      nom_piece: createWithFileInfoDto.nom_piece,
      id_align: createWithFileInfoDto.id_align,
    };
    
    return this.pieceJointeService.createWithFileInfo(fileInfo, pieceJointeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les pièces jointes' })
  @ApiResponse({ status: 200, description: 'Liste des pièces jointes', type: [PieceJointe] })
  async findAll(): Promise<PieceJointe[]> {
    return this.pieceJointeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une pièce jointe par ID' })
  @ApiParam({ name: 'id', description: 'ID de la pièce jointe' })
  @ApiResponse({ status: 200, description: 'Pièce jointe trouvée', type: PieceJointe })
  @ApiResponse({ status: 404, description: 'Pièce jointe non trouvée' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PieceJointe> {
    return this.pieceJointeService.findOne(id);
  }

  @Get('alignment/:alignmentId')
  @ApiOperation({ summary: 'Récupérer les pièces jointes par alignement' })
  @ApiParam({ name: 'alignmentId', description: 'ID de l\'alignement' })
  @ApiResponse({ status: 200, description: 'Pièces jointes de l\'alignement', type: [PieceJointe] })
  async findByAlignment(@Param('alignmentId', ParseIntPipe) alignmentId: number): Promise<PieceJointe[]> {
    return this.pieceJointeService.findByAlignment(alignmentId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une pièce jointe' })
  @ApiParam({ name: 'id', description: 'ID de la pièce jointe' })
  @ApiResponse({ status: 200, description: 'Pièce jointe mise à jour', type: PieceJointe })
  @ApiResponse({ status: 404, description: 'Pièce jointe non trouvée' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePieceJointeDto: UpdatePieceJointeDto
  ): Promise<PieceJointe> {
    return this.pieceJointeService.update(id, updatePieceJointeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une pièce jointe' })
  @ApiParam({ name: 'id', description: 'ID de la pièce jointe' })
  @ApiResponse({ status: 204, description: 'Pièce jointe supprimée' })
  @ApiResponse({ status: 404, description: 'Pièce jointe non trouvée' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pieceJointeService.remove(id);
  }
}