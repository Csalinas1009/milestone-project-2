import React from "react";
import Navigation from "../components/NavBar";
import "../styles/styles.css";
import AboutIan from "../components/AboutIan";
import AboutAar from "../components/AboutAar";
import AboutGio from "../components/AboutGio";
import AboutChris from "../components/AboutChris";

function About() {
  return (
    <>
      <>
        <div className="NB">
          <Navigation></Navigation>
        </div>
        <>
          <div className="AbPage">
            <>
              <div className="about">
                <div className="title">
                  <h2>About</h2>
                </div>
                <p>
                  This is a sample app created by Ian Aberbach, Christian
                  Salinas, Aaron Everette, and Giovanni Peres. The function of
                  this app is to upload and post travel reviews. We utilized
                  MERN to create this application.
                </p>
              </div>
            </>
            <div className="group">
              <h1>Meet The Team</h1>
              <div className="titles">
                <h2>Frontend Developers</h2>
              </div>
              <div className="group1">
                <AboutIan></AboutIan>
                <AboutChris></AboutChris>
              </div>
              <div className="titles">
                <h2>Backend Developers</h2>
              </div>
              <div className="group2">
                <AboutGio></AboutGio>
                <AboutAar></AboutAar>
              </div>
            </div>
          </div>
        </>
      </>
    </>
  );
}

export default About;
