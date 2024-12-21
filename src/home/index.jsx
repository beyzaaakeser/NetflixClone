import Featured from '../components/featured';
import Navbar from '../components/navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Movie" />
    </div>
  );
};

export default Home;
