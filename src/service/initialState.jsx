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

export const initialBoardState = [
    [
        { src: rook_black, color: "black", name: "rook", dropable: false },
        { src: knight_black, color: "black", name: "knight" , dropable: false},
        { src: bishop_black, color: "black", name: "bishop" , dropable: false },
        { src: queen_black, color: "black", name: "queen"  , dropable: false },
        { src: king_black, color: "black", name: "king"  , dropable: false },
        { src: bishop_black, color: "black", name: "bishop"  , dropable: false },
        { src: knight_black, color: "black", name: "knight"  , dropable: false },
        { src: rook_black, color: "black", name: "rook"  , dropable: false }
    ],
    [
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false }
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false}
    ],
    [
        { src: rook_white, color: "white", name: "rook" ,dropable: false},
        { src: knight_white, color: "white", name: "knight",dropable: false },
        { src: bishop_white, color: "white", name: "bishop",dropable: false },
        { src: queen_white, color: "white", name: "queen" ,dropable: false},
        { src: king_white, color: "white", name: "king",dropable: false },
        { src: bishop_white, color: "white", name: "bishop",dropable: false },
        { src: knight_white, color: "white", name: "knight" ,dropable: false},
        { src: rook_white, color: "white", name: "rook",dropable: false }
    ]
];
export const initialState = [
    [
        { src: rook_black, color: "black", name: "rook", dropable: false },
        { src: knight_black, color: "black", name: "knight" , dropable: false},
        { src: bishop_black, color: "black", name: "bishop" , dropable: false },
        { src: queen_black, color: "black", name: "queen"  , dropable: false },
        { src: king_black, color: "black", name: "king"  , dropable: false },
        { src: bishop_black, color: "black", name: "bishop"  , dropable: false },
        { src: knight_black, color: "black", name: "knight"  , dropable: false },
        { src: rook_black, color: "black", name: "rook"  , dropable: false }
    ],
    [
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false },
        { src: pawn_black, color: "black", name: "pawn"  , dropable: false }
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },  
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false },
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
        {src: "", color: "", name: "", dropable: false }, 
    ],
    [
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false},
        { src: pawn_white, color: "white", name: "pawn" ,dropable: false}
    ],
    [
        { src: rook_white, color: "white", name: "rook" ,dropable: false},
        { src: knight_white, color: "white", name: "knight",dropable: false },
        { src: bishop_white, color: "white", name: "bishop",dropable: false },
        { src: queen_white, color: "white", name: "queen" ,dropable: false},
        { src: king_white, color: "white", name: "king",dropable: false },
        { src: bishop_white, color: "white", name: "bishop",dropable: false },
        { src: knight_white, color: "white", name: "knight" ,dropable: false},
        { src: rook_white, color: "white", name: "rook",dropable: false }
    ]
];
