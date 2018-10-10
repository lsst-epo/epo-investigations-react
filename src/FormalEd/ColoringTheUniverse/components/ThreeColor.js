import React, { Component } from 'react';

// Main CSS
import '../../../index.css';

// Widget CSS
import '../css/App.css';

// Semantic UI

class ThreeColor extends Component {
  constructor(props) {
    super(props);
    this.state = { class: '' };
  }
  render() {
    return (
      <div className="widget container">
        <div className="row" style={{ height: '66vh' }}>
          <div className="col-4">
            <h1 className="widget-title">RGB Color Mixing Tool</h1>
            <br />
            <div className="filter" id="red_filter">
              <input
                className="form-check-input"
                type="checkbox"
                onchange="check(this.parentNode.id)"
              />{' '}
              Red
              <input
                type="range"
                min=".7"
                max="1.5"
                step=".01"
                value=".9"
                className="range"
                onchange="update_slider(this.value, this.parentNode.id)"
              />
              <select
                className="custom-select"
                id="red_select"
                aria-label="Color"
                onchange="color_picker(this.value, this.parentNode.id)"
              >
                <option value="" disabled selected>
                  Color
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="filter" id="green_filter">
              <input
                className="form-check-input"
                type="checkbox"
                onchange="check(this.parentNode.id)"
              />{' '}
              Green
              <input
                type="range"
                min=".7"
                max="2"
                step=".01"
                value="1.41"
                onchange="update_slider(this.value, this.parentNode.id)"
              />
              <select
                className="custom-select"
                id="green_select"
                aria-label="Color"
                onchange="color_picker(this.value, this.parentNode.id)"
              >
                <option value="" disabled selected>
                  Color
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="none">None</option>
              </select>
            </div>

            <div className="filter" id="blue_filter">
              <input
                className="form-check-input"
                type="checkbox"
                onchange="check(this.parentNode.id)"
              />{' '}
              Blue
              <input
                type="range"
                min=".7"
                max="1.5"
                step=".01"
                value=".83"
                className="range"
                onchange="update_slider(this.value, this.parentNode.id)"
              />
              <select
                className="custom-select"
                onchange="color_picker(this.value, this.parentNode.id)"
              >
                <option value="" disabled selected>
                  Color
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="col-8">
            <div>
              <div className="intro_filter" />
              <div className="blue_filter" />
              <div className="green_filter" />
              <div className="red_filter" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-4" />
          <div className="col-8">
            <button id="button" className="button" value="preset" name="preset">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeColor;
