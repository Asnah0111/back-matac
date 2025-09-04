import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PieceJointeService } from './piece-jointe.service';
import { PieceJointeController } from './piece-jointe.controller';
import { PieceJointe } from './entities/piece-jointe.entity';
import { AlignmentModule } from '../alignment/alignment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PieceJointe]),
    AlignmentModule
  ],
  controllers: [PieceJointeController],
  providers: [PieceJointeService],
  exports: [PieceJointeService]
})
export class PieceJointeModule {}
