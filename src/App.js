import React, { Component, useState } from 'react';

import Welcome1 from './components/Landing/Welcome';
import Toodles, { SayHelloBye, GoodBye } from './components/Landing/Goodbye';
import logo from './logo.svg';
import './App.css';

// function test(params) {
//   console.log("heii");
// }
// let button = document.querySelector(".addButton");
// button = document.activeElement("click", test);
class Welcome extends Component {
	state = {
		firstName: 'Jean',
		lastName: 'Altidor',
		addresses: [ { streetName: '701 Tuxwroth' }, { streetName: '545 eagle Drive' } ],
		newName: '',
		jobName: ''
	};

	test(params) {
		// console.log("hi", params ? params : "Ozzie");
		console.log('hi', 'Ozzie');
	}

	onSubmit = (event) => {
		event.preventDefault();
		window.alert(JSON.stringify(this.state, null, 3));
	};

	onChange = (event) => {
		const inputfield = [ event.target.name ];
		const inputValue = event.target.value;
		this.setState({ [inputfield]: inputValue });
	};

	render() {
		const { firstName, lastName, newName, jobName } = this.state;
		return (
			<div>
				<button onClick={this.test}>Add</button>
				<h1>{firstName}</h1>
				<h1>{lastName}</h1>
				<h1>{newName ? newName : 'No Name Entered Yet'}</h1>
				<h1>{jobName ? jobName : 'No jobName Entered Yet'}</h1>
				{/* {this.state.addresses.map((k, index) => {
					return <h2 key={`${index}-${k.streetName}`}>{k.streetName}</h2>;
				})} */}
				<form>
					<label>
						Name:
						<input
							type="text"
							name="newName"
							title="newName"
							value={this.state.newName}
							placeholder="Enter Your Name"
							onChange={this.onChange}
						/>
					</label>
					<label>
						Job:
						<input
							type="text"
							name="jobName"
							title="jobName"
							value={this.state.jobName}
							placeholder="Enter Your Job title"
							onChange={this.onChange}
						/>
					</label>
					<button type="submit" onClick={(event) => this.onSubmit(event)}>
						Submit
					</button>
				</form>

				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		);
	}
}

function App() {
	const [ state, setState ] = useState({
		latestRocket: ''
	});
	const helloButton = () => {
		console.log('hi ozzie');
	};

	const spaceXApi = () => {
		fetch('https://api.spacexdata.com/v3/launches/latest')
			.then((response) => response.json())
			.then((data) => setState({ latestRocket: data }));
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <Welcome /> */}
				<Welcome1
					company={'Best Buy'}
					isAgirl={true}
					cartype={'Toyota'}
					helloButton={helloButton}
					spaceX={spaceXApi}
				/>
				<GoodBye helloButton={helloButton} />

				{/* <pre>{JSON.stringify(state)}</pre> */}
				{state.latestRocket ? (
					<div>
						<h1>{state.latestRocket.flight_number}</h1>
						<h1>{state.latestRocket.mission_name}</h1>
						<h1>{state.latestRocket.rocket.rocket_name}</h1>
					</div>
				) : null}

				{/* <SayHelloBye />
				<Toodles /> */}
				{/* <p>
					Edit <code>src/App.js</code> and save Ozzie.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			</header>
		</div>
	);
}

export default App;
