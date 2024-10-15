// src/pages/Home.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const allProducts = [
  { id: 1, name: 'Produto 1', price: '$20.00', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Produto 2', price: '$30.00', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Produto 3', price: '$40.00', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Produto 4', price: '$50.00', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Produto 5', price: '$60.00', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Produto 6', price: '$70.00', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Produto 7', price: '$80.00', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Produto 8', price: '$90.00', image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Produto 9', price: '$100.00', image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Produto 10', price: '$110.00', image: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Produto 11', price: '$120.00', image: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Produto 12', price: '$130.00', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;  // Mostrar 10 produtos por página

  // Calcular produtos da página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-1 py-8">
        <h2 className="text-3xl font-bold mb-6">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          totalProducts={allProducts.length}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;