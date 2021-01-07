import '../App/App.css';
import React, {useRef, useEffect} from "react";
import {select, scaleOrdinal, scaleLinear, scalePoint, schemeSet3, scaleBand, json, ascending, descending, max, axisBottom, axisLeft, selectAll } from "d3";
import data from '../data/nodes.json';
import linedata from '../data/linedata.json';
import {Row, Container, Col} from 'react-bootstrap';


function TransitionBarCharts(props) {

useEffect(() => {
  const svg = select('#charttransition');
  //console.log(svg);
  svg.selectAll("*").remove();
  var month = props.month;
  
  var margin = { top: 20, left: 75, bottom: 50, right: 50 },
  width = 700 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

 svg
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')

  
  var x = scaleBand();
  var y = scaleLinear();
  
  var delay = function (d, i) {
  return i * 50;
  };
  
  var all, top5, bot5;
  // var 
  var current;
  
 
  all = data[month].nodes;
  toggleSort('#reset');
  draw();
  
  var current=[];
  
  
  for(var i =0 ;i <all.length;i++){
      current.push(all[i])
  }
  
  current.sort((a, b) => ascending(a.covidcases, b.covidcases));
  //console.log(current);
  bot5 = current.slice(0,5);
  
  top5 = current.slice(current.length-5,current.length);
  
  //console.log(top5,bot5);
  
  //sort event handlers
  select('#sort')
  .on('change', () => {
      sort(document.getElementById("sort").value,document.getElementById("value1").value,document.getElementById("filter").value);
      transition();
      //toggleSort('#descending');
  });
  
  
  select('#filter')
  .on('change', () => {
      sort(document.getElementById("sort").value,document.getElementById("value1").value,document.getElementById("filter").value);
      //transition();
      
      //toggleSort('#descending');
  });
  
  
  select('#value1')
  .on('change', () => {
      sort(document.getElementById("sort").value,document.getElementById("value1").value,document.getElementById("filter").value);
      transition();
      //toggleSort('#descending');
  });
  
  select('#reset')
  .on('click', () => {
      sort('ascending','continent','all');
      //transition();
      //toggleSort('#descending');
      document.getElementById("sort").value="ascending";
      document.getElementById("value1").value ="continent";
      document.getElementById("filter").value="all";
  });
  
  function sort(sort,value,filter) {
  //console.log(sort,value,filter);
  if (filter=='all'){
  if (sort === 'ascending' && value === 'continent') {
      all.sort((a, b) => ascending(a.continent, b.continent));
  } else if (sort === 'ascending' && value === 'covidcases') {
      all.sort((a, b) => ascending(a.covidcases, b.covidcases));
  } else if (sort === 'descending' && value === 'continent') {
      all.sort((a, b) => descending(a.continent, b.continent));
  }
  else if (sort === 'descending' && value === 'covidcases') {
      all.sort((a, b) => descending(a.covidcases, b.covidcases));
  }
  x.domain(all.map(d => d.continent));
  redraw(all);
  }
  else if(filter=='top5'){
  if (sort === 'ascending' && value === 'continent') {
      top5.sort((a, b) => ascending(a.continent, b.continent));
  } else if (sort === 'ascending' && value === 'covidcases') {
      top5.sort((a, b) => ascending(a.covidcases, b.covidcases));
  } else if (sort === 'descending' && value === 'continent') {
      top5.sort((a, b) => descending(a.continent, b.continent));
  }
  else if (sort === 'descending' && value === 'covidcases') {
      top5.sort((a, b) => descending(a.covidcases, b.covidcases));
  }
  redraw(top5);
  }
  else if(filter=='bottom5'){
      if (sort === 'ascending' && value === 'continent') {
          bot5.sort((a, b) => ascending(a.continent, b.continent));
      } else if (sort === 'ascending' && value === 'covidcases') {
          bot5.sort((a, b) => ascending(a.covidcases, b.covidcases));
      } else if (sort === 'descending' && value === 'continent') {
          bot5.sort((a, b) => descending(a.continent, b.continent));
      }
      else if (sort === 'descending' && value === 'covidcases') {
          bot5.sort((a, b) => descending(a.covidcases, b.covidcases));
      }
  redraw(bot5);
  }
}
  
  
  
  function toggleSort(id) {
      selectAll('.sort')
          .style('background-color', '#eee');
      select(id)
          .style('background-color', 'lightseagreen');
  }
  
  
  function redraw(current) {
  //update scale
  //console.log(current);
  x.domain(current.map(d => d.continent));
  
  
  //console.log(current,height,d3.max(current, function (d) { return d.covidcases; }));
  
  var bars = svg.selectAll('.bar')
      .data(current, d => d.continent);
  
  // UPDATE.
  bars.transition()
      .duration(750)
      .delay(delay)
      .attr('x', d => x(d.continent))
      .attr('width', x.bandwidth());
  
  bars.exit()
      .transition()  
      .duration(750)  
      .style('opacity', 0)  
      .remove(); 
  
  // ENTER.
  bars.enter()
      .append('rect')
      .attr('x', d => x(d.continent))  
      .attr('y', d => y(0))  
      .attr('width', x.bandwidth()) 
      .transition()  
      .duration(750)  
      .attr('class', 'bar') 
      .attr('x', d => x(d.continent))  
      .attr('y', d => y(d.covidcases))  
      .attr('width', x.bandwidth())  
      .attr('height', d => height - y(d.covidcases));  
  
  // EXIT.
  
  
  var name = svg.selectAll('.name')
      .data(current, d => d.continent);
  
  // UPDATE.
  name.transition()
      .duration(750)
      .delay(delay)
      .attr('x', (d, i) => x(d.continent) + x.bandwidth() / 2);
  
  // ENTER.
  name.enter()
      .append('text')
      .attr('x', d => x(d.continent) + x.bandwidth() / 2)
      .attr('y', d => y(d.covidcases) + (height - y(d.covidcases)) / 2)
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .text(d => d.continent)
      .attr('class', 'name')
      .attr('x', d => x(d.continent) + x.bandwidth() / 2)
      .attr('y', d => y(d.covidcases) + (height - y(d.covidcases)) / 2)
      .style('opacity', 1);
  
  // EXIT.
  name.exit()
      .transition()
      .duration(750)
      .style('opacity', -1)
      .remove();
  }
  
  function transition() {
  var transition = svg.transition()
      .duration(750);
  
  transition.selectAll('.bar')
      .delay(delay)
      .attr('x', d => x(d.continent));
  
  transition.selectAll('.name')
      .delay(delay)
      .attr('x', d => x(d.continent) + x.bandwidth() / 2);
  }
  
  
function draw() {
  x.domain(all.map(d => d.continent))
      .range([0, width])
      .padding(0.2);
  //console.log(all,height,max(all, function (d) { return d.covidcases; }));
  //console.log(svg);
  y.domain([0, max(all, d => d.covidcases)])
      .range([height,0]);
  
  svg.selectAll('.bar')
      .data(all, d => d.continent)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.continent))
      .attr('y', d => y(d.covidcases))
      .attr('width', x.bandwidth())
      .attr('transform', 'translate(70)')
      .attr('height', d => height - y(d.covidcases));
  
  svg.selectAll('.name')
      .data(all, d => d.continent)
      .enter()
      .append('text')
      .text(d => d.continent)
      .attr('transform', 'translate(50)')
      .attr('class', 'name')
      .attr("fill", "white")
      .attr('x', d => x(d.continent) + x.bandwidth() / 2)
      .attr('y', d => y(d.covidcases) + (height - y(d.covidcases)) / 2);
  
  var xAxis;
  xAxis = axisBottom()
      .scale(x)
      .ticks(0)
      .tickSize(10,0)
      .tickFormat('');
  
  svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(70,' + height + ')')
      .call(xAxis);
  
  
  var yAxis = axisLeft()
      .scale(y)
      .ticks(10, 'd');
  
  svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(70)')
      .call(yAxis);
  
  svg.append("text")  //create and place labels
      .attr("x", 250)
      .attr("y", 470)
      .classed('label', true)
      .text("Continents")
      .attr("fill", "white")
      .style('baseline-shift', 'super')
      .style('font-size', '1.1em');
  
  
  svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 0 - (margin.top / 2))
          .attr("text-anchor", "middle")  
          .style("font-size", "16px") 
          .style("text-decoration", "underline")  
          .text("Share covidcases Indices for the year 2019");
  
  
  svg.append('text')
      .attr('x', - height / 2)
      .attr('y', - margin.left * 0.7)
      .attr('transform', 'rotate(-90)')
      .attr('class', 'ylabel')
      .append('tspan').text('Share covidcases Index')
      .style('baseline-shift', 'super')
      .style('font-size', '1.4em')
}

});

  return (
    <Container fluid>
    <p style={{color: "white"}}>The below bar graph is a transition graph that let's us check the number of covid cases per continent</p>
    <Row className="justify-content-md-center">
    <span className="reset" id="reset">Reset</span>
    <Col id="forsorting">
      <label style={{color:"white"}}>Sort:</label>
      <select name="sort" id="sort">
      <option value="ascending" defaultValue>ascending</option>
      <option value="descending">descending</option>
      </select>
    </Col>
    <Col id="forfilter">
    <label style={{color:"white"}}>Filter(by value):</label>
    <select name="filter" id="filter">
    <option value="all" defaultValue>All</option>
    <option value="top5" >Top 5</option>
    <option value="bottom5">Bottom 5</option>
    </select>
    </Col>
    <Col id="forvalue">
    <label style={{color:"white"}}>Value:</label>
    <select name="value1" id="value1">
    <option value="continent" defaultValue>continent</option>
    <option value="covidcases">covidcases</option></select>
    </Col>
    </Row>
    <svg id="charttransition"></svg>
    </Container>
  );
}

export default TransitionBarCharts;
