import Navbar from "./general/Navbar.jsx";
import Footer from "./general/Footer.jsx";
import UsefulLinks from "./general/UsefulLinks.jsx";
import Explore from "./about/Explore.jsx";
import Future from "./about/Future.jsx";
import TechCarousel from "./about/techsCarousel.jsx";
import Projects from "./about/Projects.jsx";
import Outils from "./about/Outils.jsx";
import Languages from "./about/Languages.jsx";
import DropdownList from "./about/DropdownList.jsx";
import Hobbys from "./about/Hobbys.jsx";
import Timeline from "./about/Timeline.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function About () {

	const { t } = useTranslation ("about");
	const items = t ("about.whatILove.items", { returnObjects: true }) || [];

	return (
		<>
			<Navbar />
			<div className="md-container min-h-screen">
				<h1>{t("about.aboutMe")}</h1>

				{/* About Me Section */}
				<div className="flex flex-col md:flex-row items-center gap-10 my-12">
					<div className="w-48 h-48 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden border-4 border-teal-400 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
						<img
							src="/portfolio/img/pp.png"
							alt="Arthur"
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="max-w-2xl text-center md:text-left">
						<h1
							className="text-3xl font-bold"
							dangerouslySetInnerHTML={{ __html: t("about.introduction.title") }}
						/>
						<p
							className="mt-4 text-xl text-gray-300"
							dangerouslySetInnerHTML={{ __html: t("about.introduction.description1") }}
						/>
						<p
							className="mt-4 text-xl text-gray-300"
							dangerouslySetInnerHTML={{ __html: t("about.introduction.description2") }}
						/>
					</div>
				</div>

				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.motivation") }}
				/>

				{/* Ce que j'aime Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.whatILove.title")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
					{items.map((item, index) => (
						<div
							key={index}
							className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<h3
								className={`text-2xl font-bold mb-2 ${item.color}`}
								dangerouslySetInnerHTML={{ __html: item.title }}
							/>
							<p
								className="text-gray-300"
								dangerouslySetInnerHTML={{ __html: item.description }}
							/>
						</div>
					))}
				</div>

				<p className="text-xl text-gray-300">
					{t("about.explorePrompt")}
				</p>

				<Explore />

				{/* Timeline Section */}
				<h2 className="text-2xl font-bold text-gray-100 mb-4">
					{t("about.timeline.title")}
				</h2>
				<div className="mt-12 -mb-4">
					<p
						className="w-1/2 mx-auto text-2xl text-center text-gray-400 font-semibold"
						dangerouslySetInnerHTML={{ __html: t("about.timeline.description") }}
					/>
				</div>
				<Timeline />

				{/* Future Section */}
				<h2 className="text-2xl font-bold text-gray-100 mb-4">
					{t("about.future.title")}
				</h2>
				<Future />

				{/* Project Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.projects.title")}
				</h2>
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.projects.description1") }}
				/>
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.projects.description2") }}
				/>
				<Projects />

				{/* Tech Stack Section */}
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.techStack") }}
				/>
				<TechCarousel />

				{/* Tools Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.tools.title")}
				</h2>
				<Outils />

				{/* Languages Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.languages.title")}
				</h2>
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.languages.description1") }}
				/>
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.languages.description2") }}
				/>
				<Languages />

				{/* Hobbies Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.hobbies.title")}
				</h2>
				<p
					className="text-xl text-gray-300"
					dangerouslySetInnerHTML={{ __html: t("about.hobbies.description") }}
				/>
				<Hobbys />

				{/* Thank You Section */}
				<h2 className="mt-8 text-2xl font-bold text-gray-100">
					{t("about.thankYou.title")}
				</h2>
				<div className="p-6 flex flex-col md:flex-row justify-between">
					<div className="md:pt-5 md:pr-5 w-full md:w-1/2 mb-4 md:mb-0 text-lg lg:text-xl text-gray-200">
						<p
							className="mt-2"
							dangerouslySetInnerHTML={{ __html: t("about.thankYou.description1") }}
						/>
						<p
							className="mt-5"
							dangerouslySetInnerHTML={{ __html: t("about.thankYou.description2") }}
						/>
					</div>
					<img
						src="/portfolio/img/lipton.jpg"
						alt="Photo de mon chien"
						className="w-full md:w-1/2 max-h-[350px] object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* Useful Links Section */}
				<h2 className="text-2xl font-bold text-gray-100">
					{t("about.usefulLinks.title")}
				</h2>
				<p className="text-xl text-gray-300">
					{t("about.usefulLinks.description")}
				</p>
				<UsefulLinks />
			</div>
			<Footer />
		</>
	);
}

export default About;
