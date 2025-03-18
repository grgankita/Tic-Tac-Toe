import { useState, useEffect } from "react";
import Board from "../Components/Board";
import ResetButton from "../Components/ResetButton";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };


  useEffect(() => {
    if (isDraw) {
      setTimeout(resetGame, 2000); // Restart the game after 2 seconds
    }
  }, [isDraw]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe </h1>
      <Board board={board} handleClick={handleClick} />

      {winner ? (
        <p className="mt-4 text-lg font-bold">Winner: {winner} 🎉</p>
      ) : isDraw ? (
        <p className="mt-4 text-lg font-bold">It's a Draw! Restarting... ⏳</p>
      ) : (
        <p className="mt-4 text-lg">
          Current Turn: <span className="font-bold">{currentPlayer}</span>
        </p>
      )}

      <ResetButton resetGame={resetGame} />
    </div>
  );
};

export default Game;
