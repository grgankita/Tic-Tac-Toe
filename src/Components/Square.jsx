const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 bg-gray-700 text-2xl font-bold flex items-center justify-center border border-gray-600 hover:bg-gray-600"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
