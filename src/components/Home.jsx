import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Header from './home/Header.jsx';
import Main from './home/Main.jsx';

function Home () {

	return (
		<>
			<Header/>
			<div className="relative !z-10 min-h-screen">
				<Navbar/>
				<Main/>
			</div>
			<Footer/>
		</>
	)
}

export default Home
