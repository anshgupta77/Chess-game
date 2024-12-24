
import { useState } from "react";
import { initialState } from "../service/initialState";
const ChessBoard = () => {
    const [boardObject, setBoardObject] = useState(initialState);
    const [selectedPiece , setSelectedPiece] = useState(null);
    const [turn, setTurn] = useState("white");
    console.log("Selectedpiece" , selectedPiece);
    console.log("BoardState", boardObject);
    function handleCellClick(i, j) {
        const piece = boardObject[i][j];
        if(!selectedPiece){
                setSelectedPiece({i,j});
                // getNamePieceSelected(selectedPiece);
        }else{
                if((piece.src !== null && piece.color !== turn) || (piece.src === null)){
                    console.log("Turn and Selected Piece",turn,selectedPiece);
                    if(isValidMove(selectedPiece.i, selectedPiece.j)){
                        const newBoardObject = [...boardObject];
                        newBoardObject[i][j].src = boardObject[selectedPiece.i][selectedPiece.j].src;
                        newBoardObject[selectedPiece.i][selectedPiece.j].src = "";
                        setBoardObject(newBoardObject);
                        setTurn(prev => prev === "white" ? "black" : "white");
                    }
                    clearDropable();
                    setSelectedPiece(null);
                }
            }
        }
    function isValidMove(i, j){
        const pieceColor = boardObject[i][j].color;
        console.log(pieceColor, turn);
        if(pieceColor === turn){
            return true;
        }
        return false;
    }

    function handleRook(piece){
        const newBoardObject = [...boardObject];
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){

                if(newBoardObject[i][j].src === ""){
                    break;
                }
                newBoardObject[i][j].dropable = true;
            }
        }
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                if(newBoardObject[j][i].src === ""){
                    break;
                }
                newBoardObject[j][i].dropable = true;
            }
        }
        setBoardObject(newBoardObject);
    
    }
    function getNamePieceSelected(piece){
        const {i, j} = piece;
        const pieceName = boardObject[i][j].name;
        switch (pieceName){
            case "rook" : handleRook(piece);
            default: console.log("Invalid input");
        }
    }
    function clearDropable(){
        if(initialState === boardObject) return;
        const newBoardObject = [...boardObject];
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                newBoardObject[i][j].dropable = false;
            }
        }
        setBoardObject(newBoardObject);
    }
    // if(selectedPiece){
    //     getNamePieceSelected(selectedPiece);
    // }
    
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
                        {boardObject[i][j].src !== "" && (
                            <img
                                src={`${boardObject[i][j].src}`}
                                alt={boardObject[i][j].src}
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
