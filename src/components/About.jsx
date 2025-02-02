import Navbar from "./general/Navbar.jsx";
import Footer from "./general/Footer.jsx";
import UsefulLinks from "./general/UsefulLinks.jsx";
import TechCarousel from "./about/techsCarousel.jsx";
import Projects from "./about/projects.jsx";
import { useTranslation } from "react-i18next";

function About() {
	const { t, i18n } = useTranslation("about");

	const timelineData = [
		{
			"year": "2022",
			"title": "BUT Informatique",
			"context": "Université Paris-Saclay",
			"description": "Après un baccalauréat général et une année en Mesures Physiques, j'ai finalement décidé de me lancer dans l'informatique à l'IUT d'Orsay !",
			"color": "-teal-400"
		},
		{
			"year": "2024 - 3 mois",
			"title": "Stage Développeur Gameplay",
			"context": "WebGames",
			"description": "Ma première expérience dans le jeu vidéo ! Ma mission était de développer un outil de création de jeux web en utilisant un moteur de jeu propriétaire.",
			"color": "-indigo-400"
		},
		{
			"year": "2024",
			"title": "Développeur Freelance",
			"context": "WebGames",
			"description": "Suite à un stage très réussi, j'ai poursuivi ma collaboration avec l'entreprise en tant que prestataire indépendant.",
			"color": "-purple-400"
		},
		{
			"year": "2025 - 4 mois",
			"title": "Stage Développeur Multijoueur",
			"context": "WebGames",
			"description": "Après une première expérience enrichissante, j’ai souhaité prendre davantage de responsabilités au sein de l’entreprise et approfondir mes connaissances sur le développement de jeux en ligne.",
			"color": "-purple-500"
		}
	];

	const techs = [
		{
			title: "React",
			color: "bg-teal-400"
		},
		{
			title: "Node.js",
			color: "bg-indigo-400"
		},
		{
			title: "Python",
			color: "bg-purple-400"
		},
		{
			title: "JavaScript",
			color: "bg-orange-400"
		},
		{
			title: "CSS",
			color: "bg-red-400"
		},
		{
			title: "HTML",
			color: "bg-yellow-400"
		},
		{
			title: "Docker",
			color: "bg-green-400"
		},
		{
			title: "Git",
			color: "bg-blue-400"
		}
	];

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
							Je me représente haha, étudiant en informatique qui adore  <span className="text-teal-400 font-semibold">Frontend Developer</span> and
							<span className="text-indigo-400 font-semibold"> UI/UX Enthusiast</span> based in New York. 
							I love turning ideas into beautiful, functional, and user-friendly experiences.
						</p>
					</div>
				</div>

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
					Ce que je cherche à explorer aujourd'hui 🚀
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
								Les Fondations du jeu en ligne
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
				<div className="relative space-y-12 pb-12">
					<div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>

					{timelineData.map((item, index) => (
						<div key={index} className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
							<div className="md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-center md:text-left">
								<h3 className={`mb-2 pb-1 text-xl font-bold border-b-2 border${item.color}`}>{item.title}</h3>
								<p className="text-gray-400 font-semibold">{item.context}</p>
								<p className="text-gray-400 italic">{item.year}</p>
								<p className="text-gray-300 mt-2">{item.description}</p>
							</div>
							<div className="hidden md:flex md:w-2/12 justify-center">
								<div className={`w-6 h-6 bg${item.color} rounded-full shadow-lg`}></div>
							</div>
							<div className="md:w-5/12"></div>
						</div>
					))}
				</div>

				{/* Project Section */}
				<h2 className="text-2xl font-bold"> Projets </h2>

				<p>
					Voici trois projet que j'ai beaucoup aimé et qui m'ont aussi beaucoup appris, hésitez pas à jeter un coup d'oeuil !
				</p>

				<Projects/>


				{/* Tech Stack Section */}
				<p>
					Voici une petite liste de toutes les technologies avec lequels j'ai eu de l'expérience, hésitez pas à me contacter si vous voulez collaborez pour un projet :)
				</p>


			  <TechCarousel techs={techs} />

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
