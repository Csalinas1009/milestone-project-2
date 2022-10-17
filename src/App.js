import React from 'react';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/NavBar';
import TravelCard from './components/TravelCard';
function App() {
  return (
    <><><><div>
      <Navigation />
    </div><div className='card-container'>
        <TravelCard />
        <TravelCard />
      </div></><div className='card-container'>
        <TravelCard />
        <TravelCard />
      </div></><div className='card-container'>
        <TravelCard />
        <TravelCard />
      </div></>
  )

}

export default App;
