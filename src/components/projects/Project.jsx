
function Project({ name, year, description, links, image }) {

	return (
		<div
			className="
				grid grid-cols-1 sm:grid-cols-2 gap-6 
				hover:scale-105 transition-transform duration-300
			"
		>
			{/* Project Details Section */}
			<div>
				<h2 className="text-white text-2xl sm:text-3xl pb-3 font-bold">
					{name} <span className="font-normal"> - {year} </span>
				</h2>

				{/* Project Description */}
				{description.map((text, index) => (
					<p
						key={index}
						className={`
							text-white text-base sm:text-lg pb-2 
							${index > 0 ? "sm:hidden block 2xl:block" : ""}
						`}
					>
						{text}
					</p>
				))}

				{/* Links Section */}
				<div className="mt-4 flex flex-wrap gap-4">
					{links.github && (
						<a
							href={links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-base sm:text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 hover:underline"
						>
							GitHub Repository
						</a>
					)}
					{links.website && (
						<a
							href={links.website}
							target="_blank"
							rel="noopener noreferrer"
							className="text-base sm:text-xl font-bold text-teal-400 hover:text-teal-600 transition-colors duration-300 hover:underline"
						>
							Website
						</a>
					)}
				</div>
			</div>

			{/* Image Section */}
			<div className="relative perspective-1600">
				<img
					className="
						w-full object-cover rounded-lg 
						transform rotate-y-[-15deg] hover:rotate-y-[-5deg] 
						transition-transform duration-300 drop-shadow-lg
					"
					src={image}
					alt={name}
				/>
			</div>
		</div>
	);
}

export default Project;
