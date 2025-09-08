"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConstructionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_construction_dto_1 = require("./create-construction.dto");
class UpdateConstructionDto extends (0, swagger_1.PartialType)(create_construction_dto_1.CreateConstructionDto) {
}
exports.UpdateConstructionDto = UpdateConstructionDto;
//# sourceMappingURL=update-construction.dto.js.map