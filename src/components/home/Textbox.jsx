import UsefulLinks from '../general/UsefulLinks.jsx';

function Textbox() {

	return (
		<div
			className="
				w-full mx-[25%] 
				p-10
				text-white
				bg-gray-900
				drop-shadow-2xl
				rounded
				flex flex-col
			"
		>
			<h2 className="text-5xl font-extrabold text-white">
				Hello World !
			</h2>

			<p className="my-3 text-xl">
				I am a passionate third-year Computer Science student with a deep interest in technology, creativity, and problem-solving. My journey has led me to explore various fields, from software development and web design to video game creation, where I combine technical expertise with my love for storytelling and interactive experiences.
			</p>

			<p className="mb-3 text-xl">
				This portfolio is a reflection of my growth, achievements, and aspirations. It showcases the projects that have shaped me, including innovative applications, websites, and video games. Through these projects, I have developed not only my technical skills but also my creativity and ability to bring ideas to life.
			</p>

			<p className="mb-10 text-xl">
				My goal is to use this space to connect with like-minded professionals, share my passion for technology and game development, and inspire others to embrace innovation and learning.
			</p>

			<h1 className="text-5xl mb-5">
				Check these out!
			</h1>

			<UsefulLinks/>
		</div>
	);
}

export default Textbox;
