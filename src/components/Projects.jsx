import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Project from './projects/Project.jsx';



function Projects () {

	return (
		<>
			<Navbar/>
			<div className="md-container">

				<h1 className="text-6xl text-white"> Projects </h1>
				
				<p>
					Here is a selection of the projects that i have been working on. Starting with the most recents !
				</p>

				<div className="mt-10">
					<Project/>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default Projects
