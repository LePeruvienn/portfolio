import Navbar from "./general/Navbar.jsx";
import Footer from "./general/Footer.jsx";
import UsefulLinks from "./general/UsefulLinks.jsx";
import TechCarousel from "./about/techsCarousel.jsx";
import Projects from "./about/projects.jsx";
import Outils from "./about/Outils.jsx";
import Languages from "./about/Languages.jsx";
import DropdownList from "./about/DropdownList.jsx";
import Hobbys from "./about/Hobbys.jsx";
import Timeline from "./about/Timeline.jsx";
import { useTranslation } from "react-i18next";

function About () {

	const { t, i18n } = useTranslation("about");


	return (
		<>
			<Navbar />
			<div className="md-container min-h-screen">

				<h1> { t ("aboutMe") } </h1>

				{/* About Me Section */}
				<div className="flex flex-col md:flex-row items-center gap-10 my-12">

					{/* Profile Picture */}
					<div className="w-48 h-48 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden border-4 border-teal-400 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
						<img
							src="/portfolio/img/pp.png"
							alt="Arthur"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Introduction Text */}
					<div className="max-w-2xl text-center md:text-left">
						<h1 className="text-3xl font-bold">
							Salut c'est Arthur !
						</h1>
						<p className="mt-4 text-xl text-gray-300">
							Curieux et créatif, j’aime relever des défis et explorer de nouvelles idées. Que ce soit dans le <span className="text-purple-400 font-semibold">développement de jeux vidéo</span> ou l’apprentissage de nouvelles compétences, je suis toujours à la recherche de projets stimulants.
						</p>

						<p className="mt-4 text-xl text-gray-300">
							Actuellement <span className="text-teal-400 font-semibold"> développeur freelance </span>, je mets mon imagination et ma motivation au service de projets ambitieux. Toujours en quête de défis, je cherche à créer, innover et donner du sens à mon travail.
						</p>
					</div>
				</div>

				<p>
				🚀 Ce qui me motive ? Créer, innover et donner du sens à ce que je fais, en alliant passion et engagement.
				</p>

				{/* Skills Section */}
				<h2 className="text-2xl font-bold">
					Ce que j'aime faire
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-teal-400 mb-2">
							Création et développemet de jeux vidéo
						</h3>
						<p className="text-gray-300">
							J'adore créer toutes sortes de choses et encore plus des jeux vidéo ! Mais ce que j'aime le plus c'est d'apprendre tout les détails techniques des jeux qui font qu'ils sont aussi incroyable aujourd'hui.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-indigo-400 mb-2">
							Configuration de Linux et développement système
						</h3>
						<p className="text-gray-300">
							Je suis un grand fan de linux et de ses différents système d'exploitations, je m'amuse sur mon temps libre à les personnaliser et à programmer des petit scripts pour effectuer certaine tache plus facilement.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-purple-400 mb-2">
							Vie privé et Cybersécurité
						</h3>
						<p className="text-gray-300">
							Je me passionne pour ces sujets et explore leur impact au quotidien. Pour approfondir mes connaissances, je pratique des challenges sur Root Me, m’initie à l’OSINT et cherche à reprendre le contrôle de mes données en utilisant des versions personnalisées d’Android.
						</p>
					</div>
				</div>

				<p>
					Ce que je cherche à explorer aujourd'hui ✨
				</p>

				<div className="space-y-6">
					<div className="flex items-center gap-4">
						<div className="w-3 h-3 rounded-full bg-teal-400"></div>
						<div>
							<h4 className="text-2xl font-semibold text-teal-400">
								Programmation Graphique
							</h4>
							<p className="text-xl text-gray-300">
								blablablabla blabla
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
						<div>
							<h4 className="text-2xl font-semibold text-indigo-400">
								Animations 3D
							</h4>
							<p className="text-xl text-gray-300">
								blablablabla blabla
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="w-3 h-3 rounded-full bg-purple-400"></div>
						<div>
							<h4 className="text-2xl font-semibold text-purple-400">
								IA et Cybersécurité
							</h4>
							<p className="text-xl text-gray-300">
								blablablabla blabla
							</p>
						</div>
					</div>
				</div>


				{/* Timeline Section */}
				<h2 className="text-2xl font-bold mb-4"> Mon Parcours </h2>

				<div className="mt-12 -mb-4">
					<p className="w-1/2 mx-auto text-2xl text-center text-gray-400 font-semibold">
						Est apparu le 2 décembre 2003 en Essonne ...
					</p>
				</div>

				<Timeline/>

				{/* Project Section */}
				<h2 className="text-2xl font-bold"> Quelques Projets </h2>

				<p>
					Voici trois projet que j'ai beaucoup aimé et qui m'ont aussi beaucoup appris, hésitez pas à jeter un coup d'oeuil !
				</p>

				<Projects/>


				{/* Tech Stack Section */}
				<p>
					Voici une petite liste de toutes les technologies avec lequels j'ai eu de l'expérience, hésitez pas à me contacter si vous voulez collaborez pour un projet :)
				</p>

				<TechCarousel />
				
				{/* Tools Section */}
				<h2 className="text-2xl font-bold"> Mes Outils </h2>
				
				<Outils/>

				{/* Other excursion (en dehors du code) Section */}
				<h2 className="mb-4 text-2xl font-bold"> En dehors du code </h2>

				<p>
					J'ai toujours aimé les ordinateur et depuis tout petit je m'amuse à créer des choses à l'aide ces machines. Grâce à cette curiosité qui m'animais chaque jour j'ai toucher à plein de logiciel qui m'ont permis de réaliser ce que je voulais.
				</p>
				<p className="mb-4">
					Voici un peu à quoi tout ce que j'ai toucher
				</p>

				<DropdownList/>



				{/* Langues Section */}
				<h2> Langues </h2>

				<p>
					J'ai toujours apprécié apprendre les langue, issue d'un famille péruvienne j'ai alors depuis mon plus jeune age su parler Espagnol et cette double culture m'as données gout à découvrir de nouvelles langues ains que leurs culture.
				</p>

				<Languages/>

				{/* Hobbies Section */}
				<h2 className="text-2xl font-bold"> Mes hobbys </h2>

				<p>
					Sinon comme tout le monde j'ai plein d'hobby en dehors de l'informatique comme par exemple ...
				</p>

				<Hobbys/>

				{/* Useful Links Section */}
				<h2 className="text-2xl font-bold">Useful Links</h2>
				<p>In case you missed them on the home page ...</p>
				<UsefulLinks />
			</div>
			<Footer />
		</>
	);
}

export default About;
