import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructionService } from './construction.service';
import { ConstructionController } from './construction.controller';
import { Construction } from './entities/construction.entity';
import { Alignment } from '../alignment/entities/alignment.entity';
import { AlignmentModule } from '../alignment/alignment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Construction, Alignment]),
    AlignmentModule
  ],
  controllers: [ConstructionController],
  providers: [ConstructionService],
  exports: [ConstructionService],
})
export class ConstructionModule {}
