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
import { ConstructionService } from './construction.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { Construction } from './entities/construction.entity';

@ApiTags('Constructions')
@Controller('serviceconstruction/construction')
export class ConstructionController {
  constructor(private readonly constructionService: ConstructionService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle construction' })
  @ApiResponse({ 
    status: 201, 
    description: 'Construction créée avec succès', 
    type: Construction 
  })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async create(@Body() createConstructionDto: CreateConstructionDto): Promise<Construction> {
    return this.constructionService.create(createConstructionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les constructions' })
  @ApiQuery({ name: 'mandataire', required: false, description: 'Filtrer par ID mandataire' })
  @ApiResponse({ 
    status: 200, 
    description: 'Liste des constructions', 
    type: [Construction] 
  })
  async findAll(@Query('mandataire') mandataire?: string): Promise<Construction[]> {
    if (mandataire) {
      return this.constructionService.findByMandataire(mandataire);
    }
    return this.constructionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une construction par ID' })
  @ApiParam({ name: 'id', description: 'ID de la construction', type: 'number' })
  @ApiResponse({ 
    status: 200, 
    description: 'Construction trouvée', 
    type: Construction 
  })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Construction> {
    return this.constructionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une construction' })
  @ApiParam({ name: 'id', description: 'ID de la construction', type: 'number' })
  @ApiResponse({ 
    status: 200, 
    description: 'Construction mise à jour', 
    type: Construction 
  })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  @ApiConsumes('application/x-www-form-urlencoded')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConstructionDto: UpdateConstructionDto,
  ): Promise<Construction> {
    return this.constructionService.update(id, updateConstructionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une construction' })
  @ApiParam({ name: 'id', description: 'ID de la construction', type: 'number' })
  @ApiResponse({ status: 200, description: 'Construction supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Construction non trouvée' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.constructionService.remove(id);
    return { message: 'Construction supprimée avec succès' };
  }
}
