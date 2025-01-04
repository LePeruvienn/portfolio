import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App () {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={ <Home/> } />
					<Route path="/about" element={ <About/> }/>
					<Route path="/projects" element={ <Projects/>} />
					<Route path="/contact" element={ <Contact/> } />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
