import UsefulLinks from '../general/UsefulLinks.jsx';
import { useTranslation } from 'react-i18next';

function Textbox() {

	const { t, i18n } = useTranslation();

	return (
		<div
			className="
				w-full mx-[25%] 
				p-10
				text-white
				bg-gray-900
				drop-shadow-2xl
				rounded
				flex flex-col
			"
		>
			<h2 className="text-5xl font-extrabold text-white">
				Hello World !
			</h2>

			<p className="my-3 text-xl">
				{ t ("headerP1") }
			</p>

			<p className="mb-3 text-xl">
				{ t ("headerP2") }
			</p>

			<p className="mb-10 text-xl">
				{ t ("headerP3") }
			</p>

			<h1 className="text-5xl mb-5">
				{ t ("checkTheseOut") }!
			</h1>

			<UsefulLinks/>
		</div>
	);
}

export default Textbox;
