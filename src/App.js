import React from 'react';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/NavBar';
import TravelCard from './components/TravelCard';
function App() {
  return (
    <><div className='NB'>
      <Navigation />
    </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <TravelCard />
          </div>
          <div className='col'>
            <TravelCard />
          </div>
          <div className='row'>
            <div className='col'>
              <TravelCard />
            </div>
            <div className='col'>
              <TravelCard />
            </div>
          </div>
        </div>


      </div></>

  )

}

export default App;
