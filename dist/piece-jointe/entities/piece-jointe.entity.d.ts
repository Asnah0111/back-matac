import { Alignment } from '../../alignment/entities/alignment.entity';
export declare class PieceJointe {
    id_piece: number;
    nom_piece: string;
    url_fichier: string;
    type_fichier: string;
    taille_fichier: number;
    uploaded_at: Date;
    id_align: number;
    alignment: Alignment;
}
