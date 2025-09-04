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
  import { TerrainService } from './terrain.service';
  import { CreateTerrainDto } from './dto/create-terrain.dto';
  import { UpdateTerrainDto } from './dto/update-terrain.dto';
  import { Terrain } from './entities/terrain.entity';
  
  @ApiTags('Terrains')
  @Controller('servicealignement/terrain')
  export class TerrainController {
    constructor(private readonly terrainService: TerrainService) {}
  
    @Post()
    @ApiOperation({ summary: 'Créer un nouveau terrain' })
    @ApiResponse({ 
      status: 201, 
      description: 'Terrain créé avec succès', 
      type: Terrain 
    })
    @ApiResponse({ status: 400, description: 'Données invalides' })
    @ApiConsumes('application/x-www-form-urlencoded')
    async create(@Body() createTerrainDto: CreateTerrainDto): Promise<Terrain> {
      return this.terrainService.create(createTerrainDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Récupérer tous les terrains' })
    @ApiQuery({ name: 'numTitre', required: false, description: 'Filtrer par numéro de titre' })
    @ApiQuery({ name: 'proprietaire', required: false, description: 'Filtrer par nom de propriétaire' })
    @ApiResponse({ 
      status: 200, 
      description: 'Liste des terrains', 
      type: [Terrain] 
    })
    async findAll(
      @Query('numTitre') numTitre?: string,
      @Query('proprietaire') proprietaire?: string
    ): Promise<Terrain[]> {
      if (numTitre) {
        return this.terrainService.findByNumTitre(numTitre);
      }
      if (proprietaire) {
        return this.terrainService.findByProprietaire(proprietaire);
      }
      return this.terrainService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Récupérer un terrain par ID' })
    @ApiParam({ name: 'id', description: 'ID du terrain', type: 'number' })
    @ApiResponse({ 
      status: 200, 
      description: 'Terrain trouvé', 
      type: Terrain 
    })
    @ApiResponse({ status: 404, description: 'Terrain non trouvé' })
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Terrain> {
      return this.terrainService.findOne(id);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Mettre à jour un terrain' })
    @ApiParam({ name: 'id', description: 'ID du terrain', type: 'number' })
    @ApiResponse({ 
      status: 200, 
      description: 'Terrain mis à jour', 
      type: Terrain 
    })
    @ApiResponse({ status: 404, description: 'Terrain non trouvé' })
    @ApiConsumes('application/x-www-form-urlencoded')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTerrainDto: UpdateTerrainDto,
    ): Promise<Terrain> {
      return this.terrainService.update(id, updateTerrainDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Supprimer un terrain' })
    @ApiParam({ name: 'id', description: 'ID du terrain', type: 'number' })
    @ApiResponse({ status: 200, description: 'Terrain supprimé avec succès' })
    @ApiResponse({ status: 404, description: 'Terrain non trouvé' })
    async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
      await this.terrainService.remove(id);
      return { message: 'Terrain supprimé avec succès' };
    }
  }