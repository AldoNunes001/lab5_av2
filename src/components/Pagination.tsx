
interface PaginationProps {
  previousPage: string | null;
  nextPage: string | null;
  fetchProducts: (url: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({ previousPage, nextPage, fetchProducts }) => {
  return (
    <div className="flex justify-between mt-6 mb-8">
      <div>
        {previousPage && (
          <button
            onClick={() => fetchProducts(previousPage)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Página Anterior
          </button>
        )}
      </div>
      <div>
        {nextPage && (
          <button
            onClick={() => fetchProducts(nextPage)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Próxima Página
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;