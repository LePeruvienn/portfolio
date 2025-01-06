import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Project from './projects/Project.jsx';
import { useTranslation } from 'react-i18next';

// Importing projects data
import projectsData from "../assets/datas/projects.json" // Import the JSON data



function Projects () {

	const { t, i18n } = useTranslation();

	return (
		<>
			<Navbar/>
			<div className="md-container">

				<h1 className="text-6xl text-white">
					{ t ("projects") }
				</h1>
				
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
								image={`/portfolio/${project.image}`}
							/>
						</div>
					))}
				</div>

				<p className="mt-20">
					<strong> Feel free to see more by visiting my <a href="https://github.com/LePeruvienn?tab=repositories" target="_blank"> GitHub reposiories </a> ! </strong>
				</p>
			</div>

			<Footer/>
		</>
	)
}

export default Projects
