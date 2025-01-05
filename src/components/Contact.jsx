import Navbar from './general/Navbar.jsx';
import Footer from './general/Footer.jsx';

function Contact() {
	return (
		<>
			<Navbar />
			<div className="contact-container">
				<h1>Contact Me</h1>

				<p>
					Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'll get back to you as soon as possible.
				</p>

				<form className="contact-form">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Write your message here"
							rows="6"
							required
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
