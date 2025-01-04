
function Footer () {

	return (
		<footer className="relative !z-10 b-0 bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="#" className="flex items-center">
							<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
								Arthur PINEL
							</span>
						</a>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-white">
							Quick Links 
						</h2>
						<ul className="text-gray-400 font-medium">
							<li className="mb-4">
								<a href="/home" className="hover:underline"> Home </a>
							</li>
							<li className="mb-4">
								<a href="/about" className="hover:underline"> About </a>
							</li>
							<li className="mb-4">
								<a href="/projects" className="hover:underline"> Projects </a>
							</li>
							<li className="mb-4">
								<a href="/contact" className="hover:underline"> Contact </a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-white">
							Follow me
						</h2>
						<ul className="text-gray-400 font-medium">
							<li className="mb-4">
								<a
									href="https://github.com/LePeruvienn"
									target="_blank"
									className="hover:underline "
								>
									GitHub
								</a>
							</li>
							<li className="mb-4">
								<a 
									href="https://www.linkedin.com/in/arthur-pinel-87a91a270/"
									target="_blank"
									className="hover:underline"
								>
									Linkedin
								</a>
							</li>
							<li className="mb-4">
								<a 
									href="mailto:koto91@free.fr"
									target="_blank"
									className="hover:underline"
								>
									Mail
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm sm:text-center text-gray-400">
					© 2025 Arthur PINEL.
				</span>
			</div>
			</div>
		</footer>
	)
}

export default Footer;
