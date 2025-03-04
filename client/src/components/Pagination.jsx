const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {/* First and Previous */}
      <button
        className="px-4 py-2 border hover:bg-gray-200"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        hidden={currentPage === 1}
      >
        «
      </button>
      <button
        className="px-4 py-2 border hover:bg-gray-200"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        hidden={currentPage === 1}
      >
        ‹
      </button>

      {/* Page Numbers */}

      {[...Array(totalPages)].map((ele, index) => (
        <button
          key={index}
          className={`px-4 py-2 border rounded-md ${
            currentPage === index + 1
              ? "bg-black text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next and Last */}
      <button
        className="px-4 py-2  border hover:bg-gray-200"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        hidden={currentPage === totalPages}
      >
        ›
      </button>
      <button
        className="px-4 py-2  border hover:bg-gray-200"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        hidden={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
