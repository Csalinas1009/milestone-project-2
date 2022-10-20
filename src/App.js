import React from 'react';
import { useState, useEffect } from 'react';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import TravelCard from './components/TravelCard'
import Navigation from './components/NavBar';


function App() {
  //useState hook for setting up our cards
  const [cardData, setCardData] = useState([]);

useEffect(()=>{
  //fetch request using a sample API right now before I get the real API from back-end//
    Axios.get('https://api.sampleapis.com/futurama/characters').then((response) =>{
      setCardData(response.data)
      console.log(setCardData)
    })
}, []);

//render to page
return(
  <div className='NB'>
      <Navigation/>   
    <div>
        {cardData.map((cards)=>{
              return(
                <div className='card-container'>
                  <TravelCard
                    key={cards.id}
                    Title={cards.gender}
                    Text={cards.sayings[0]}
                     />
                </div>
              );
        })}
      </div>
  </div> 
)  



}

export default App;
