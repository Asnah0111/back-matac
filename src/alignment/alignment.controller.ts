import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiConsumes,
} from '@nestjs/swagger';
import { AlignmentService } from './alignment.service';
import { CreateAlignmentDto } from './dto/create-alignment.dto';
import { UpdateAlignmentDto } from './dto/update-alignment.dto';
import { Alignment } from './entities/alignment.entity';

@ApiTags('Alignements')
@Controller('servicealignement/alignment')
export class AlignmentController {
  constructor(private readonly alignmentService: AlignmentService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel alignement' })
  @ApiResponse({ 
    status: 201, 
    description: 'Alignement créé avec succès', 
    type: Alignment 
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async create(@Body() createAlignmentDto: CreateAlignmentDto): Promise<Alignment> {
    return this.alignmentService.create(createAlignmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les alignements' })
  @ApiQuery({ name: 'mandataire', required: false, description: 'Filtrer par ID mandataire' })
  @ApiResponse({ 
    status: 200, 
    description: 'Liste des alignements', 
    type: [Alignment] 
  })
  async findAll(@Query('mandataire') mandataire?: string): Promise<Alignment[]> {
    if (mandataire) {
      return this.alignmentService.findByMandataire(mandataire);
    }
    return this.alignmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un alignement par ID' })
  @ApiParam({ name: 'id', description: 'ID de l\'alignement', type: 'number' })
  @ApiResponse({ 
    status: 200, 
    description: 'Alignement trouvé', 
    type: Alignment 
  })
  @ApiResponse({ status: 404, description: 'Alignement non trouvé' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Alignment> {
    return this.alignmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un alignement' })
  @ApiParam({ name: 'id', description: 'ID de l\'alignement', type: 'number' })
  @ApiResponse({ 
    status: 200, 
    description: 'Alignement mis à jour', 
    type: Alignment 
  })
  @ApiResponse({ status: 404, description: 'Alignement non trouvé' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAlignmentDto: UpdateAlignmentDto,
  ): Promise<Alignment> {
    return this.alignmentService.update(id, updateAlignmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un alignement' })
  @ApiParam({ name: 'id', description: 'ID de l\'alignement', type: 'number' })
  @ApiResponse({ status: 200, description: 'Alignement supprimé avec succès' })
  @ApiResponse({ status: 404, description: 'Alignement non trouvé' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.alignmentService.remove(id);
    return { message: 'Alignement supprimé avec succès' };
  }
}