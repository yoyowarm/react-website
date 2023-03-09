import Form from './Form'
import './index.css'
const ContactUs = () => {
	return (
		<div className='contact column-2'>
			<div className='text-center p-2 sm:p-14 pt-2'>
				<h2>Contact Us</h2>
				<p className='mt-2'>If you have any questions or comments about our LBS system, please don't hesitate to contact us using the form below. Our team is always here to help you discover your personal universe.</p>
				<h4 className='mt-6 text-xl'>Write to</h4>
				<p className='email'>consultant@mzyme.xyz</p>
				<p>Or use the contact form,
					we will get back to you
					in 3 working days.</p>
			</div>
			<Form />
		</div>
	);
}

export default ContactUs;