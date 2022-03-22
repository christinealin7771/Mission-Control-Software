import React from 'react';
import './App.css';
import {CssBaseline, Grid} from '@material-ui/core';

import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import Graphs from './components/Graphs';
=======
import Graphs from './components/graphs/Graphs'
import Sidebar from './components/sidebar/Sidebar';

>>>>>>> main
import Maps from './components/map/Maps';
import Map from './components/map/Map';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
          <Route path="/graphs" element={<Graphs/>}></Route>
          {/* <Route path="/map" element={<Map/>}></Route> */}
          <Route path="/" element={
            <Grid container spacing={4} style  ={{width: '100%'}, {height:'100%'}}>
              <Grid item xs={12} md={10}>
                <Map/>
              </Grid>

            </Grid>
            // <Maps/>
          }></Route>
          </Routes>
        <Footer/>
      </Router>
     
    </div>
    
  );
}

export default App;
