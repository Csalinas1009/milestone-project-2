import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import TravelCard from './components/TravelCard';

function App() {
  return (
      <><div className='NavBar'>
      <NavBar />
    </div><div>
        <TravelCard />
      </div></>
    

)
}

export default App;
