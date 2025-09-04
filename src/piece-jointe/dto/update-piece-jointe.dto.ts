import { PartialType, OmitType } from '@nestjs/swagger';
import { CreatePieceJointeDto } from './create-piece-jointe.dto';

export class UpdatePieceJointeDto extends PartialType(
  OmitType(CreatePieceJointeDto, ['id_align'] as const)
) {}
