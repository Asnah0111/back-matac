import { PieceJointe } from '../../piece-jointe/entities/piece-jointe.entity';
import { Terrain } from '../../terrain/entities/terrain.entity';
export declare class Alignment {
    id_align: number;
    id_mandataire: string;
    status_proprietaire: string;
    qualite_demandeur: string;
    nif: string;
    id_cert_sit_jur: string;
    id_plan_off: string;
    id_terrain?: number;
    created_at: Date;
    updated_at: Date;
    pieces_jointes: PieceJointe[];
    terrain: Terrain;
    raison_social: string;
    num_carte_stat: string;
    nom_mandataire: string;
    prenom_mandataire: string;
    cin_passeport: string;
    adresse: string;
    fonction: string;
    age: string;
    nationalite: string;
}
