import React from 'react';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/NavBar';
import TravelCard from './components/TravelCard';


function App() {
  //need to fetch API to pass from Parent to Child component.
  return (
    <><><><div>
      <Navigation />
    </div><div className='card-container'>
        <TravelCard title='Colorado' />
        <TravelCard title='Vegas'/>
      </div></><div className='card-container'>
        <TravelCard title='Mexico' />
        <TravelCard title='England' />
      </div></><div className='card-container'>
        <TravelCard title='Germany' />
        <TravelCard title='France'/>
      </div></>
  )

}

export default App;
