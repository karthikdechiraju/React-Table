import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import Row from './ListComponent.js'

const arr = []

class App extends Component {
    componentWillMount(){
        for (var i = 0; i < 400; i++) {
            arr.push(i)
        }
    }
    
    scrolling_func(){
        $('thead').css("left", -$("tbody").scrollLeft());
        $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); 
        $('thead th:nth-child(2)').css("left", $("tbody").scrollLeft()); 
        $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()); 
        $('tbody td:nth-child(2)').css("left", $("tbody").scrollLeft()); 
        
        // var table = document.querySelector("table");
        // var tbody = document.querySelector("tbody");
        // var thead = document.querySelector("thead");

        // thead.style.left = - tbody.scrollLeft + 'px';
        // first.style.left = tbody.scrollLeft + 'px'; 
        // for (var i = 0; i < table.rows.length; i++) {
        //    var firstCol = table.rows[i].cells[0]; 
        //    var secondCol = table.rows[i].cells[1];
        //    firstCol.style.left = tbody.scrollLeft + 'px'; 
        //    secondCol.style.left = tbody.scrollLeft + 'px';
        // }
    }

    render_data(){
        return arr.map((item) => <Row key={item} />)
    }

    render(){
        return(
            <table>
                <thead>
                  <tr>
                    <th>OMR ID</th>
                    <th className="border">Student Name</th>
                    <th>Campus</th>
                    <th className="border">Section</th>
                    <th colSpan="3" className="border">Physics (120)</th>
                    <th colSpan="3" className="border">Chemistry (120)</th>
                    <th colSpan="3" className="border">Maths (120)</th>
                    <th colSpan="3" className="border">Total (360)</th>
                  </tr>
                  <tr className="sub_header">
                    <th></th>
                    <th className="border"></th>
                    <th></th>
                    <th className="border"></th>
                    <th >Marks</th>
                    <th >%</th>
                    <th className="border">Rank</th>
                    <th >Marks</th>
                    <th >%</th>
                    <th className="border">Rank</th>
                    <th >Marks</th>
                    <th >%</th>
                    <th className="border">Rank</th>
                    <th >Marks</th>
                    <th >SR</th>
                    <th >AIR</th>
                  </tr>
                </thead>
                <tbody onScroll = {() => { this.scrolling_func() }}>
                  {this.render_data()}
                </tbody>
              </table>
        )
    }
}

export default App;
