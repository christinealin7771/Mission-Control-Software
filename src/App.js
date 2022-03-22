import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Graphs from './components/graphs/Graphs'
import Sidebar from './components/sidebar/Sidebar';

import Maps from './components/map/Maps';
import Map from './components/map/Map';
import LeafletMap from './components/map/LeafletMap';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Sidebar/>
        <Header/>
          <Routes>
          <Route path="/graphs" element={<Graphs/>}></Route>
        
          <Route path="/" element={
            <Grid container spacing={4} style  ={{width: '100%'}, {height:'100%'}}>
              <Grid item xs={12} md={10}>
                <LeafletMap/>
              </Grid>
              
            </Grid>
            // <Maps/>
          }>
          </Route>
          </Routes>
        
        <Footer/>
      </Router>

     
    </div>
  );
}

export default App;
