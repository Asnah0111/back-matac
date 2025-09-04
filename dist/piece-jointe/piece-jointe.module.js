"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieceJointeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const piece_jointe_service_1 = require("./piece-jointe.service");
const piece_jointe_controller_1 = require("./piece-jointe.controller");
const piece_jointe_entity_1 = require("./entities/piece-jointe.entity");
const alignment_module_1 = require("../alignment/alignment.module");
let PieceJointeModule = class PieceJointeModule {
};
exports.PieceJointeModule = PieceJointeModule;
exports.PieceJointeModule = PieceJointeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([piece_jointe_entity_1.PieceJointe]),
            alignment_module_1.AlignmentModule
        ],
        controllers: [piece_jointe_controller_1.PieceJointeController],
        providers: [piece_jointe_service_1.PieceJointeService],
        exports: [piece_jointe_service_1.PieceJointeService]
    })
], PieceJointeModule);
//# sourceMappingURL=piece-jointe.module.js.map