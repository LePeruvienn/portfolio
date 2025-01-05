import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';
import UsefulLinks from './general/UsefulLinks.jsx';

function About() {

	return (
		<>
			<Navbar />
			<div className="about-container">

				<h1>
					About Me
				</h1>

				<p>
					Currently a third-year student in <strong>Computer Science at the University of Paris-Saclay</strong>, I am passionate about technology and creation. My journey has allowed me to explore a wide range of fields, from complex IT projects to creative and sports activities, which have enriched my perspective and work methodology.
				</p>

				<h2>Academic and Professional Background</h2>

				<p>
					My interest in science and technology emerged early in high school, where I followed a General Baccalaureate with specializations in Mathematics, Physics, and Engineering Sciences. After a year in Physical Measurements at the IUT of Orsay, I discovered my true calling in computer science and joined the Computer Science Bachelor’s degree (BUT), where I am currently in my third year.
				</p>

				<p>
					Alongside my studies, I have gained significant experience through academic, personal, and professional projects:
				</p>

				<ul>
					<li>
						<strong>Freelance Developer</strong>, Gameplay programmer for web games. 
					</li>
					<li>
						<strong>Internship at WebGames</strong>, Development of a video game creation tool.
					</li>
				</ul>

				<h2>Some Projects</h2>

				<p>
					<strong>IT Projects :</strong>
				</p>

				<ul>
					<li>
						<strong>Web FullStack</strong>, Developpement of complete Web Application for companies
					</li>
					<li>
						<strong>Software Developpent</strong>, Developpement of Application in JAVA and C#, linke to a MySQL database.
					</li>
					<li>
						<strong>Data Analysis</strong>, from Our World in Data on natural and technological disasters with GrapDB.
					</li>
					<li>
						<strong>Network and Systems</strong>, Configuration of Apache Server, Network configurations (routers, firewall, ...).
					</li>
				</ul>

				<p><strong>Creative and Fun Projects :</strong></p>
				<ul>
					<li>
						<strong>Graphic design</strong>, YouTube thumbnails and streaming interfaces with Photoshop and GIMP.
					</li>
					<li>
						<strong>Video Editing</strong>, Using Sony Vegas to create Anime Animated videos (AMV).
					</li>
					<li>
						<strong>Game Developpement</strong>, Multiplayer and solo games using Unity 3D.
					</li>
				</ul>

				<p><a href="/projects"> To see more of my projects ... </a></p>

				<h2>Technical and Personal Skills</h2>

				<p><strong>Technologies and Tools:</strong> HTML/CSS, JavaScript, Python, Java, C/C++, C#, Unity 3D, MySQL, Git.</p>
				<p><strong>Methodologies:</strong> Project management using Agile (Scrum), version control with GitHub.</p>
				<p><strong>Soft Skills:</strong> Curiosity, adaptability, teamwork, creativity, and organization.</p>

				<h2>A Versatile and Dynamic Profile</h2>

				<p>Outside of my academic and professional projects, my extracurricular activities have also helped shape my personality and ability to take on challenges:</p>

				<ul>
					<li><strong>Sports Activities:</strong> 5 years of drumming, 5 years of scuba diving (both in pools and at sea), and 2 years of Kung Fu.</li>
					<li><strong>Creative Passions:</strong> Video games, music, and exploring new technologies.</li>
					<li><strong>IT Passions:</strong> Linux System Configuration, Cybersecuruty, OSINT, Learning new Skills.</li>
				</ul>

				<h2>My Vision</h2>

				<p>I am driven by the search for innovative solutions and the creation of impactful projects, whether they are fun, educational, or utilitarian. My goal is to continue learning, adapting, and leveraging my skills to meet increasingly ambitious challenges.</p>

				<h2>Useful Links</h2>
				<p>
					In case you missed them on the home page ...
				</p>
				<UsefulLinks/>
			</div>
			<Footer />
		</>
	);
}

export default About;
