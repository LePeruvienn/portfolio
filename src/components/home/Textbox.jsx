import UsefulLinks from '../general/UsefulLinks.jsx';
import { useTranslation } from 'react-i18next';

function Textbox() {
	const { t, i18n } = useTranslation ("home");

	return (
		<div
			className="
				w-full h-full sm:h-auto
				sm:w-[90%] 
				md:w-[75%] 
				lg:w-[65%] 
				xl:w-[50%] 
				mx-auto my-0 sm:my-12
				pb-20 p-6 sm:p-8 md:p-10
				text-gray-400 
				bg-gray-900 
				bg-opacity-85 sm:bg-opacity-100
				drop-shadow-2xl 
				flex flex-col
			"
		>
			<h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2">
				Hello World !
			</h2>

			<p className="my-2 sm:my-3 text-lg sm:text-xl md:text-2xl">
				{t("headerP1")}
			</p>

			<p className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl">
				{t("headerP2")}
			</p>

			<p className="mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl">
				{t("headerP3")}
			</p>

			<h1 className="text-white text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5">
				{t("checkTheseOut")}
			</h1>

			<UsefulLinks />
		</div>
	);
}

export default Textbox;
