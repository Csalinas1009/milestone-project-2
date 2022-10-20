import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Pages/About';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/About' element={<About/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
