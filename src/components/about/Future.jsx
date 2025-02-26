import { useState } from "react";
import { useTranslation } from "react-i18next";

const Future = () => {

	const { t } = useTranslation("about");
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="mt-4 flex flex-col md:flex-row md:space-x-6 relative">
			<div className="text-xl text-gray-200 p-4 md:p-0 relative z-10">
				<p dangerouslySetInnerHTML={{ __html: t("future.mainText") }} />
				
				{showMore && (
					<p 
						className="mt-2"
						dangerouslySetInnerHTML={{ __html: t("future.additionalText") }}
					/>
				)}

				<button
					className="mt-2 text-lg text-teal-400 hover:underline"
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? t("future.seeLess") : t("future.seeMore")}
				</button>
			</div>

			<img 
				src="/portfolio/img/thinking.png" 
				alt={t("future.imageAlt")} 
				className="w-full md:w-1/4 max-h-[250px] object-contain rounded-lg shadow-lg md:block hidden"
			/>
		</div>
	);
};

export default Future;
