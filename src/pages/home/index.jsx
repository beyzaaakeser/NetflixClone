import Featured from '../../components/featured';
import Footer from '../../components/footer';
import List from '../../components/list';
import Navbar from '../../components/navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <Footer />
    </div>
  );
};

export default Home;
