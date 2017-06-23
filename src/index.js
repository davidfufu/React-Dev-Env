import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Greeting from './containers/Root'

var destination = document.querySelector("#root");

class MainComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			exampleKey: "In 6 months, there will be another front-end JS framework. :^)"
		}
		this.customMethod = this.customMethod.bind(this)
	}
	customMethod() {
		console.log(this.state);
	}
	render() {
		return(
		<div>
			{this.state.exampleKey}
		</div>

		);
	}
}

ReactDOM.render(
	<div>
		<Greeting name="World"/>
		<MainComponent/>
	</div>
	,
	destination
);

if (module.hot) {
	module.hot.accept('./containers/Root', () => { render(Root) })
}
