import rook_black from "../assets/rook-black.png";
import knight_black from "../assets/knight-black.png";
import queen_black from "../assets/queen-black.png";
import king_black from "../assets/king-black.png";
import bishop_black from "../assets/bishop-black.png";
import pawn_black from "../assets/pawn-black.png";
import bishop_white from "../assets/bishop-white.png";
import king_white from "../assets/king-white.png";
import knight_white from "../assets/knight-white.png";
import pawn_white from "../assets/pawn-white.png";
import rook_white from "../assets/rook-white.png";
import queen_white from "../assets/queen-white.png";

export const pieces = {
    // Row 1: Black major pieces
    '0-0': rook_black, '0-1': knight_black, '0-2': bishop_black, '0-3': queen_black,
    '0-4': king_black, '0-5': bishop_black, '0-6': knight_black, '0-7': rook_black,
    // Row 2: Black pawns
    '1-0': pawn_black, '1-1': pawn_black, '1-2': pawn_black, '1-3': pawn_black,
    '1-4': pawn_black, '1-5': pawn_black, '1-6': pawn_black, '1-7': pawn_black,
    // Row 7: White pawns
    '6-0': pawn_white, '6-1': pawn_white, '6-2': pawn_white, '6-3': pawn_white,
    '6-4': pawn_white, '6-5': pawn_white, '6-6': pawn_white, '6-7': pawn_white,
    // Row 8: White major pieces
    '7-0': rook_white, '7-1': knight_white, '7-2': bishop_white, '7-3': queen_white,
    '7-4': king_white, '7-5': bishop_white, '7-6': knight_white, '7-7': rook_white,
};
