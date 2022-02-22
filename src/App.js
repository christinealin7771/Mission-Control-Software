import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Graphs from './components/Graphs';
import './assets/lovelyChristineLin.jpg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        Hello! Here is a lovely picture of Christine Lin as place holder for yall! 
        <br/>
        <img src='https://media-exp1.licdn.com/dms/image/C4D03AQGkvpt9zXecTA/profile-displayphoto-shrink_200_200/0/1602626520962?e=1649894400&v=beta&t=EYqxA6tpD-baPRPR_xZa8FbpSHLjThxFynO6HihJ82A'></img>
          <Routes>
          <Route path="/graphs" element={<Graphs/>}></Route>
          </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
