import Kasa from './pages/Kasa'
import NotFound from './pages/NotFound';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
	

	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Kasa />} />
				<Route path="/accomodation/:id" element={<Accomodation />} />
				<Route path='/about' element={<About />} />
				<Route path="*" element={<NotFound />} />
				
				
			</Routes>
		</Router>
	);
}

export default App;
