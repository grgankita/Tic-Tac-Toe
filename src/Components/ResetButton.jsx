const ResetButton = ({ resetGame }) => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      onClick={resetGame}
    >
      Restart Game
    </button>
  );
};

export default ResetButton;
