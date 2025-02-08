import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import Project from './projects/Project.jsx';
import projects from "../assets/datas/projects.json"
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
					Mes Projets
				</h1>
				
				<p>
					Voila les différents travaux que j'ai réaliser durant ma vie ! Il ya pas mal de truc donc hésitez pas à filtrer les projets qui vont intéresse.
				</p>

				<div className="space-y-10">

					{projects.map((project, index) => (
						<Project key={index} project={project} />
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
