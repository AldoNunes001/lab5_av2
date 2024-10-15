
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Store Front</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Produtos</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;