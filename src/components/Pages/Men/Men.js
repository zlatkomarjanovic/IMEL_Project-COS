import React , {useEffect, useState, Fragment} from 'react'
import DisplayItem from '../DisplayItem/DisplayItem'
import ItemDetails from '../ItemDetails/ItemDetails'


const products = [
    {id: 1, title: 'First Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 2, title: 'Second Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 3, title: 'Third Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 4, title: 'Fourth Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/originals/6d/5f/9d/6d5f9d7c8946b29ea2b343e80335d559.jpg'},
    {id: 5, title: 'First Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 6, title: 'Second Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 7, title: 'Third Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 8, title: 'First Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 9, title: 'Second Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 10, title: 'Third Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'},
    {id: 11, title: 'First Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 12, title: 'Second Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 13, title: 'Third Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 14, title: 'First Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 15, title: 'Second Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 16, title: 'Third Item', price: '12', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}
    
]


const Men = () => {

    
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
                <h2 style = {{marginTop: 20}}>Men</h2>
                {
                    products.map((product) =>(
                        <DisplayItem  
                            imgurl = {product.imgurl} 
                            title = {product.title}
                            price = {product.price}
                            viewItemInfo = {viewItemInfo}
                            key = {product.id}
                            item = {product}
                            {...product}
                            /> 
                    ))
                }
            </div>
            : 

            <ItemDetails 
                currentItem = {currentItem}
                closeItemInfo = {closeItemInfo}
                products = {products}
                
            /> }
        </Fragment>
    )
}

export default Men
