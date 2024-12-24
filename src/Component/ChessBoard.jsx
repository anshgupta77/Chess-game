
import { pieces } from "../service/peices";

const ChessBoard = () => {
    function chessBoard() {
        const board = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const key = `${i}-${j}`;
                board.push(
                    <div
                        key={key}
                        className={`w-12 h-12 flex justify-center items-center ${
                            (i + j) % 2 === 0 ? "bg-yellow-200" : "bg-gray-600"
                        }`}
                    >
                        {pieces[key] && (
                            <img
                                src={`${pieces[key]}`}
                                alt={pieces[key]}
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
        </div>
    );
};

export default ChessBoard;
