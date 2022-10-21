import React from 'react';
import { useState, useEffect } from 'react';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import TravelCard from './components/TravelCard'
import Navigation from './components/NavBar';


function App() {
  //useState hook for setting up our cards
  const [pins, setPins] = useState([]);

  useEffect(() => {
    //get request from back-end database
    Axios.get('https://milestone2-travlr.herokuapp.com/pin').then((response) => {
      setPins(response.data)
    })
  }, []);



  //render to page
  return (
    <div className='NB'>
      <Navigation />
      <div>
        {pins && pins.map((pin) => {
          return (
            <div className='card-container'>
              <TravelCard
                pin={pin}
              />
            </div>
          );
        })}
      </div>
    </div>
  )



}

export default App;
