import React, { Component } from 'react';


// Main CSS
import '../../../index.css';

// Widget CSS
import '../css/App.css';
 

// Semantic UI
import { Form, Radio } from 'semantic-ui-react'



class Prism extends Component {
	constructor(props) {
		super(props);
	 	this.state = {'class':'lens camera-filter'}
	}
  	
  	handleChange = (e, { value }) => {
  	 	this.setState({value, 'class':'lens camera-filter camera-filter-active'});
  	 }



  render() {
  	  

    return (

// I have to figure out how to get the classname to change when I click 
        <div className="content-wrapper">
          <div className="prism-shape">
            <div className="white-streak"></div>
            <div className="prism-clip-wrapper">
              <div className="prism-wrapper">
                <div className="prism-items">
              	<div className={'prism-colors', this.state.value == 'red' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={'prism-colors', this.state.value == 'orange' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={'prism-colors', this.state.value == 'yellow' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={'prism-colors', this.state.value == 'green' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={'prism-colors', this.state.value == 'blue' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={'prism-colors', this.state.value == 'violet' ? 'long prism-colors' : 'prism-colors '}></div>
                  <div className={this.state.class} style={{background: this.state.value}}></div>
                </div>
              </div>
            </div>
          </div>

        <Form>
      
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Red'
            name='radioGroup'
            value='red'
            checked={this.state.value === 'red'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Orange'
            name='radioGroup'
            value='orange'
            checked={this.state.value === 'orange'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Yellow'
            name='radioGroup'
            value='yellow'
            checked={this.state.value === 'yellow'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Green'
            name='radioGroup'
            value='green'
            checked={this.state.value === 'green'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Blue'
            name='radioGroup'
            value='blue'
            checked={this.state.value === 'blue'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio className={'prism-radio'}
            label='Violet'
            name='radioGroup'
            value='violet'
            checked={this.state.value === 'violet'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
      <br></br>
    
        </div>


    );
  }
}

export default Prism;
