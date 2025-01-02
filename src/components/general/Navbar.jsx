import { NavLink } from "react-router-dom";

function Navbar () {

	return (
		<nav className="bg-blue-300 text-white z-10 font-sans flex flex-row justify-between py-4 px-52 absolute bg-transparent shadow w-full">
			<div className="mb-2 sm:mb-0">
				<a href="#" className="text-2xl text-grey-darkest">
					Arthur.
				</a>
			</div>
			<div className="w-120 flex flex-row justify-between items-center">
				<NavLink
					to="/home"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					Home
				</NavLink>
				
				<NavLink
					to="/book"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					About
				</NavLink>

				<NavLink
					to="/blog"
					className={({ isActive }) =>
						isActive ? "text-lg text-red-500" : "text-lg text-grey-darkest hover:text-red-500"
					}
				>
					Projects
				</NavLink>

				<button type="button" className="text-white text-lg font-bold bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
					Contact me!
				</button>

			</div>
		</nav>
	)
}

export default Navbar
