import React from 'react'
import WomanItem from './WomanItem'


const products = [
    {id: 1, title: 'First Item', price: '12$', imgurl: 'https://www.coverstory.co.in/media/cms/home/category/work.jpg'}, 
    {id: 2, title: 'Second Item', price: '12$', imgurl: 'https://cdn.shopify.com/s/files/1/2343/4045/products/womens-patchwork-fashion-designer-a-line-midi-dresses-plus-size-womens-fashion-designer-plus-size-dresses-international-womens-clothes_800x.jpg?v=1623919945'}, 
    {id: 3, title: 'Third Item', price: '12$', imgurl: 'https://cdn.shopify.com/s/files/1/2466/2147/products/WRW0492-PRP-1.jpg?v=1596633662'}, 
    {id: 4, title: 'Fourth Item', price: '12$', imgurl: 'https://sc04.alicdn.com/kf/HTB13O8yRXXXXXXQapXXq6xXFXXXS.jpg'}
    
]


const Women = () => {
    return (
        <div>
            {
                products.map((product) =>(
                    <WomanItem 
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
