import { PartialType } from '@nestjs/swagger';
import { CreateAlignmentDto } from './create-alignment.dto';

export class UpdateAlignmentDto extends PartialType(CreateAlignmentDto) {}