import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact () {
	
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<>
			<Navbar/>
			<div className="contact-container">
				{/* Titre */}
				<motion.h1
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-5xl md:text-6xl lg:text-8xl font-extrabold py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-400"
				>
					Contactez-moi
				</motion.h1>

				{/* Texte d'introduction */}
				<motion.p
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl py-4 text-gray-300 text-center"
				>
					Je suis disponible sur les réseaux sociaux et par email. N'hésitez pas à me contacter pour des collaborations, des questions ou simplement pour discuter !
				</motion.p>

				{/* Photo de profil */}
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="flex justify-center my-8"
				>
					<img
						src="/portfolio/img/pp.png"
						alt="Profil"
						className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-teal-400 shadow-lg"
					/>
				</motion.div>

				{/* Liens de contact */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mt-12 space-y-6"
				>
					{/* Email */}
					<motion.div
						variants={itemVariants}
						className="flex items-center justify-center space-x-4"
					>
						<FaEnvelope className="h-8 w-8 text-teal-400" />
						<a
							href="mailto:koto91@free.fr"
							className="text-teal-400 hover:text-teal-600 text-xl transition-colors duration-300"
						>
							koto91@free.fr
						</a>
					</motion.div>

					{/* Réseaux sociaux */}
					<motion.div
						variants={itemVariants}
						className="flex items-center justify-center space-x-8"
					>

						{/* LinkedIn */}
						<a
							href="https://www.linkedin.com/in/arthur-pinel-87a91a270/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-400 hover:text-teal-600 transition-colors duration-300"
						>
							<FaLinkedin className="h-8 w-8" />
						</a>

						{/* GitHub */}
						<a
							href="https://github.com/leperuvienn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-400 hover:text-teal-600 transition-colors duration-300"
						>
							<FaGithub className="h-8 w-8" />
						</a>

					</motion.div>
				</motion.div>
			</div>

			<Footer/>
		</>
	);
};

export default Contact;
