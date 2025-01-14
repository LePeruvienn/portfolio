import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import Language from "./Language.jsx";
import { useTranslation } from 'react-i18next';

function Navbar () {

	const { t, i18n } = useTranslation();

	return (
		<nav id="navbar" className="sticky top-0 !z-50 border-solid border-y-1 border-gray-400 bg-gradient-to-b from-gray-900 to-black text-white font-sans flex flex-row justify-between py-4 px-52 shadow shadow-white w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest">
					Arthur <span className="animate-pulse"> _ </span>
				</a>
			</div>
			<div className="w-120 flex flex-row justify-between items-center">
				<NavLink
					to="/home#"
					className={({ isActive }) =>
						isActive ? "text-lg text-indigo-500" : "text-lg text-grey-darkest hover:text-indigo-500"
					}
				>
					{ t('home') }
				</NavLink>
				
				<NavLink
					to="/about#"
					className={({ isActive }) =>
						isActive ? "text-lg text-indigo-500" : "text-lg text-grey-darkest hover:text-indigo-500"
					}
				>
					{ t('about') }
				</NavLink>

				<NavLink
					to="/projects#"
					className={({ isActive }) =>
						isActive ? "text-lg text-indigo-500" : "text-lg text-grey-darkest hover:text-indigo-500"
					}
				>
					{ t('projects') }
				</NavLink>

				<NavLink
					to="/funfacts#"
					className={({ isActive }) =>
						isActive ? "text-lg text-indigo-500" : "text-lg text-grey-darkest hover:text-indigo-500"
					}
				>
					{ t('other') }
				</NavLink>
				
				<Link to="/contact#">
					<button
						type="button"
						className="text-white bg-indigo-500 shadow-xl shadow-indigo-500/50 focus:ring-4 focus:outline-none focus:ringblue font-bold rounded-lg text-sm px-5 py-2.5 text-center"
					>
						{ t('contact') }!
					</button>
				</Link>
				<Language/>
			</div>
		</nav>
	)
}

export default Navbar
