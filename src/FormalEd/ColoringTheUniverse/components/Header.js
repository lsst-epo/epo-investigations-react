import React, { Component } from 'react';

// Main CSS
import '../../../index.css';

// Images
import Rocket from '../assets/images/rocket.svg'
import Earth from '../assets/images/earth.svg'
import Moon from '../assets/images/moon.svg'
import Astronaut from '../assets/images/astronaut.svg'
 

class Header extends Component {
  render() {
    return ( 

 <div className="bg-blue">
      
      <div className="stars">
        <div className="custom-navbar">
          <div className="brand-logo">
            <h2>LSST</h2>
          </div>
          <div className="navbar-links">
            <ul>
              <li><button className="hamburger">&#9776;</button></li>
            </ul>
          </div>
        </div>
        <div className="central-body">
          <h1>Coloring the universe</h1>
          <div className="arrow arrow-first"></div>
        </div>
        <div className="objects">
          <img className="object_rocket" src={Rocket} width="40px" />
          <div className="earth-moon">
            <img className="object_earth" src={Earth} width="100px" />
            <img className="object_moon" src={Moon} width="80px" />
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src={Astronaut} width="140px" />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
</div>

    );
  }
}

export default Header;