import React, { useState, useEffect, Fragment } from "react";
import DisplayItem from "../DisplayItem/DisplayItem";
import ItemDetailsWomen from "../ItemDetails/ItemDetailsWomen";

const products = [
	{
		id: 17,
		title: "First Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
	},
	{
		id: 18,
		title: "Second Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945",
	},
	{
		id: 19,
		title: "Third Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662",
	},
	{
		id: 20,
		title: "Fourth Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://sc04.alicdn.com/kf/HTB13O8yRXXXXXXQapXXq6xXFXXXS.jpg",
	},
	{
		id: 21,
		title: "First Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
	},
	{
		id: 22,
		title: "Second Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945",
	},
	{
		id: 23,
		title: "Third Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662",
	},
	{
		id: 24,
		title: "First Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
	},
	{
		id: 25,
		title: "Second Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945",
	},
	{
		id: 26,
		title: "Third Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662",
	},
	{
		id: 27,
		title: "First Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
	},
	{
		id: 28,
		title: "Second Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945",
	},
	{
		id: 29,
		title: "Third Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662",
	},
	{
		id: 30,
		title: "First Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl: "https://www.coverstory.co.in/media/cms/home/category/work.jpg",
	},
	{
		id: 31,
		title: "Second Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945",
	},
	{
		id: 32,
		title: "Third Item",
		price: "12",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		imgurl:
			"https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662",
	},
];

const Women = () => {
	const [currentItem, setCurrentItem] = useState(null);

	const viewItemInfo = (id) => {
		const filteredItem = products.filter((product) => product.id === id);
		const newCurrentItem = filteredItem.length > 0 ? filteredItem[0] : null;
		setCurrentItem(newCurrentItem);
	};

	const closeItemInfo = () => {
		setCurrentItem(null);
	};

	return (
		<Fragment>
			{" "}
			<h2 style={{ marginTop: 20, textAlign: "center" }}>Women</h2>
			{currentItem === null ? (
				<div className='div_container_all'>
					{products.map((product) => (
						<DisplayItem
							imgurl={product.imgurl}
							title={product.title}
							price={product.price}
							viewItemInfo={viewItemInfo}
							key={product.id}
							{...product}
						/>
					))}
				</div>
			) : (
				<ItemDetailsWomen
					currentItem={currentItem}
					closeItemInfo={closeItemInfo}
					products={products}
				/>
			)}
		</Fragment>
	);
};

export default Women;
