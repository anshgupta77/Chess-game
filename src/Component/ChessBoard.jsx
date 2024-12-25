
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
                // return;
            }
        }
        // else {
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
    // function isValidMove(i, j){
    //     const pieceColor = boardObject[i][j].color;
    //     if(pieceColor === turn){
    //         return true;
    //     }
    //     return false;
    // }

    function isValidMove(i, j) {
        const targetCell = boardObject[i][j];
    
        // Target cell must be empty or contain an opponent's piece
        return targetCell.src === "" || targetCell.color !== turn;
    }

    function handleRook(Xordinate,Yordinate){
        // console.log("Co-ordinate of rook",Xordinate, Yordinate)
        const newBoardObject = [...boardObject];

        //move Down;
        for(let i=Xordinate+1; i<8; i++){
            if(newBoardObject[i][Yordinate].src !== ""){
                break;
            }
            // console.log("Move Down",i, Yordinate);
            newBoardObject[i][Yordinate].dropable = true;
        }
        //move up;
        for(let i=Xordinate-1; i>=0; i--){
            if(newBoardObject[i][Yordinate].src !== ""){
                console.log(i, Yordinate);
                break;
            }
            // console.log("Move Up",i, Yordinate);
            newBoardObject[i][Yordinate].dropable = true;
        }

        //move right
        for(let j=Yordinate+1; j<8; j++){
            if(newBoardObject[Xordinate][j].src !== ""){
                break;
            }
            // console.log("Move right",Xordinate,j);
            newBoardObject[Xordinate][j].dropable = true;
        }

        //move left
        for(let j=Yordinate-1; j>=0; j--){
            if(newBoardObject[Xordinate][j].src !== ""){
                break;
            }
            // console.log("Move left",Xordinate,j);
            newBoardObject[Xordinate][j].dropable = true;
        }
        // console.log("NewBoardObject",  newBoardObject)
        setBoardObject(newBoardObject);
    
    }
    function getNamePieceSelected(Xordinate,Yordinate){
        console.log(Xordinate, Yordinate);
        const pieceName = boardObject[Xordinate][Yordinate].name;
        console.log(pieceName);
        // return;
        switch (pieceName){
            case "rook" : {
                console.log(Xordinate, Yordinate);
                handleRook(Xordinate,Yordinate);
                break;

            }
            default: console.log("Invalid input");
        }
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
                        {boardObject[i][j].dropable ? (
                            <div className="rounded-full w-3 h-3 bg-green-500" >
                                
                            </div>) : <></>}
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
