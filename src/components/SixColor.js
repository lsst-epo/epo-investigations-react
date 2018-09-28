import React, { Component } from 'react';

// CSS
import '../css/App.css';
import '../css/Widget.css';
 


// Semantic UI
import { Checkbox } from 'semantic-ui-react'


class SixColor extends Component {

  render() {


  	    return (
 
          <div className="widget container">

            <div className="row">
              <div className="col-4">
               <br></br>
                <h1 className="widget-title">Six Color Mixing Tool</h1>

                 <br></br>
                <div className="filter"  id="u_filter">
                  <Checkbox className="form-check-input" type="checkbox" onchange="check(this.parentNode.id)"/> <p className="filter_label"></p>
                  <input type="range" min="1.5" max="4" step=".01" value="1.92" className="range" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                   

                <div className="filter" id="g_filter">
                  <input className="form-check-input" type="checkbox" onchange="check(this.parentNode.id)" /> <p className="filter_label" ></p>
                  <input type="range" min=".5" max="2.5" step=".01" value="1.08" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div className="filter" id="r_filter" >
                  <input className="form-check-input" onchange="check(this.parentNode.id)" type="checkbox" /> <p className="filter_label"></p>
                  <input type="range" min="1" max="3" step=".01" value="1.45" className="range" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="filter" id="i_filter">
                  <input className="form-check-input" onchange="check(this.parentNode.id)" type="checkbox" /> <p className="filter_label"></p>
                  <input type="range" min=".5" max="1.5" step=".01" value=".52" className="range" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="filter" id="z_filter">
                  <input className="form-check-input " onchange="check(this.parentNode.id)" type="checkbox" /> <p className="filter_label"></p>
                  <input type="range" min=".4" max="1.6" step=".01" value=".375" className="range" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="filter" id="y_filter">
                  <input className="form-check-input " onchange="check(this.parentNode.id)" type="checkbox" /> <p className="filter_label"></p>
                  <input type="range" min="1" max="3.5" step=".01" value="1.25" className="range" onchange="update_slider(this.value, this.parentNode.id)" />
                  <select className="custom-select" aria-label="Color" onchange="color_picker(this.value, this.parentNode.id)">
                    <option value="" disabled selected>Color</option>
                    <option value="violet">Violet</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="col-8">
               
                  <div className="intro_filter"></div>
                  <div className="image_filter u_filter"></div>
                  <div className="image_filter g_filter"></div>
                  <div className="image_filter r_filter"></div>
                  <div className="image_filter i_filter"></div>
                  <div className="image_filter z_filter"></div>
                  <div className="image_filter y_filter"></div>
                          
            </div>
                 
            </div>
            <div className="row py-2">   
              <div className="col-4"></div>
              <div className="col-8">
               <button id="button" className="button" value="preset" name="preset" onchange="reset()" >Reset</button>
              <div className="input-group sticky input-container">
                  <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon" onchange="select(this.value)">
                    <option selected>Select a Filter</option>
                    <option value="m33">M33</option>
                    <option value="m63">M63</option>
                    <option value="2">M15</option>
                    <option value="3">M13</option>
                  </select>
                </div>
              </div>
          </div>
        </div>


    );
  }
}

export default SixColor;
