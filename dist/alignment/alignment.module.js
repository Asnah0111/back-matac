"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alignment_service_1 = require("./alignment.service");
const alignment_controller_1 = require("./alignment.controller");
const alignment_entity_1 = require("./entities/alignment.entity");
let AlignmentModule = class AlignmentModule {
};
exports.AlignmentModule = AlignmentModule;
exports.AlignmentModule = AlignmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alignment_entity_1.Alignment])],
        controllers: [alignment_controller_1.AlignmentController],
        providers: [alignment_service_1.AlignmentService],
        exports: [alignment_service_1.AlignmentService],
    })
], AlignmentModule);
//# sourceMappingURL=alignment.module.js.map