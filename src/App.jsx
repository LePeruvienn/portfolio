import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		// Detect browser language and normalize (e.g., "en-US" -> "en")
		const browserLanguage = (navigator.language || navigator.userLanguage).split('-')[0];

		// Check if the detected language is supported otherwise, fallback to "en"
		const supportedLanguages = ['en', 'fr']; // Add your supported languages here

		if (supportedLanguages.includes(browserLanguage))
			i18n.changeLanguage(browserLanguage);
		else
			i18n.changeLanguage('en'); // Fallback

	}, [i18n]);

	return (
		<HashRouter>
			{/* Scroll to top on route change */}
			<ScrollToTop />

			{/* Define your routes */}
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
