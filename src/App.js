import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TravelCard from "./components/TravelCard";
import React from "react";
import Navigation from "./components/NavBar";

function App() {
  return (
      <><div className="NB">
      <Navigation />
    </div>
    <div className="TravelCardDiv">
        <TravelCard />
      </div></>
  );
}

export default App;
