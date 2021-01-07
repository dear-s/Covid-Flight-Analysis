import { hot } from 'react-hot-loader/root';
import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom'; 
import './App.css';
import Region from '../components/Region';
import Map from '../components/Map';
import HomePage from './document';
import './style.css';
import Mapbox from '../components/Mapbox';
import Sanya from '../components/SanyaDashboard';



function App() {
  return (
      <div>
        <Switch> 
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/map">
            <div className="white-background">
              <Map/>
            </div>
          </Route>
          <Route path="/region">
            
            <Region />
          </Route>
          <Route path="/airports">
            <Sanya />
          </Route>
          
          <Route path="/mapboxgl">
            <Mapbox />
          </Route>
        </Switch> 
      </div> 
  );
}

export default hot(App);
