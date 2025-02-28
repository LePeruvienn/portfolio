import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import { useTranslation } from 'react-i18next';

function Blog () {

	return (
		<>
			<Navbar />
			<div className="md-container min-h-screen">
				<h1> My Blog </h1>
				<p> Nothing to show yet 😢 ... </p>
			</div>
			<Footer />
		</>
	);
}

export default Blog;
