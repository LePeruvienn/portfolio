import Navbar from './general/Navbar.jsx';
import Header from './home/Header.jsx';
import Main from './home/Main.jsx';

function Home () {

	return (
		<>
			<Header/>
			<div className="h-screen">
				<Navbar/>
				<Main/>
			</div>
		</>
	)
}

export default Home
