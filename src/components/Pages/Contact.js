import React from "react";

const Contact = () => {
	return (
		<div>
			<div className='wrapper'>
				<div className='form-signin'>
					<h2 className='form-signin-heading'>Feel free to contact us</h2>
					<input
						type='text'
						className='form-control'
						name='email'
						placeholder='Email Address'
						required=''
						autofocus=''
					/>
					<input
						type='text'
						className='form-control'
						name='Name and Surname'
						placeholder='Your Name and Surname'
						required=''
						autofocus=''
					/>{" "}
					<br />
					<input
						type='text'
						className='form-control'
						name='Subject'
						placeholder='Subject'
						required=''
						autofocus=''
					/>{" "}
					<br />
					<textarea
						className='form_control_textarea'
						placeholder='Enter your message...'
						name='w3review'
						rows='4'
						cols='50'
					></textarea>
					<button className='button' type='submit'>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
