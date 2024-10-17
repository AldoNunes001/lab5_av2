import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner'; // Importa o Banner

const Home = () => {
  return (
    <div>
      {/* <Navbar /> Renderiza a Navbar */}
      
      {/* Carrossel de Promoções */}
      <Banner />

      <Footer /> {/* Renderiza o Footer */}
    </div>
  );
};

export default Home;