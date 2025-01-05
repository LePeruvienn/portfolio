import projectImage from '../../assets/img/projects/semantique.png';

function Project () {

	return (

		<div className="
			grid grid-cols-2 hover:scale-105 transition-all duration-300
		">
			<div>
				<h2 className="text-white text-3xl pb-3 font-bold"> 
					Project Name <span className="font-normal"> - 2024 </span>
				</h2>
				<p className="text-white text-xl pb-2">
					Competitive games and scavenger hunts played across the entire city. Like Jet Lag: The Game, but without the budget.
				</p>
				<p className="text-white text-xl pb-2">
					A live game for which I build the website, help consult for game balance, and run Game Control. The website includes event information, team management, and, during the game, live scoring and judging functionality.
				</p>
				<div className="mt-2 flex flex-row">
					<a 
						href="#"
						className="text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 pr-5 hover:underline"
					>
						GithubRepo
					</a>
					<a 
						href="#"
						className="text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 pr-5 hover:underline"
					>
						Website
					</a>
				</div>
			</div>
			<div className="perspective-1600 transform transition-all duration-300 hover:rotate-y-[-15deg]">
				<img 
					className="
						transform rotate-y-[-30deg] hover:rotate-y-[-10deg] transition-transform duration-300
						drop-shadow-lg
					"
					src={projectImage}
					alt="Project"
				/>
			</div>
		</div>
	)
}

export default Project
