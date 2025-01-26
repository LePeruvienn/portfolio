import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Language from "./Language.jsx";
import { useTranslation } from 'react-i18next';
import { Menu, X } from "lucide-react"; // Icons for the burger menu.

function Navbar() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			id="navbar"
			className="sticky top-0 z-50 bg-gradient-to-b from-gray-900 to-black text-white font-sans shadow shadow-white w-full"
		>
			<div className="flex justify-between items-center px-6 py-4 lg:px-20">
				<div>
					<a href="#" className="text-2xl font-bold">
						Arthur <span className="animate-pulse"> _ </span>
					</a>
				</div>

				{/* Burger Icon for mobile */}
				<div className="lg:hidden flex">
					<button onClick={toggleMenu} className="text-white focus:outline-none">
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex space-x-6 items-center">
					<NavLink
						to="/home#"
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('home')}
					</NavLink>
					<NavLink
						to="/about#"
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('about')}
					</NavLink>
					<NavLink
						to="/projects#"
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('projects')}
					</NavLink>
					<NavLink
						to="/funfacts#"
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('other')}
					</NavLink>
					<Link to="/contact#">
						<button
							type="button"
							className="text-white bg-indigo-500 shadow-xl shadow-indigo-500/50 focus:ring-4 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
						>
							{t('contact')}!
						</button>
					</Link>
					<Language />
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden flex flex-col space-y-4 px-6 py-4">
					<NavLink
						to="/home#"
						onClick={toggleMenu}
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('home')}
					</NavLink>
					<NavLink
						to="/about#"
						onClick={toggleMenu}
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('about')}
					</NavLink>
					<NavLink
						to="/projects#"
						onClick={toggleMenu}
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('projects')}
					</NavLink>
					<NavLink
						to="/funfacts#"
						onClick={toggleMenu}
						className={({ isActive }) =>
							isActive
								? "text-lg text-indigo-400"
								: "text-lg text-gray-400 hover:text-indigo-400"
						}
					>
						{t('other')}
					</NavLink>
					<Link to="/contact#" onClick={toggleMenu}>
						<button
							type="button"
							className="text-white bg-indigo-500 shadow-xl shadow-indigo-500/50 focus:ring-4 focus:outline-none focus:ring-blue-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
						>
							{t('contact')}!
						</button>
					</Link>
					<div>
						<Language />
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
