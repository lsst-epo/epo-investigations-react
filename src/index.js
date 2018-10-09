import ReactDOM from 'react-dom';
import App from './FormalEd/ColoringTheUniverse/App';
import MilkyWay from './FormalEd/MilkyWay/App'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

render((
	<BrowserRouter>
				<div>
				<Switch>
					<Route exact path='/' component={App} />
					<Route path='/coloring-the-universe' component={App} />
					<Route path='/mapping-the-milky-way' component={MilkyWay} />
				</Switch>	
				</div>	
			</BrowserRouter>
), document.getElementById('root'));
