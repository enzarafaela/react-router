import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-title">
        <h1>Coffeeteria</h1>
        <h2></h2>
      </div>

      <main>
        <p>Cafés especiais, nacionais e importados.</p>
        <button onClick={ () => navigate('/coffees', { state: { name: 'Rafaela'}}) }>Conheça nossos produtos</button>
      </main>
    </div>
  );
}
  
export default Home;