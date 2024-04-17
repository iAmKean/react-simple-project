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
		<div className="App h-[100vh]" style={{ fontFamily: "PingFang-SC" }}>
			<BrowserRouter>
				{/* this is fixed, it will not changed on route changed */}
				<Nav />
				<Routes>
					{/* add route for other pages to navigate */}
					<Route path="/" element={<Landing />} />
					{/* <Route path="/views/landing" element={<Landing />} /> */}
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
