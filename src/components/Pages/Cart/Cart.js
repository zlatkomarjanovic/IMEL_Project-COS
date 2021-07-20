import React, { Fragment } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
	const {
		cartTotal,
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty)
		return (
			<div>
				<h2>Your Cart is Empty</h2>
			</div>
		);
	return (
		<div className='outer_container'>
			<button className='button_red' onClick={() => emptyCart()}>
				{" "}
				Empty Cart{" "}
			</button>
			<h5>
				Total Unique Items : {totalUniqueItems} <br /> Total Items :{" "}
				{totalItems}
			</h5>

			{items.map((item, index) => {
				return (
					<Fragment>
						<div className='cart_container'>
							<img className='woman_item_image' src={item.imgurl} />

							<div className='cart_container_data'>
								<h1>{item.title}</h1>
								<h3>$ {item.price}</h3>
								<p> Quantity of this item : {item.quantity} </p>
								<button
									className='add_to_cart'
									onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
								>
									{" "}
									-{" "}
								</button>
								<button
									className='add_to_cart'
									onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
								>
									{" "}
									+{" "}
								</button>
								<button
									className='button_red'
									onClick={() => removeItem(item.id)}
								>
									{" "}
									Remove Item{" "}
								</button>
							</div>
						</div>
					</Fragment>
				);
			})}

			<h2>Total Price : $ {cartTotal}</h2>
			<Link to='/checkout'>
				<button className='button_blue'>Checkout</button>
			</Link>
		</div>
	);
};

export default Cart;
