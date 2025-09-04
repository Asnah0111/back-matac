"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePieceJointeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_piece_jointe_dto_1 = require("./create-piece-jointe.dto");
class UpdatePieceJointeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_piece_jointe_dto_1.CreatePieceJointeDto, ['id_align'])) {
}
exports.UpdatePieceJointeDto = UpdatePieceJointeDto;
//# sourceMappingURL=update-piece-jointe.dto.js.map