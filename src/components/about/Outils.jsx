import React from "react";
import { SiNeovim, SiArchlinux, SiHyprland } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Outils() {
	const outils = [
		{ icon: <SiNeovim size={48} className="text-green-400" />, name: "Neovim" },
		{ icon: <SiArchlinux size={48} className="text-blue-400" />, name: "Arch Linux" },
		{ icon: <SiHyprland size={48} className="text-teal-400" />, name: "Hyprland" },
		{ icon: <FaGithub size={48} className="text-gray-400" />, name: "GitHub" },
	];

	return (
		<div
			className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[500px] p-2"
			style={{ backgroundImage: "url('/portfolio/img/laptop.png')" }}
		>

			{/* Contenu principal */}
			<div className="relative z-10 sm:max-w-6xl w-full p-6">
				<div className="bg-gray-900 bg-opacity-90 rounded-xl shadow-lg p-8 md:p-12">

					{/* Description */}
					<p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
						Je travaille sur un PC portable sous <span className="text-blue-400 font-semibold">Arch Linux</span> avec l’environnement de bureau <span className="text-teal-400 font-semibold">Hyprland</span>.
						Pour coder, j’utilise <span className="text-green-400 font-semibold">Neovim</span> et je gère mes projets avec <span className="text-gray-400 font-semibold">GitHub</span> et ses pipelines CI/CD.
					</p>

					{/* Grille des icônes */}
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
						{outils.map((outil, index) => (
							<div key={index} className="flex flex-col items-center space-y-3 transition-all duration-300 transform hover:scale-110">
								{outil.icon}
								<span className="text-xl text-gray-200 font-medium">{outil.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Outils;
