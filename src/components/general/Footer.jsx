
function Footer () {

	return (
		<footer className="relative !z-10 b-0 bg-gray-900">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="#" className="flex items-center">
							<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Fabiola PINEL</span>
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
								<a href="/book" className="hover:underline"> Book </a>
							</li>
							<li className="mb-4">
								<a href="/blog" className="hover:underline"> Blog </a>
							</li>
							<li className="mb-4">
								<a href="/about" className="hover:underline"> About </a>
							</li>
							<li className="mb-4">
								<a href="/contact" className="hover:underline"> Contact </a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-white">
							Follow us
						</h2>
						<ul className="text-gray-400 font-medium">
							<li className="mb-4">
								<a
									href="https://www.facebook.com/share/zbAoQGwhXunNU7mF/"
									className="hover:underline "
								>
									Facebook
								</a>
							</li>
							<li className="mb-4">
								<a 
									href="https://x.com/Fabi_Pinel?t=PLn8R0BxezC-kaARAkdaXg&s=09"
									className="hover:underline"
								>
									X (Twitter)
								</a>
							</li>
							<li className="mb-4">
								<a 
									href="https://www.instagram.com/fabiartdanse?igsh=ZjZ0dGZ1M3FvZWIw" 
									className="hover:underline "
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://www.tiktok.com/@danzaentrecenizas?_t=8pAzIJxl7oG&_r=1" 
									className="hover:underline"
								>
									TikTok
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold uppercase text-white">
							Legal
						</h2>
						<ul className="text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm sm:text-center text-gray-400">
					© 2024 Fabiola PINEL. All Rights Reserved.
				</span>
			</div>
			</div>
		</footer>
	)
}

export default Footer;
