import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { PlayerProvider } from './components/Context/PlayerContext';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<PlayerProvider>
				<Routes>
					<Route path='/home' element={<App />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<App />} />
				</Routes>
			</PlayerProvider>
		</Router>
	</React.StrictMode>,
);
