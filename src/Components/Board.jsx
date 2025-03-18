import Square from "./Square";

const Board = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {board.map((square, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="w-24 h-24 border-2 border-gray-500 text-2xl font-bold flex items-center justify-center bg-gray-800 text-gray-400 hover:bg-gray-700"
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
