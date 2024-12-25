
import { useState } from "react";
import { initialState } from "../service/initialState";

const ChessBoard = () => {
    const [boardObject, setBoardObject] = useState(initialState);
    const [selectedPiece , setSelectedPiece] = useState(null);
    const [turn, setTurn] = useState("white");
    console.log("BoardState", boardObject);

    function handleCellClick(i, j) {
        const piece = boardObject[i][j];
        console.log("Piece name", piece.name);
        console.log(selectedPiece)
        if(!selectedPiece  || (piece.src !== "")){
            if(piece.color === turn){
                setSelectedPiece({i,j});
                getNamePieceSelected(i,j);

            }
        }
        if(isValidMove(i,j)){
                    const newBoardObject = [...boardObject]; // this create only the reference of the outer object only..
                    console.log(selectedPiece)
                    
                    newBoardObject[i][j] = {...boardObject[selectedPiece.i][selectedPiece.j]};
                    console.log(selectedPiece)

                    newBoardObject[selectedPiece.i][selectedPiece.j] = {src: "", color: "", name: "", dropable: false};
                    setBoardObject(newBoardObject);
                    setTurn(prev => (prev === "white" ? "black" : "white"));
                    clearDropable();
                    setSelectedPiece(null); 
                }    
            // }
        }

    function isValidMove(i, j) {
        const targetCell = boardObject[i][j];

        return targetCell.dropable;
    }

    function getValidMoves(pieceName, x, y) {
        const moves = [];
        switch (pieceName) {
            case "rook":
                addStraightLineMoves(moves, x, y);
                break;
            case "bishop":
                addDiagonalMoves(moves, x, y);
                break;
            case "queen":
                addStraightLineMoves(moves, x, y);
                addDiagonalMoves(moves, x, y);
                break;
            case "knight":
                addKnightMoves(moves, x, y);
                break;
            case "king":
                addKingMoves(moves, x, y);
                break;
            case "pawn":
                addPawnMoves(moves, x, y);
                break;
            default:
                break;
        }
        return moves;
    }
    function addKingMoves(moves, x, y){
        const KingMoves = [
            [x+1, y+1],[x+1, y-1],
            [x-1, y+1],[x-1, y-1],
            [x,y+1], [x, y-1],
            [x+1,y], [x-1, y],
        ]

        KingMoves.forEach(([i,j]) =>{
            if(i>=0 && i<8 && j>=0 && j<8){
                if(boardObject[i][j].color != turn)
                moves.push([i,j]);
            }
        })
    }

    function addPawnMoves(moves, x, y){
        if(turn === "white"){
            if(x === 6){
                moves.push([x-2,y]);
            }
            moves.push([x-1,y]);
        }
        else{
            if(x === 1) {
                moves.push([x+2, y]);
            }
            moves.push([x+1,y]);
        }
    }
    function addStraightLineMoves(moves, x, y) {
        for (let i = x + 1; i < 8; i++) {
            if (boardObject[i][y].src !== "") {
                if(turn !== boardObject[i][y].color){
                    moves.push([i, y]);
                    break;
                }
                break;
            }
            moves.push([i, y]);
        }
        for (let i = x - 1; i >= 0; i--) {
            if (boardObject[i][y].src !== "") {
                if(turn !== boardObject[i][y].color){
                    moves.push([i, y]);
                    break;
                }
                break;
            }
            moves.push([i, y]);
        }
        for (let j = y + 1; j < 8; j++) {
            if (boardObject[x][j].src !== "") {
                if(turn !== boardObject[x][j].color){
                    moves.push([x, j]);
                    break;
                }
                break;
            }
            moves.push([x, j]);
        }
        for (let j = y - 1; j >= 0; j--) {
            if (boardObject[x][j].src !== "") {
                if(turn !== boardObject[x][j].color){
                    moves.push([x, j]);
                    break;
                }
                break;
            }
            moves.push([x, j]);
        }
    }

    function addDiagonalMoves(moves, x, y) {
        for (let i = x + 1, j = y + 1; i < 8 && j < 8; i++, j++) {
            if (boardObject[i][j].src !== "") {
                if(turn !== boardObject[i][j].color){
                    moves.push([i, j]);
                    break;
                }
                break;
            }
            moves.push([i, j]);
        }
        for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
            if (boardObject[i][j].src !== "") {
                if(turn !== boardObject[i][j].color){
                    moves.push([i, j]);
                    break;
                }
                break;
            }
            moves.push([i, j]);
        }
        for (let i = x + 1, j = y - 1; i < 8 && j >= 0; i++, j--) {
            if (boardObject[i][j].src !== "") {
                if(turn !== boardObject[i][j].color){
                    moves.push([i, j]);
                    break;
                }
                break;
            }
            moves.push([i, j]);
        }
        for (let i = x - 1, j = y + 1; i >= 0 && j < 8; i--, j++) {
            if (boardObject[i][j].src !== "") {
                if(turn !== boardObject[i][j].color){
                    moves.push([i, j]);
                    break;
                }
                break;
            }
            moves.push([i, j]);
        }
    }

    function addKnightMoves(moves, x, y) {
        const knightMoves = [
            [x - 2, y - 1],[x - 1, y - 2],
            [x - 2, y + 1],[x - 1, y + 2],
            [x + 2, y - 1],[x + 1, y - 2], 
            [x + 2, y + 1],[x + 1, y + 2],   
        ];
        knightMoves.forEach(([i, j]) => {
            if (i >= 0 && i < 8 && j >= 0 && j < 8) {
                if(boardObject[i][j].color !== turn)
                    moves.push([i, j]);
            }
        });
    }

    function markValidMoves(moves) {
        const newBoardObject = [...boardObject];
        moves.forEach(([i, j]) => {
            newBoardObject[i][j].dropable = true;
        });
        setBoardObject(newBoardObject);
    }

    function getNamePieceSelected(x, y) {
        const pieceName = boardObject[x][y].name;
        const moves = getValidMoves(pieceName, x, y);
        markValidMoves(moves);
    }
    function clearDropable(){
        // if(initialState === boardObject) return;
        const newBoardObject = [...boardObject];
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                newBoardObject[i][j].dropable = false;
            }
        }
        setBoardObject(newBoardObject);
    }
    
    const validMovesColor = turn === "white"? 'bg-green-400': `bg-red-400`; 
    function chessBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const key = `${i}-${j}`;
                board.push(
                    <div
                        key={key}
                        onClick={() => handleCellClick(i, j)}
                        className={`w-12 h-12 flex justify-center items-center
                            ${(i + j) % 2 === 0 ? "bg-yellow-200" : "bg-gray-600"} 
                            ${boardObject[i][j].dropable ? `cursor-pointer` : boardObject[i][j].src === "" ? `cursor-not-allowed`: `` }`}
                    >
                        {boardObject[i][j].dropable ? (
                            <div className={`rounded-full w-3 h-3 ${validMovesColor}`} >
                                
                            </div>): <></>}
                        {boardObject[i][j].src !== "" && (
                            <img
                                src={`${boardObject[i][j].src}`}
                                alt={boardObject[i][j].src}
                                className={`w-8 h-8 cursor-pointer`}
                            />
                        )}
                    </div>
                );
            }
        }
        return board;
    }
    
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center bg-slate-600">
            <h1 className="text-4xl mb-6 text-white text-pretty font-extrabold">Let's play!!!</h1>
            <div className="grid grid-cols-8 w-96 h-96 bg-white rounded-lg border-4 border-gray-100">
                {chessBoard()}
            </div>
            <div className="mt-4 p-4 bg-purple-700 text-white text-2xl font-bold rounded-lg shadow-lg">
                <span className="capitalize">{turn}</span>'s Turn
            </div>
        </div>
    );
    
};

export default ChessBoard;
