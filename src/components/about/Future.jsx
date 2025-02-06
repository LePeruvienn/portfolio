import { useState } from "react";

const Future = () => {

	const [showMore, setShowMore] = useState(false);

	return (

		<div className="mt-4 flex flex-col md:flex-row md:space-x-6 relative">
			<div className="text-xl text-gray-200 p-4 md:p-0 relative z-10">
				<p>
					Après l'obtention de mon <span className="font-bold">BUT Informatique (BAC+3)</span>, 
					j'aimerais poursuivre mes études jusqu'à un <span className="font-bold">BAC+5</span>, 
					que ce soit en école d'ingénieur ou en Master. J'apprécie apprendre et approfondir 
					mes connaissances, et si l'opportunité se présente, je souhaiterais même aller plus 
					loin en intégrant un <span className="font-bold">Mastère Spécialisé</span> ou en 
					poursuivant un <span className="font-bold">Doctorat</span>. Ces parcours me 
					permettraient non seulement de me spécialiser, mais aussi de contribuer à l'avancement 
					des connaissances dans mon domaine.
				</p>

				{showMore && (
					<p className="mt-2">
						Par ailleurs, l'<span className="font-bold">enseignement</span> m'intéresse particulièrement, car transmettre des connaissances est une vocation 
						qui me tient à cœur. Toutefois, avant d'envisager un rôle d'enseignant, je souhaite 
						d'abord construire ma propre carrière, que ce soit dans le secteur public ou privé. 
						Acquérir une solide expérience professionnelle me permettra non seulement de mieux 
						maîtriser mon domaine, mais aussi de partager mon expertise de manière plus pertinente 
						et enrichissante lorsque l'occasion se présentera.
					</p>
				)}

				<button
					className="mt-2 text-lg text-teal-400 hover:underline"
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? "Voir moins" : "Voir plus"}
				</button>
			</div>

			<img 
				src="/portfolio/img/thinking.png" 
				alt="Description de l'image" 
				className="w-full md:w-1/4 max-h-[250px] object-contain rounded-lg shadow-lg md:block hidden"
			/>
		</div>
	);
};

export default Future;
