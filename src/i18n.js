import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAbout from "./locales/en/about.json";
import enContact from "./locales/en/contact.json";
import enGeneral from "./locales/en/general.json";
import enHome from "./locales/en/home.json";
import enOther from "./locales/en/other.json";
import enProjects from "./locales/en/projects.json";
import enExplore from "./locales/en/explore.json";

import frAbout from "./locales/fr/about.json";
import frContact from "./locales/fr/contact.json";
import frGeneral from "./locales/fr/general.json";
import frHome from "./locales/fr/home.json";
import frOther from "./locales/fr/other.json";
import frProjects from "./locales/fr/projects.json";
import frExplore from "./locales/fr/explore.json";


i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				about: enAbout,
				contact: enContact,
				general: enGeneral,
				home: enHome,
				other: enOther,
				projects: enProjects,
				explore: enExplore,
			},
			fr: {
				about: frAbout,
				contact: frContact,
				general: frGeneral,
				home: frHome,
				other: frOther,
				projects: frProjects,
				explore: frExplore,
			},
		},
		lng: "en", // Langue par défaut
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: true, // Important pour les re-rendus
			bindI18n: "languageChanged", // Événement déclencheur
		},
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
	});

export default i18n;
