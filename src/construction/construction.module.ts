import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructionService } from './construction.service';
import { ConstructionController } from './construction.controller';
import { Construction } from './entities/construction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Construction])],
  controllers: [ConstructionController],
  providers: [ConstructionService],
  exports: [ConstructionService],
})
export class ConstructionModule {}
