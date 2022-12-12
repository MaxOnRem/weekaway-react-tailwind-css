import React from 'react';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<Hero />
			<Activities />
			<Booking />
			<Gallery />
			<Contact />
		</div>
	);
}

export default App;
