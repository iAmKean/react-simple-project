import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './components/card';
import Nav from './components/nav';
import { useTime } from './components/useTime';

import Landing from './views/landing';
import Pet from './views/pet';
import Details from './views/pet/[id]';
import { Link } from "react-router-dom";

function App() {
	const time = useTime();
	return (
		<div className="App">
			<BrowserRouter>
				{/* this is fixed, it will not changed on route changed */}
				{/* <h1>Adopt Me!</h1> */}
				<Nav />
				<Card />
				<Routes>
					<Route path="/" element={<div>
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a
								className="App-link"
								href="https://reactjs.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn React
							</a>

							<Link to={`/views/landing`}>
								landing
							</Link>


							<Link to={`/views/pet`}>
								Pet
							</Link>

							<Link to={`/views/pet/11`}>
								pet detail
							</Link>
						</header>


					</div>} />

					{/* add route for other pages to navigate */}
					<Route path="/views/landing" element={<Landing />} />
					<Route path="/views/pet" element={<Pet />} />
					<Route path="/views/pet/:id" element={<Details />} />

				</Routes>

				<div className="time">
					<span>{time.toLocaleString()}</span>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
