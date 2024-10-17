import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar agora está fora das rotas para aparecer em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota para a Home */}
        <Route path="/products" element={<Products />} /> {/* Rota para a página de produtos */}
      </Routes>
    </Router>
  );
};

export default App;