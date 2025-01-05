import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

import ScrollToTop from './components/utils/ScrollToTop.jsx';

function App () {

	return (
		<>
			<HashRouter>
				{/* Make the brwoser scroll to the top of the page */}
				<ScrollToTop/>

				{/* Routes paths ... */}
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={ <Home/> } />
					<Route path="/about" element={ <About/> }/>
					<Route path="/projects" element={ <Projects/>} />
					<Route path="/contact" element={ <Contact/> } />
				</Routes>
			</HashRouter>
		</>
	)
}

export default App
