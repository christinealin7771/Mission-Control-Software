import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Graphs from './components/Graphs';
import Sidebar from './components/sidebar/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Header/>
        Hello
          <Routes>
          <Route path="/graphs" element={<Graphs/>}></Route>
          </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
