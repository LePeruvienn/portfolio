import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import FranceFlag from "./flags/France.jsx";
import UkFlag from "./flags/Uk.jsx";


function Language () {

	// il18n Setup
	const { i18n } = useTranslation ();
	// Chaging language function
	const handleLanguageChange = (lng) => {

		i18n.changeLanguage (lng);
		toggleDropdown ();
	};

	// Setting language list
	const languages = [

		{
			code: "en",
			elt: <UkFlag/>
		},
		{
			code: "fr",
			elt: <FranceFlag/>
		},
	];

	// Creating flags element list
	const flags = {

		en: <UkFlag/>,
		fr: <FranceFlag/>,
	};

	// State for dropdown
	const [dropdownOpen, setDropdownOpen] = useState (false);

	// Toogle dropdown function
	const toggleDropdown = () => {

		setDropdownOpen (!dropdownOpen);
	};

	return (
		<div>
			<button 
				className="inline-flex items-center" 
				type="button"
				onClick={toggleDropdown}
			> 
				{ flags[i18n.language] }
				<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
				</svg>
			</button>
			{dropdownOpen && (
				<div className="absolute z-10 bg-gray-800 bg-opacity-30 divide-y divide-gray-100 rounded-lg shadow">
					<ul className="p-2">
						{ languages
							.filter (lang => lang.code !== i18n.language)
							.map ((lang) => (
							<li 
								key={ lang.code }
								onClick={() => (handleLanguageChange (lang.code))}
							>
								{ lang.elt }
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Language;
