"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlignmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_alignment_dto_1 = require("./create-alignment.dto");
class UpdateAlignmentDto extends (0, swagger_1.PartialType)(create_alignment_dto_1.CreateAlignmentDto) {
}
exports.UpdateAlignmentDto = UpdateAlignmentDto;
//# sourceMappingURL=update-alignment.dto.js.map