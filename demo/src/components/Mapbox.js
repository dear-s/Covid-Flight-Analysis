import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'bootstrap/dist/css/bootstrap.min.css';
import turf from 'turf';
import '../App/App.css';
import September from "../data/Sep_Processed_Dictionary.json";
import nameident from "../data/name_ident_dict.json";

import latitudesdata from "../data/ident_lat_dict.json";
import longitudesdata from "../data/ident_lon_dict.json";
import {DropdownButton, Dropdown, Row, Col, Container} from 'react-bootstrap';
import airports from '../data/name_ident_dict.json';
import DropDownAirports from './DropDownAirports';
  
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FueWFzaW4iLCJhIjoiY2tocXZmbWtrMGRuNjJ4bWM4Y2k1cmhsZyJ9.lcdTffTyFYxWnbdzQEEw0Q';



//var datadict = {"January": January, "February": February, "March": March, "April": April, "May": May,"June": June, "July": July, "August": August, "September": September};

var map = "";


class Mapbox extends React.Component {
constructor(props) {
super(props);
this.state = {
lng: 5,
lat: 34,
month : "September",
airport : "KABQ",
airportnames: airports
};
this.handleChange = this.handleChange.bind(this);
this.handleAirportChange = this.handleAirportChange.bind(this);
}


handleChange(event) {
    //console.log(event);
    document.getElementById('monthName').innerText = event+" 2020";
    this.setState({month: event});
  }


  handleAirportChange(event) {
   // console.log(event);
    document.getElementById('airportName').innerText = nameident[event];
    this.setState({airport: event});
  }

 
componentDidMount() {

map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/satellite-v9',
        zoom:1.0
        });
     

var data = September;

//console.log(data);
var features =[];
var pointfeatures = [];
//for(var key in data){
var origin = [parseFloat(longitudesdata[this.state.airport]),parseFloat(latitudesdata[this.state.airport])];
var pointfeature = {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'Point',
        'coordinates': origin
        }
    };
    if(data[this.state.airport].length>0){
    for(var i=0;i < data[this.state.airport].length;i++){
    var destination = [data[this.state.airport][i][1],data[this.state.airport][i][0]];
    var feature = {'type': 'Feature',
    'geometry': {
    'type': 'LineString',
    'coordinates': [origin, destination]}};
    features.push(feature);
    pointfeatures.push(pointfeature);
    }
}

if(features.length>0 && pointfeatures.length>0){

document.getElementById('messageMapbox').innerText = "Number of outgoing flights: "+data[this.state.airport].length;

map.on('move', () => {
this.setState({
lng: map.getCenter().lng.toFixed(4),
lat: map.getCenter().lat.toFixed(4),
});
});

var route = {
    'type': 'FeatureCollection',
    'features': features
    };

    var point = {
        'type': 'FeatureCollection',
        'features': pointfeatures
        };

var steps = 100;

for(var k=0;k<route.features.length;k++){
    var lineDistance = turf.lineDistance(route.features[k], 'kilometers');
    var arc = [];

    for (i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[k], i, 'kilometers');
    arc.push(segment.geometry.coordinates);
    }
    route.features[k].geometry.coordinates = arc;
}
map.on('load', function () {
map.addSource('route', {
'type': 'geojson',
'data': route
});
 
map.addSource('point', {
'type': 'geojson',
'data': point
});
 
map.addLayer({
'id': 'route',
'source': 'route',
'type': 'line',
'paint': {
'line-width': 2,
'line-color': '#007cbf'
}
});
 
map.addLayer({
'id': 'point',
'source': 'point',
'type': 'symbol',
'layout': {
'icon-image': 'airport-11',
"icon-size":0.7,
'icon-rotate': ['get', 'bearing'],
'icon-rotation-alignment': 'map',
'icon-allow-overlap': true,
'icon-ignore-placement': true
}
});
});
}
else{
document.getElementById('messageMapbox').innerText = "No Data Available for the current selection!"
       
}
}

componentDidUpdate(){

var data =   September;

if( (data!==null && longitudesdata[this.state.airport]!==null && latitudesdata[this.state.airport]!==null && data[this.state.airport]!==null )
 || (data.length!==0 && data[this.state.airport].length!==0) ){


//console.log(data);
var features =[];
var pointfeatures = [];
//for(var key in data){
var origin = [parseFloat(longitudesdata[this.state.airport]),parseFloat(latitudesdata[this.state.airport])];
var pointfeature = {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'Point',
        'coordinates': origin
        }
    };
    if(data[this.state.airport].length>0){
    for(var i=0;i < data[this.state.airport].length;i++){
    var destination = [data[this.state.airport][i][1],data[this.state.airport][i][0]];
    var feature = {'type': 'Feature',
    'geometry': {
    'type': 'LineString',
    'coordinates': [origin, destination]}};
    features.push(feature);
    pointfeatures.push(pointfeature);
    }
}

if(features.length>0 && pointfeatures.length>0){
map.removeLayer('route');
map.removeLayer('point');

map.removeSource('route');
map.removeSource('point');

document.getElementById('messageMapbox').innerText = "Number of outgoing flights: "+data[this.state.airport].length;
var route = {
    'type': 'FeatureCollection',
    'features': features
    };

    var point = {
        'type': 'FeatureCollection',
        'features': pointfeatures
        };

var steps = 100;

for(var k=0;k<route.features.length;k++){
    var lineDistance = turf.lineDistance(route.features[k], 'kilometers');
    var arc = [];

    for (i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[k], i, 'kilometers');
    arc.push(segment.geometry.coordinates);
    }
    route.features[k].geometry.coordinates = arc;
}

map.addSource('route', {
'type': 'geojson',
'data': route
});
 
map.addSource('point', {
'type': 'geojson',
'data': point
});
 
map.addLayer({
'id': 'route',
'source': 'route',
'type': 'line',
'paint': {
'line-width': 2,
'line-color': '#007cbf'
}
});
 
map.addLayer({
'id': 'point',
'source': 'point',
'type': 'symbol',
'layout': {
'icon-image': 'airport-11',
"icon-size":0.7,
'icon-rotate': ['get', 'bearing'],
'icon-rotation-alignment': 'map',
'icon-allow-overlap': true,
'icon-ignore-placement': true
}
});


}

else{
 document.getElementById('messageMapbox').innerText = "No Data Available for the current selection!"
} 
}
}

 
render() {
return (
<Container fluid>
<h2 id="heading">USA - Airport Activity</h2>
<Row>
<Col id="month_airport" className="justify-content-md-center">
<Row>
<DropDownAirports airportChange ={this.handleAirportChange}/>
</Row>
<Row>
<p id="airportName">
Albuquerque International Sunport        
</p>
</Row>
    <Row>    
    <p id="monthName">
    September 2020    
    </p>
    </Row>
    <Row>
        <p id="messageMapbox"></p>
    </Row>

</Col>
<Col className="justify-content-md-center">
<div id="mapbox" ref={el => this.mapContainer = el} className='mapContainer' />
</Col>

</Row>
</Container>


)
}
}
 
export default Mapbox;