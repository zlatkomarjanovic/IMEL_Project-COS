import React from 'react'
import DisplayItem from '../DisplayItem/DisplayItem'


const products = [
    {id: 1, title: 'First Item', price: '12$', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 2, title: 'Second Item', price: '12$', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 3, title: 'Third Item', price: '12$', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 4, title: 'Fourth Item', price: '12$', imgurl: 'https://i.pinimg.com/originals/6d/5f/9d/6d5f9d7c8946b29ea2b343e80335d559.jpg'},
    {id: 5, title: 'First Item', price: '12$', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 6, title: 'Second Item', price: '12$', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 7, title: 'Third Item', price: '12$', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 8, title: 'First Item', price: '12$', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 9, title: 'Second Item', price: '12$', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 10, title: 'Third Item', price: '12$', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'},
    {id: 11, title: 'First Item', price: '12$', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 12, title: 'Second Item', price: '12$', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 13, title: 'Third Item', price: '12$', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}, 
    {id: 14, title: 'First Item', price: '12$', imgurl: 'https://i.pinimg.com/736x/14/a6/9a/14a69ae13f20f3c62aab8adecfb5d239.jpg'}, 
    {id: 15, title: 'Second Item', price: '12$', imgurl: 'https://image.made-in-china.com/2f0j00gSYtCKIdgbrT/Men-Dress-Cotton-Latest-Shirt-Designs-for-Men-Hot-Sale-Men-Clothing.jpg'}, 
    {id: 16, title: 'Third Item', price: '12$', imgurl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/h-and-m-1586291968.jpeg?crop=1xw:1xh;center,top&resize=480:*'}
    
]


const Women = () => {
    return (
        <div className = "div_container_all">
            <h2>Men</h2>
            {
                products.map((product) =>(
                    <DisplayItem 
                        id={product.id} 
                        imgurl = {product.imgurl} 
                        title = {product.title}
                        price = {product.price}
                        /> 
                ))
            }
        </div>
    )
}

export default Women
