
function Hobbys () {

	const hobbys = [
		{
			title: "Echecs",
			description: "blablablabla blabla blablabla",
			color: "teal-400",
		},
		{
			title: "Jeux vidéo",
			description: "blablablabla blabla blablabla",
			color: "indigo-400",
		},
		{
			title: "Jeux ",
			description: "blablablabla blabla blablabla",
			color: "purple-400",
		},
	];

	return (

		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{hobbys.map ( (hobby, index) => (
				<div 
					key={index}
					className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-6"
				>
					<div className={`w-12 h-12 rounded-full bg-${hobby.color} flex items-center justify-center`}></div>
					<div>
						<h4 className={`text-xl font-semibold text-${hobby.color}`}>
							{hobby.title}
						</h4>
						<p className="text-gray-300">
							{ hobby.description }
						</p>
					</div>
				</div>
			))}
		</div>

	)
}

export default Hobbys;
