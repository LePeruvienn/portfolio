import { useTranslation } from 'react-i18next';

function UsefulLinks () {

	const { t, i18n } = useTranslation ("home");
	// Get the current language
	const language = i18n.language;

	// Determine the correct link based on the selected language
	const resumeLink = language === 'fr' 
		? 'https://github.com/LePeruvienn/portfolio/blob/main/public/cv/cv_arthur_fr.pdf'
		: 'https://github.com/LePeruvienn/portfolio/blob/main/public/cv/cv_arthur_en.pdf';

	return (

		<div className="w-full text-white flex-grow grid grid-cols-4 grid-rows-3 gap-1">
			<a
				href={resumeLink}
				target="_blank"
				className="
					bg-rose-900 row-span-2
					flex justify-center items-center
					hover:scale-105 transition group
				"
			>
				<div className="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						fill="white" viewBox="0 0 16 16" 
						className="h-8 w-8 sm:w-10 sm:h-10 my-2 sm:group-hover:opacity-0 transition-opacity"
					>
					  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755"/>
					</svg>
					<span className="text-lg font-bold text-center sm:group-hover:opacity-0 transition-opacity">
						{ t ("resume") }
					</span>
					<span className="m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-center">
						Le papier qui m'aide à trouver mes stage 🤓
					</span>
				</div>
			</a>
			<a
				href="#/projects"
				className="
					bg-black col-span-2 row-span-3
					flex justify-center items-center
					hover:scale-105 transition group
					relative
				"
			>
				<div
					className="
						absolute inset-0
						bg-[url('/portfolio/img/projects.gif')] bg-cover bg-center
						filter blur-sm opacity-50
						- z-10
					"
				></div>

				<span className="z-10 text-xl font-bold text-center sm:group-hover:opacity-0 transition-opacity">
					{ t ("myProjects") }
				</span>

				<span className="z-10 m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-center">
					Tout les trucs cools que j'ai fait 😎 (ou pas)
				</span>
			</a>
			<a
				href="https://github.com/LePeruvienn"
				target="_blank"
				className="
					bg-gray-800 col-start-4
					flex justify-center items-center
					hover:scale-105 transition group
				"
			>
				<div className="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg"
						fill="white" viewBox="0 0 16 16" 
						className="h-8 w-8 sm:w-10 sm:h-10 my-2 sm:group-hover:opacity-0 transition-opacity"
					>
					  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
					</svg>
					<span className="text-lg font-bold text-center sm:group-hover:opacity-0 transition-opacity">
						GitHub
					</span>
					<span className="m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 ease-in-out text-center">
						C'est ici que j'amuse 👨‍💻
					</span>
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/arthur-pinel-87a91a270/"
				target="_blank"
				className="
					bg-blue-900 col-start-4 row-start-2
					flex justify-center items-center
					hover:scale-105 transition group
				"
			>
				<div className="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						fill="white" viewBox="0 0 16 16" 
						className="h-8 w-8 sm:w-10 sm:h-10 my-2 sm:group-hover:opacity-0 transition-opacity"
					>
					  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
					</svg>
					<span className="text-lg font-bold text-center sm:group-hover:opacity-0 transition-opacity">
						LinkedIn
					</span>

					<span className="m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 ease-in-out text-center">
						Mon (petit) réseau 👥
					</span>
				</div>
			</a>
			<a
				href="mailto:koto91@free.fr"
				className="
					bg-gray-500 col-start-4 row-start-3
					flex justify-center items-center
					hover:scale-105 transition group
				"
			>
				<div className="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						fill="white" viewBox="0 0 16 16" 
						className="h-8 w-8 sm:w-10 sm:h-10 my-2 sm:group-hover:opacity-0 transition-opacity"
					>
					  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
					</svg>
					<span className="text-lg font-bold text-center sm:group-hover:opacity-0 transition-opacity">
						Mail
					</span>
					<span className="m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 ease-in-out text-center">
						Je répond vite promis !
					</span>
				</div>
			</a>
			<a
				href="#/about"
				className="
					bg-purple-900 col-start-1 row-start-3
					flex justify-center items-center
					hover:scale-105 transition group
				"
			>
				<div className="flex flex-col items-center">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						fill="white" viewBox="0 0 16 16" 
						className="h-8 w-8 sm:w-10 sm:h-10 my-2 sm:group-hover:opacity-0 transition-opacity"
					>
					  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
					</svg>
					<span className="text-lg font-bold text-center sm:group-hover:opacity-0 transition-opacity">
						{ t ("aboutMe") }
					</span>
					<span className="m-2 absolute opacity-0 translate-y-full sm:group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-300 ease-in-out text-center">
						Mieux me connaitre 🔍
					</span>
				</div>
			</a>
		</div>
	)
}

export default UsefulLinks
