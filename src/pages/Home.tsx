import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Certifique-se de ter o componente ProductCard

interface Product {
  id: number;
  title: string;
  description: string;
  unit_price: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  // Função para buscar produtos de uma URL específica (para lidar com a paginação)
  const fetchProducts = (url: string) => {
    axios.get(url)
      .then(response => {
        console.log('Dados da API:', response.data);  // Verifique os dados no console
        setProducts(response.data.results);  // Atualiza o estado com os produtos da página
        setNextPage(response.data.next);  // Link para a próxima página
        setPreviousPage(response.data.previous);  // Link para a página anterior
        setLoading(false);  // Desativa o estado de carregamento
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);  // Log do erro no console
        setError('Erro ao buscar produtos');
        setLoading(false);
      });
  };

  // O useEffect inicial busca os produtos da primeira página
  useEffect(() => {
    fetchProducts('http://127.0.0.1:8000/store/products/');
  }, []);

  // Se estiver carregando, exibe a mensagem de carregamento
  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  // Se houver um erro, exibe a mensagem de erro
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Paginação: Botões para navegar entre páginas */}
      <div className="flex justify-between mt-6">
        {previousPage && (
          <button
            onClick={() => fetchProducts(previousPage)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Página Anterior
          </button>
        )}
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

export default Home;