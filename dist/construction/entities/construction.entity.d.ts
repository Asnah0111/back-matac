import { Alignment } from '../../alignment/entities/alignment.entity';
export declare class Construction {
    id_const: number;
    nature_travaux: string;
    type: string;
    id_mandataire: string;
    created_at: Date;
    updated_at: Date;
    alignment: Alignment;
}
