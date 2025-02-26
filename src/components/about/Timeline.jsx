import { useTranslation } from "react-i18next";

function Timeline() {

	const { t } = useTranslation("about");
	const timelineData = t("timeline.items", { returnObjects: true });
	
	const colorMap = {
		"teal-400": "border-teal-400",
		"indigo-400": "border-indigo-400",
		"purple-400": "border-purple-400",
		"purple-500": "border-purple-500",
	};

	return (
		<div className="relative space-y-12 pb-12">
			<div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2"></div>
			
			{timelineData.map((item, index) => (
				<div key={index} className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
					<div className="md:w-5/12 p-6 bg-gray-800 rounded-lg shadow-lg text-center md:text-left">
						<h3 className={`mb-2 pb-1 text-xl font-bold border-b-2 ${colorMap[item.color]}`}>
							{item.title}
						</h3>
						<p className="text-gray-400 font-semibold">{item.context}</p>
						<p className="text-gray-400 italic">{item.year}</p>
						<p className="text-gray-300 mt-2">{item.description}</p>
					</div>
					<div className="hidden md:flex md:w-2/12 justify-center">
						<div className={`w-6 h-6 ${colorMap[item.color].replace("border-", "bg-")} rounded-full shadow-lg`}></div>
					</div>
					<div className="md:w-5/12"></div>
				</div>
			))}
		</div>
	);
}

export default Timeline;
