import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';

function App () {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home/>} />
					<Route path="/home" element={<h1> home </h1>} />
					<Route path="/projects" element={<h1> Projects </h1>} />
					<Route path="/about" element={<h1> About </h1> }/>
					<Route path="/contact" element={<h1> Contact </h1> } />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
