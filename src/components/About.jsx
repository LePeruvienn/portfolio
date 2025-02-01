import Navbar from "./general/Navbar.jsx";
import Footer from "./general/Footer.jsx";
import UsefulLinks from "./general/UsefulLinks.jsx";
import { useTranslation } from "react-i18next";

function About() {
	const { t, i18n } = useTranslation("about");

	const timelineData = [
		{
			year: "2022",
			title: "BUT Informatique",
			context: "Université Paris Saclay",
			description: "I wrote my first \"Hello, World!\" program and fell in love with coding.",
			color: "-teal-400" 
		},
		{ 
			year: "2024 - 3 mois",
			title: "Stage Développeur Gameplay",
			context: "WebGames",
			description: "Landed my first job as a junior developer and started building real-world applications.",
			color: "-indigo-400"
		},
		{
			year: "2024 - 2025",
			title: "Développeur Freelance",
			context: "WebGames",
			description: "Started contributing to open-source projects and collaborating with developers worldwide.",
			color: "-purple-400"
		},
		{
			year: "2025 - 4 mois",
			title: "Stage Développeur Multijoueur",
			context: "WebGames",
			description: "Started contributing to open-source projects and collaborating with developers worldwide.",
			color: "-purple-500"
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
					<div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
						<img
							src="https://via.placeholder.com/256" // Remplace avec ton image
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
							A passionate <span className="text-teal-400 font-semibold">Frontend Developer</span> and
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
						<h3 className="text-2xl font-bold text-teal-400 mb-2">Web Development</h3>
						<p className="text-gray-300">
							Building responsive and dynamic websites using React, Tailwind CSS, and modern JavaScript.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-indigo-400 mb-2">UI/UX Design</h3>
						<p className="text-gray-300">
							Crafting intuitive and visually appealing interfaces that enhance user experience.
						</p>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
						<h3 className="text-2xl font-bold text-purple-400 mb-2">Open Source</h3>
						<p className="text-gray-300">
							Contributing to open-source projects and sharing knowledge with the developer community.
						</p>
					</div>
				</div>

				<p>
					blalala
				</p>

				{/* Timeline Section */}
				<h2 className="text-2xl font-bold mb-4"> Mon Parcours </h2>
				<div className="relative space-y-12 py-12">
					<p className="w-1/2 mx-auto text-2xl text-center text-gray-400 font-semibold">
						Est apparu le 2 décembre 2003 en Essonne ...
					</p>
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
