import React, { Component } from 'react';
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
        // destructuring values 
        let { tbody,thead } = this.refs
        // head should scroll with body
        thead.style.left =  - tbody.scrollLeft + 'px'
        
        let td_left = 'translate3d(' + tbody.scrollLeft + 'px,0,0)';
        // Fix every first td in every tr in tbody 
        tbody.querySelectorAll('tr > td:first-child')
          .forEach(function(td) {
            td.style.transform = td_left;
          });
        // Fix every second td in every tr in tbody with class
        tbody.querySelectorAll('.second')
        .forEach(function(td) {
            td.style.transform = td_left;
        });
        // Fix every first two th in every tr in thead with class 
        thead.querySelectorAll('.fixed_head')
        .forEach(function(td) {
            td.style.left = tbody.scrollLeft + 'px';
        });
    }

    render_data(){
        return arr.map((item) => <Row key={item} />)
    }

    render(){
        return(
            <table>
                <thead ref="thead">
                  <tr>
                    <th className="fixed_head">OMR ID</th>
                    <th className="border fixed_head">Student Name</th>
                    <th >Campus</th>
                    <th className="border">Section</th>
                    <th colSpan="3" className="border">Physics (120)</th>
                    <th colSpan="3" className="border">Chemistry (120)</th>
                    <th colSpan="3" className="border">Maths (120)</th>
                    <th colSpan="3" className="border">Total (360)</th>
                  </tr>
                  <tr className="sub_header">
                    <th className="fixed_head"></th>
                    <th className="border fixed_head"></th>
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
                <tbody onScroll = {() => { this.scrolling_func() }} ref="tbody">
                  {this.render_data()}
                </tbody>
              </table>
        )
    }
}

export default App;




