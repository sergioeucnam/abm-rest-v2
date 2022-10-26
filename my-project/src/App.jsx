import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import PlayerTable from './components/PlayerTable';

function App() {
	return (
		<div>
			<Navbar />
			<PlayerTable />
		</div>
	);
}

export default App;
