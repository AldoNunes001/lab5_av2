import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination'; // Novo componente

interface Product {
  id: number;
  title: string;
  description: string;
  unit_price: number;
  image_url: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const fetchProducts = (url: string) => {
    axios.get(url)
      .then(response => {
        setProducts(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
        setError('Erro ao buscar produtos');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts('http://127.0.0.1:8000/store/products/');
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {/* <Navbar /> Navbar */}
      
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

        {/* Pagination */}
        <Pagination
          previousPage={previousPage}
          nextPage={nextPage}
          fetchProducts={fetchProducts}
        />
      </div>
      
      <Footer /> {/* Footer */}
    </div>
  );
};

export default Home;