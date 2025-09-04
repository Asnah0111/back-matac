import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlignmentService } from './alignment.service';
import { AlignmentController } from './alignment.controller';
import { Alignment } from './entities/alignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alignment])],
  controllers: [AlignmentController],
  providers: [AlignmentService],
  exports: [AlignmentService],
})
export class AlignmentModule {}