import React from "react";
import { SiNeovim, SiArchlinux, SiHyprland } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Outils() {

	return (

		<div
			className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/portfolio/img/laptop.png')" }}
		>
			{/* Fond semi-transparent pour améliorer la lisibilité */}

			{/* Contenu principal */}
			<div className="relative z-10 max-w-6xl w-full p-8">
				<div className="bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl p-8 md:p-12">
					{/* Titre */}
					<h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 text-center">
						Ce que j'utilise au quotidien
					</h2>

					{/* Description */}
					<p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
						Je travaille sur un PC portable qui tourne sous Archlinux, j'ai pu réaliser une configuration personnalisé en utilisant l'environnement de bureau hyprland. Je code sous Neovim depuis maintenant plus d'un an, et j'utilise Github pour le versionning pour tout mes projets, ainsi que leurs pipeline CI/CD.
					</p>

					{/* Grille des icônes */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
						{/* Neovim */}
						<div className="flex flex-col items-center space-y-3 transition-transform transform hover:scale-105">
							<SiNeovim size={48} className="text-green-400" />
							<span className="text-xl text-gray-200 font-medium">Neovim</span>
						</div>

						{/* Archlinux */}
						<div className="flex flex-col items-center space-y-3 transition-transform transform hover:scale-105">
							<SiArchlinux size={48} className="text-blue-400" />
							<span className="text-xl text-gray-200 font-medium">Archlinux</span>
						</div>

						{/* Hyprland */}
						<div className="flex flex-col items-center space-y-3 transition-transform transform hover:scale-105">
							<SiHyprland size={48} className="text-teal-400" />
							<span className="text-xl text-gray-200 font-medium">Hyprland</span>
						</div>

						{/* Github */}
						<div className="flex flex-col items-center space-y-3 transition-transform transform hover:scale-105">
							<FaGithub size={48} className="text-gray-400" />
							<span className="text-xl text-gray-200 font-medium">Github</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Outils;
