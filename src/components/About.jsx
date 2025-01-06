import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import UsefulLinks from './general/UsefulLinks.jsx';
import { useTranslation } from 'react-i18next';

function About() {

	const { t, i18n } = useTranslation();

	return (
		<>
			<Navbar />
			<div className="md-container min-h-screen">

				<h1>
					{ t("aboutMe") }
				</h1>

				<p>
					{ t("aboutP1") }
				</p>

				<h2> { t("aboutH1") }</h2>

				<p>
					{ t("aboutP2") }
				</p>

				<p>
					{ t("aboutP3") }
				</p>

				<ul>
					<li>
						<strong>{ t("aboutLS1") }</strong>{ t("aboutL1") }
					</li>
					<li>
						<strong>{ t("aboutLS2") }</strong>{ t("aboutL2") }
					</li>
				</ul>

				<h2>{ t("someProjects") }</h2>

				<p>
					<strong>{ t("ITProjects") } :</strong>
				</p>

				<ul>
					<li>
						<strong>{ t("WebFullStack") }</strong>, { t("WebFullStackDesc") }
					</li>
					<li>
						<strong>{ t("SoftwareDevelopment") }</strong>, { t("SoftwareDevelopmentDesc") }
					</li>
					<li>
						<strong>{ t("DataAnalysis") }</strong>, { t("DataAnalysisDesc") }
					</li>
					<li>
						<strong>{ t("NetworkAndSystems") }</strong>, { t("NetworkAndSystemsDesc") }
					</li>
				</ul>

				<p><strong>{ t("CreativeAndFunProjects") } :</strong></p>
				<ul>
					<li>
						<strong>{ t("GraphicDesign") }</strong>, { t("GraphicDesignDesc") }
					</li>
					<li>
						<strong>{ t("VideoEditing") }</strong>, { t("VideoEditingDesc") }
					</li>
					<li>
						<strong>{ t("GameDevelopment") }</strong>, { t("GameDevelopmentDesc") }
					</li>
				</ul>

				<p><a href="/projects">{ t("toSeeMoreProjects") }</a></p>

				<h2>{ t("TechnicalAndPersonalSkills") }</h2>

				<p><strong>{ t("TechnologiesAndTools") }:</strong> { t("Technologies") }</p>
				<p><strong>{ t("Methodologies") }:</strong> { t("Methodologies") }</p>
				<p><strong>{ t("SoftSkills") }:</strong> { t("SoftSkills") }</p>

				<h2>{ t("VersatileAndDynamicProfile") }</h2>

				<p>{ t("ProfileDescription") }</p>

				<ul>
					<li><strong>{ t("SportsActivities") }:</strong> { t("SportsActivitiesDesc") }</li>
					<li><strong>{ t("CreativePassions") }:</strong> { t("CreativePassionsDesc") }</li>
					<li><strong>{ t("ITPassions") }:</strong> { t("ITPassionsDesc") }</li>
				</ul>

				<h2>{ t("MyVision") }</h2>

				<p>{ t("VisionText") }</p>

				<h2>{ t("UsefulLinks") }</h2>
				<p>
					{ t("UsefulLinksText") }
				</p>
				<UsefulLinks />
			</div>
			<Footer />
		</>
	);
}

export default About;
