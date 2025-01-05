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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis orci lacus. Duis mollis felis sed diam mattis, vel sodales est dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
			</p>

			<p className="mb-3 text-xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis orci lacus. Duis mollis felis sed diam mattis, vel sodales est dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
			</p>

			<p className="mb-10 text-xl">
				Nulla convallis quam vel ultricies vestibulum. Sed et commodo arcu, in condimentum augue. Ut maximus varius tortor. Sed sed est congue, vestibulum risus vitae, feugiat lacus. Vestibulum tempus, mauris nec iaculis porta, lorem turpis sollicitudin urna, nec mollis est libero a velit.
			</p>

			<h1 className="text-5xl mb-5">
				Check these out!
			</h1>

			<UsefulLinks/>
		</div>
	);
}

export default Textbox;
