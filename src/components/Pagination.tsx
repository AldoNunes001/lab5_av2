
interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [];

  // Gerar um array de números de páginas
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-8 flex justify-center space-x-2">
      {pages.map(page => (
        <button
          key={page}
          className={`px-4 py-2 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded-md hover:bg-gray-400`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;