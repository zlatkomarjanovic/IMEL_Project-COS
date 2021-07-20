import React, { Fragment } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cartTotal, totalUniqueItems, items, totalItems } = useCart();

	return (
		<div id='minicart' className='mini_cart_content'>
			<h2>Your Mini Cart</h2>
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
			<Link to='/checkout'>
				<button className='button'>Checkout</button>
			</Link>
		</div>
	);
};

export default Cart;
