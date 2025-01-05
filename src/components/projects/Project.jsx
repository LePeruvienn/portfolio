
function Project ({name, year, description, links, image }) {

	return (

		<div className="
			grid grid-cols-2 hover:scale-105 transition-all duration-300
		">
			<div>
				<h2 className="text-white text-3xl pb-3 font-bold"> 
					{name} <span className="font-normal"> - {year} </span>
				</h2>
				{/* Generating project description */}
				{description.map((text, index) => (
					<p key={index} className="text-white text-xl pb-2">
						{text}
					</p>
				))}
				<div className="mt-2 flex flex-row">
					{ links.github && (
						<a 
							href={links.github}
							target="_blank"
							className="text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 pr-5 hover:underline"
						>
							GitHub Repository
						</a>
					)}
					{ links.website && (
						<a 
							href={links.website}
							target="_blank"
							className="text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 pr-5 hover:underline"
						>
							Website
						</a>
					)}
				</div>
			</div>
			<div className="perspective-1600 transform transition-all duration-300 hover:rotate-y-[-15deg]">
				<img 
					className="
						transform rotate-y-[-30deg] hover:rotate-y-[-10deg] transition-transform duration-300
						drop-shadow-lg
					"
					src={image}
					alt={name}
				/>
			</div>
		</div>
	)
}

export default Project
