
interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    unit_price: number;
    image_url: string;  // Certifique-se de ter o campo de imagem
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image_url || 'https://via.placeholder.com/150'} // Imagem do produto ou placeholder
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-800 font-bold">R$ {product.unit_price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;