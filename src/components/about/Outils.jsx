import React from "react";
import { SiNeovim } from "react-icons/si";

function Outils () {

	return (
		<div className="flex items-center space-x-8 p-8">
			{/* Image à gauche */}
			<div className="w-full sm:w-1/2 mb-8 sm:mb-0">
				<img
					src="/portfolio/img/laptop.png"
					alt="Arthur"
					className="w-full h-auto"/>
			</div>

			{/* Texte à droite */}
			<div className="w-full sm:w-1/2">
				<h2 className="text-3xl font-semibold text-teal-400 mb-4"> 
					Ce que j'utilise au quotidien
				</h2>
				<p className="text-xl text-gray-300 mb-6">
					Voici les technologies et outils que j'utilise régulièrement dans mon travail de développeur freelance. J'aime rester à jour avec les dernières tendances pour offrir des solutions modernes et efficaces à mes clients.
				</p>

				{/* Icônes des outils */}
				<div className="flex space-x-8 mt-6">
					<div className="flex items-center space-x-2 transition-transform transform hover:scale-110">
						<SiNeovim size={32}/>
						<span className="text-xl text-gray-200 font-medium">
							Neovim
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Outils;
