import React, { Component } from  'react' ;
import './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div className="clearfix">
				<h1 className="title">Exhibitors</h1>

		
				<div className="buttons">
					<button>Cancel</button>
					<button>Save</button>

				</div>
			</div>

		);
	}
}