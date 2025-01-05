import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Project from './projects/Project.jsx';

// Importing projects data
import projectsData from "../assets/datas/projects.json" // Import the JSON data



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

					{/* Generating projects components */}
					{projectsData.projects.map((project, index) => (
						<div key={index} className="mt-10">
							<Project
								name={project.name}
								year={project.year}
								description={project.description}
								links={project.links}
								image={project.image}
							/>
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default Projects
