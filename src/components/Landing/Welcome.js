import React, { Component } from 'react';

// class Welcome1 extends Component {
// 	render() {
// 		console.log(this.props);
// 		return (
// 			<div>
// 				<h4>its your girl Daph</h4>
// 				<h4>Works at: {this.props.company}</h4>
// 				<h4>Drives a: {this.props.cartype} </h4>
// 			</div>
// 		);
// 	}
// }
const Welcome1 = (props) => {
	// render() {
	console.log(props);
	const { company, cartype } = props;
	return (
		<div>
			<h4>its your girl Daph</h4>
			<h4>Works at: {company}</h4>
			<h4>Drives a: {cartype} </h4>
			<button onClick={props.helloButton}>Greet ME</button>
			<button onClick={props.spaceX}>Call SpaceX Api</button>
		</div>
	);
	// }
};

export default Welcome1;
