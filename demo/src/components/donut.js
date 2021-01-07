import React, { useEffect } from "react";
import * as d3 from 'd33';
import './StreamGraph.css';


function Donut(props) {

    useEffect(() => {
        var small = [
            {"label":"Phoenix Deer Valley Airport", "value":33260}, 
            {"label":"Falcon Field", "value":27651}, 
            {"label":"Scottsdale Airport", "value":20006}
        ];
        var medium = [
            {"label":"Centennial Airport", "value":21191}, 
            {"label":"Phoenix-Mesa-Gateway Airport", "value":19745}, 
            {"label":"Van Nuys Airport", "value":18428}
        ];
        var large =[
            {"label":"Chicago O'Hare International Airport", "value":55765}, 
            {"label":"Dallas Fort Worth International Airport", "value":52717}, 
            {"label":"Hartsfield Jackson Atlanta International Airport", "value":45781}
        ];
        var heliport = [
            {"label":"Tecma Heliport", "value":516}, 
            {"label":"Marathon Kotroni Navy Helicopter Base", "value":448}, 
            {"label":"Leeds Heliport", "value":79}
        ];
        var current, filterMode;
        const w = 400, h = 220, r = 70, color = d3.scale.category20();
        const svg = d3.select("#donut")
            .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .append("svg:g")
            .attr("transform", "translate(" + 150 + "," + r * 1.1 + ")");

        toggleChange('#small');
        change('#small');
        airports();

        // top 3 small airports - that are artive [having max number of flights]
        function airports() {
            var vis1 = svg.data([current]);
            
            var arc_small = d3.svg.arc()
                .innerRadius(35)
                .outerRadius(r);

            var arcOver = d3.svg.arc()
                .innerRadius(40)
                .outerRadius(r + 10);
            
            var pie = d3.layout.pie()
                .value(function(d) { return d.value; });
            
            var arcs = vis1.selectAll("g.slice_small")
                .data(pie)
                .enter()
                .append("svg:g")
                .attr("class", "slice_small")
                .on("mouseover", function(d) {
                    d3.select(this).select("path").transition()
                    .duration(100)
                    .attr("d", arcOver);
                    centerText1.text(
                        d3.select(this).datum().data.label + " - " +
                        d3.select(this).datum().data.value);
                    })
                .on("mouseout", function(d) {
                    d3.select(this).select("path").transition()
                    .duration(100)
                    .attr("d", arc_small);
                    centerText1.text( "" );
                });

            var centerText1 = vis1.append("text")
                .attr("dy", ".2em")
                .style("text-anchor", "middle")
                .style("stroke", "white")
                .style("font-size", "15px")

            arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } )
                .attr("d", arc_small);
        };
    
        // redraw function
        function redraw() {
            var vis1 = svg.data([current]);
            
            var arc_small = d3.svg.arc()
                .innerRadius(35)
                .outerRadius(r);

            var arcOver = d3.svg.arc()
                .innerRadius(40)
                .outerRadius(r + 10);
            
            var pie = d3.layout.pie()
                .value(function(d) { return d.value; });
            
            var arcs = vis1.selectAll("g.slice_small")
                .data(pie)
                .enter()
                .append("svg:g")
                .attr("class", "slice_small")
                .attr("d", arcOver);

            arcs.append("svg:path")
                .transition()
                .duration(750)
                .attr("fill", function(d, i) { return color(i); } )
                .attr("d", arc_small);
        }

        // add event listener for buttons
        d3.select('#small')
        .on('click', () => {
            change('#small');
            toggleChange('#small');

            redraw();
        });
        
        d3.select('#medium')
            .on('click', () => {
                change('#medium');
                toggleChange('#medium');

                redraw();
            });
        
        d3.select('#large')
            .on('click', () => {
                change('#large');
                toggleChange('#large');

                redraw();
            });
        
        d3.select('#heliport')
            .on('click', () => {
                change('#heliport');
                toggleChange('#heliport');

                redraw();
            });

        function change(mode) {
            if (mode === '#small') {
                current = small;
            } else if (mode === '#medium') {
                current = medium;
            } 
            else if (mode === '#large') {
                current = large;
            } else if (mode === '#heliport') {
                current = heliport;
            } 
            filterMode = mode;
        };

        function toggleChange(id) {
            d3.selectAll('.button')
                .style('background-color', '#eee');
            d3.select(id)
                .style('background-color', 'lightblue');
        };
    });


    return (
        <div className="donut-container">
            <div className="commands">
                <span className="button" id="small">Small Airports</span>
                <span className="button" id="medium">Medium Airports</span>
                <span className="button" id="large">Large Airports</span>
                <span className="button" id="heliport">Heliport</span>
            </div>
            <svg id="donut"></svg>
        </div>
    )
}   

export default Donut;
