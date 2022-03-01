import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';




import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Graphs from './components/Graphs';
import Maps from './components/map/Maps';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path="/graphs" element={<Graphs/>}></Route>
          <Route path="/" element={
            <Grid container spacing={3} style  ={{width: '100%'}}>
              <Grid item xs={12} md={8}>
                <Maps/>
              </Grid>
            </Grid>
          }>
          </Route>
          </Routes>
        
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
