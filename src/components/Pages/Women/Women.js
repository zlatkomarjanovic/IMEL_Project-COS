import React, {useState, useEffect, Fragment} from 'react'
import DisplayItem from '../DisplayItem/DisplayItem'
import ItemDetailsWomen from '../ItemDetails/ItemDetailsWomen'

const products = [
    {id: 1, title: 'First Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 2, title: 'Second Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 3, title: 'Third Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'}, 
    {id: 4, title: 'Fourth Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://sc04.alicdn.com/kf/HTB13O8yRXXXXXXQapXXq6xXFXXXS.jpg'},
    {id: 5, title: 'First Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 6, title: 'Second Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 7, title: 'Third Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'}, 
    {id: 8, title: 'First Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 9, title: 'Second Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 10, title: 'Third Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'},
    {id: 11, title: 'First Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 12, title: 'Second Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 13, title: 'Third Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'}, 
    {id: 14, title: 'First Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 15, title: 'Second Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 16, title: 'Third Item', price: '12$', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'}
    
]


const Women = () => {

    const [currentItem, setCurrentItem] = useState(null); 


    const viewItemInfo = (id) => {
        const filteredItem = products.filter(product => product.id === id)
        const newCurrentItem = filteredItem.length > 0 ? filteredItem[0] : null
        setCurrentItem(newCurrentItem)
    }

    const closeItemInfo = () => {
        setCurrentItem(null); 
    }


    return (<Fragment>
        {currentItem === null ? <div className = "div_container_all">
            <h2>Women</h2>
            {
                products.map((product) =>(
                    <DisplayItem  
                        imgurl = {product.imgurl} 
                        title = {product.title}
                        price = {product.price}
                        viewItemInfo = {viewItemInfo}
                        key = {product.id}
                        {...product}
                        /> 
                ))
            }
        </div>
        : 

        <ItemDetailsWomen
            currentItem = {currentItem}
            closeItemInfo = {closeItemInfo}
            products = {products}
            
        /> }
    </Fragment>
)
}

export default Women
