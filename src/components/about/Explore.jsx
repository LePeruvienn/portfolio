import { useState } from "react";

function Explore () {

	const sections = [
		{
			title: "Programmation Graphique",
			BgColor: "bg-teal-400",
			TextColor: "text-teal-400",
			paragraphs: [
				`J’ai passé beaucoup de temps à utiliser des <span class="font-bold">logiciels de création</span> d’images, de vidéos et de jeux vidéo. Ce sont des outils que j’apprécie particulièrement, car ils permettent aux artistes de donner vie à des univers incroyables. J’ai moi-même exploré ces logiciels, notamment avec <span class="font-bold">Unity</span>. Puis un jour, je me suis dit : <span class="italic font-bold">« Et si, au lieu de simplement les utiliser, je me mettais à en développer moi aussi ? »</span>`,
				`Je suis un grand fan de jeux vidéo, mais aussi de leur histoire et de l’évolution de leurs technologies. Après avoir acquis de l'expérience avec des moteurs de jeu, j’ai eu envie de m’essayer à de la programmation plus bas niveau. Je m’intéresse donc beaucoup en ce moment à la programmation en <span class="font-bold">C/C++</span>, ainsi qu’aux bibliothèques comme <span class="font-bold">SDL2</span> et <span class="font-bold">OpenGL</span>. Je suis encore débutant, mais j’ai une grande envie d’explorer le monde de la programmation graphique !`,
				`Ce qui m’a aussi beaucoup influencé dans cette voie, c’est mon premier stage. Ma mission était de développer un <span class="font-bold">outil de création de jeux vidéo</span> destiné à des personnes non programmeuses. Grâce aux bibliothèques propriétaires de l’entreprise, j’ai pu découvrir le développement de jeux à un niveau plus bas, ainsi que la création d’outils. C’est à ce moment-là que j’ai décidé de me lancer sérieusement dans cette direction !`,
				`J’aurais aimé pouvoir présenter des projets réalisés avec <span class="font-bold">OpenGL</span> ou <span class="font-bold">SDL2</span>, mais je n’en ai pas encore de finalisés. À côté de mes études, j’ai travaillé en <span class="font-bold">freelance</span> en tant que développeur d'outils & gameplay pour l'entreprise de mon stage. J’ai énormément appris durant cette période, mais cela m’a aussi pris beaucoup de temps !`,
			],
		},
		{
			title: "IA & Cybersécurité",
			BgColor: "bg-purple-400",
			TextColor: "text-purple-400",
			paragraphs: [
				`L'<span class="font-bold">IA</span> et la <span class="font-bold">cybersécurité</span> sont des sujets avec des enjeux majeurs dans la société actuelle. En tant qu'étudiant en informatique, je me tiens au courant des avancées et des défis du domaine, mais j’aimerais aussi <span class="font-bold">acquérir plus de compétences</span> là-dedans !`,
				`J’ai déjà touché un peu à l'<span class="font-bold">IA</span> durant mes études, ce qui m’a donné <span class="italic">quelques bases</span>, mais je sais que je suis encore loin du compte. Pour la <span class="font-bold">cybersécurité</span>, c’est un domaine qui n’a pas été exploré dans ma formation, donc j’apprends par moi-même, notamment via la plateforme <span class="italic">Root Me</span>. J’aimerais vraiment <span class="font-bold">aller plus loin</span> et plonger <span class="italic">en profondeur</span> dans cet univers fascinant.`,
				`Il me reste encore <span class="font-bold">beaucoup à apprendre</span>, mais c’est justement ça qui me <span class="italic">motive</span> !`
			],
		},
	];

	const [expandedSections, setExpandedSections] = useState(
		sections.map(() => false)
	);

	const toggleExpand = (index) => {
		setExpandedSections((prev) =>
			prev.map((expanded, i) => (i === index ? !expanded : expanded))
		);
	};

	return (
		<div className="space-y-6">
			{sections.map((section, index) => (
				<div key={index} className="space-y-2">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<div className={`w-3 h-3 rounded-full ${section.BgColor} flex-shrink-0`}></div>
							<h4 className={`ml-2 text-2xl font-semibold ${section.TextColor}`}>
								{section.title}
							</h4>
						</div>
					</div>

					{/* Affichage du premier paragraphe */}
					<p
						className="text-xl text-gray-300"
						dangerouslySetInnerHTML={{ __html: section.paragraphs[0] }}
					></p>

					{/* Affichage des paragraphes supplémentaires si la section est développée */}
					{expandedSections[index] &&
						section.paragraphs.slice(1).map((paragraph, i) => (
							<p
								key={i}
								className="mt-2 text-xl text-gray-300"
								dangerouslySetInnerHTML={{ __html: paragraph }} // Pas fier de celui la mais on tank pour la team B)
							></p>
						))}

					{/* Bouton voir plus */}
					{section.paragraphs.length > 1 && (
						<button
							className="mt-2 text-lg text-teal-400 hover:underline"
							onClick={() => toggleExpand(index)}
						>
							{expandedSections[index] ? "Voir moins" : "Voir plus"}
						</button>
					)}
				</div>
			))}
		</div>
	);
}

export default Explore;
