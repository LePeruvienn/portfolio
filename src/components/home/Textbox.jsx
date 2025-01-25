import UsefulLinks from '../general/UsefulLinks.jsx';
import { useTranslation } from 'react-i18next';

function Textbox() {
	const { t, i18n } = useTranslation();

	return (
		<div
			className="
				w-full 
				sm:w-[90%] 
				md:w-[75%] 
				lg:w-[60%] 
				xl:w-[50%] 
				mx-auto 
				p-6 sm:p-8 md:p-10
				text-white 
				bg-gray-900 
				drop-shadow-2xl 
				rounded 
				flex flex-col
			"
		>
			<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
				Hello World !
			</h2>

			<p className="my-2 sm:my-3 text-lg sm:text-xl">
				{t("headerP1")}
			</p>

			<p className="mb-2 sm:mb-3 text-lg sm:text-xl">
				{t("headerP2")}
			</p>

			<p className="mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl">
				{t("headerP3")}
			</p>

			<h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5">
				{t("checkTheseOut")}!
			</h1>

			<UsefulLinks />
		</div>
	);
}

export default Textbox;
