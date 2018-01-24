import React, { Component } from  'react' ;
import './Exhibitors.css'

export default class Exhibitors extends Component {
componentWillMount() {
    const {
      getExhibitors
    } = this.props;
    getExhibitors();
    console.log(this.props);
  }

	render() {
		const {
			exhibitors, 
			loading, 
			error, 
		} = this.props;
		return(
			<div>


			{
        exhibitors.map((exhibitor) => {
      	return (
      		<div className="clearfix">
	         	<div className="col-name">{exhibitor.name}</div>
	         	<div className="col-list">{exhibitor.list}</div>
	         	<button className="col-delete"> &times; </button>
	        </div>
        )
        })
      }


			</div>

		);
	}
}