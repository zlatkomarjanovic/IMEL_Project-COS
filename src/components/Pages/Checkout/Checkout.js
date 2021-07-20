import React, { Fragment, useState } from "react";
import Logo from "../../Logo/Logo";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Checkout = () => {
	const { cartTotal, totalUniqueItems, items, totalItems } = useCart();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [company, setCompany] = useState("");
	const [adress, setAdress] = useState("");
	const [apartment, setApartment] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			email,
			name,
			company,
			adress,
			apartment,
			postalCode,
			city,
			country,
			phone
		);
	};

	return (
		<Fragment>
			<div className='outer_checkout_container'>
				<div className='checkout_container'>
					<br /> <br /> <br /> <br />
					<Logo />
					<p style={{ textAlign: "center", color: "gray", margin: 10 }}>
						<span className='active'>Information </span>
						<i class='fa fa-angle-right'></i> Payment
						<i class='fa fa-angle-right'></i> Confirm
					</p>
					<div className='wrapper'>
						<form onSubmit={handleSubmit} className='form_signin_checkout'>
							<h2 style={{ float: "left" }} className='form-signin-heading'>
								Contact Information
							</h2>
							<input
								type='text'
								name='email'
								placeholder='Email Address'
								value={email}
								required=''
								autofocus=''
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							<h2 style={{ float: "left" }} className='form-signin-heading'>
								Shipping adress
							</h2>{" "}
							<br /> <br />
							<div className='name_and_surname'>
								<input
									type='text'
									className='f_name'
									name='First Name'
									placeholder='First Name'
									required=''
									autofocus=''
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type='text'
									className='f_name'
									name='Last Name'
									placeholder='Last Name'
									required=''
									autofocus=''
									value={surname}
									onChange={(e) => setSurname(e.target.value)}
								/>
							</div>
							<input
								type='text'
								name='Company'
								placeholder='Company (Optional)'
								required=''
								autofocus=''
								value={company}
								onChange={(e) => setCompany(e.target.value)}
							/>
							<input
								type='text'
								name='Adress'
								placeholder='Adress'
								required=''
								autofocus=''
								value={adress}
								onChange={(e) => setAdress(e.target.value)}
							/>
							<input
								type='text'
								name='Apartment'
								placeholder='Apartment, Suite, etc.. (Optional)'
								required=''
								autofocus=''
								value={apartment}
								onChange={(e) => setApartment(e.target.value)}
							/>
							<div className='name_and_surname'>
								<input
									type='text'
									className='f_name'
									name='Postal Code'
									placeholder='Postal Code'
									required=''
									autofocus=''
									value={postalCode}
									onChange={(e) => setPostalCode(e.target.value)}
								/>
								<input
									type='text'
									className='f_name'
									name='City'
									placeholder='City'
									required=''
									autofocus=''
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<input
								type='text'
								name='Country/Region'
								placeholder='Country/Region'
								required=''
								autofocus=''
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
							<input
								type='text'
								name='Phone (optional)'
								placeholder='Phone (optional)'
								required=''
								autofocus=''
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<input
								style={{ float: "right" }}
								className='button'
								type='submit'
								value='Continue to payment'
							/>
						</form>
					</div>
				</div>

				<div className='checkout_container1'>
					<h2>Cart</h2>
					{items.map((item, index) => {
						return (
							<Fragment>
								<img className='checkout_img' src={item.imgurl} />

								<div className='cart_container_data'>
									<h2>{item.title}</h2>
									<h3>
										$ {item.price} x {item.quantity}
									</h3>
									<br /> <br /> <br /> <br /> <br />
								</div>
							</Fragment>
						);
					})}{" "}
					<br />
					<br /> <br />
					<br />
					<hr className='line' />
					<h3>Total Items : {totalItems}</h3> <br />
					<h3>Total Unique Items : {totalUniqueItems}</h3> <br />
					<hr className='line' />
					<h2>Total : $ {cartTotal}</h2>
				</div>
			</div>
		</Fragment>
	);
};

export default Checkout;
