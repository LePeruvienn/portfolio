import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import { useTranslation } from 'react-i18next';

function FuncFats () {

	const { t } = useTranslation ("other");

	return (
		<>
			<Navbar />
			<div className="md-container min-h-screen">
				<h2>{t("funFacts")}</h2>
				<p>{t("funFactsIntro")}</p>
				<ul>
					<li>
						<strong>{t("videoGamesEnthusiast")}</strong> {t("videoGamesDesc")}
						<p>
							<a href="https://steamcommunity.com/id/jevaistegoumergrosnul/" target="_blank" rel="noopener noreferrer">
								{t("steamProfileLink")}
							</a>
						</p>
					</li>
					<li>
						<strong>{t("cybersecurityPassion")}</strong> {t("cybersecurityDesc")}
					</li>
					<li>
						<strong>{t("privacyOSINT")}</strong> {t("privacyOSINTDesc")}
					</li>
					<li>
						<strong>{t("linuxCustomization")}</strong> {t("linuxCustomizationDesc")}
					</li>
				</ul>
				<div>
					<img src="/portfolio/img/steamprofile.png" alt="Steam Profile" />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default FuncFats;
