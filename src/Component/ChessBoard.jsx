
import { useState } from "react";
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

const ChessBoard = () => {
    // const iniitailState = [
    //     [{src: rook_black, color: "black"}, knight_black, bishop_black, queen_black, king_black, bishop_black, knight_black, rook_black],
    //     [pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black],
    //     ['', '', '', '', '', '', '', ''],
    //     ['', '', '', '', '', '', '', ''],
    //     ['', '', '', '', '', '', '', ''],
    //     ['', '', '', '', '', '', '', ''],
    //     [pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white],
    //     [rook_white, knight_white, bishop_white, queen_white, king_white, bishop_white, knight_white, rook_white]
    // ]
    const initialState = [
        [
            {src: rook_black, color: "black"},
            {src: knight_black, color: "black"},
            {src: bishop_black, color: "black"},
            {src: queen_black, color: "black"},
            {src: king_black, color: "black"},
            {src: bishop_black, color: "black"},
            {src: knight_black, color: "black"},
            {src: rook_black, color: "black"}
        ],
        [
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"},
            {src: pawn_black, color: "black"}
        ],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        [
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"},
            {src: pawn_white, color: "white"}
        ],
        [
            {src: rook_white, color: "white"},
            {src: knight_white, color: "white"},
            {src: bishop_white, color: "white"},
            {src: queen_white, color: "white"},
            {src: king_white, color: "white"},
            {src: bishop_white, color: "white"},
            {src: knight_white, color: "white"},
            {src: rook_white, color: "white"}
        ]
    ];
    
   

    const [boardImages, setBoardImages] = useState(initialState);
    const [selectedPiece , setSelectedPiece] = useState(null);
    const [turn, setTurn] = useState("white");

    function handleCellClick(i, j) {
        // console.log(boardImages);
        const piece = boardImages[i][j];
        if(!selectedPiece){
            if(piece !== ""){
                // const imageCoordinates = {i,j};
                setSelectedPiece({i,j});
            }
        }else{
            console.log("Turn and Selected Piece",turn,selectedPiece);
            if(isValidMove(selectedPiece.i, selectedPiece.j)){
                const newBoardImages = [...boardImages];
                newBoardImages[i][j] = boardImages[selectedPiece.i][selectedPiece.j];
                newBoardImages[selectedPiece.i][selectedPiece.j] = "";
                setBoardImages(newBoardImages);
                setTurn(prev => prev === "white" ? "black" : "white");
            }
            setSelectedPiece(null);
        }

    }

    function isValidMove(i, j){
        const pieceColor = boardImages[i][j].color;
        console.log(pieceColor, turn);
        if(pieceColor === turn){
            return true;
        }
        return false;
    }
    
    function chessBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const key = `${i}-${j}`;
                board.push(
                    <div
                        key={key}
                        onClick={() => handleCellClick(i, j)}
                        className={`w-12 h-12 flex justify-center items-center ${
                            (i + j) % 2 === 0 ? "bg-yellow-200" : "bg-gray-600"
                        }`}
                    >
                        {boardImages[i][j] && (
                            <img
                                src={`${boardImages[i][j].src}`}
                                alt={boardImages[i][j].src}
                                className="w-8 h-8"
                            />
                        )}
                    </div>
                );
            }
        }
        return board;
    }

    return (
        <div className="h-[100vh] flex justify-center items-center bg-slate-200">
            <div className="grid grid-cols-8 w-96 h-96">{chessBoard()}</div>
            <div>{turn} Turn</div>
        </div>
    );
};

export default ChessBoard;
