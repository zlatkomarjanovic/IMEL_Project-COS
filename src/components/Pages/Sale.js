import React from 'react'
import { Link } from 'react-router-dom'

const Women = () => {
    return (
        <div className = "overlapping_container">
            
                <div className = "class1"> 
                    <img className = "sale_img_1" alt = "Image of a woman" src = "https://images.pexels.com/photos/5480692/pexels-photo-5480692.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" /> 
                    <p>Women</p>
                    
                        <img className = "sale_img_2" alt = "Shoes for women" src = "https://ae01.alicdn.com/kf/HTB1xKfYXZnrK1RjSspkq6yuvXXam/New-2021-Women-Shoes-Flats-Designer-Shoes-Women-Luxury-Loafers-Fashion-Women-s-Flats-Office-Ladies.jpg_q50.jpg" /> 
                        <p> <span className = "color_orange">Sale </span> Women </p>
                    
                </div>
            

            
            <div className = "class1"> 
                    <img className = "sale_img_1" alt = "black man" src = "https://media.istockphoto.com/photos/beautiful-black-man-picture-id1082488184?k=6&m=1082488184&s=612x612&w=0&h=XfcWsVQsQbmyjxNg4YT4aO_dNXbWAU0MKaO1m2hxYrk=" /> 
                    <p>Men</p>
                    <img className = "sale_img_3" alt = "sandals men" src = "https://images-na.ssl-images-amazon.com/images/I/71usR3C-6DL._SL1500_.jpg" /> 
                    <p> <span className = "color_orange">Sale </span> Men </p>
            </div>
           

           <div className = "coats">
           <Link to = "/men">
                <img className = " coat_men " src = "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH4d35a363fd844fa5aeb5a481ce51f1090%2F2020-Autumn-And-Winter-Solid-Windbreaker-Jacket-2020-New-Men-Coat-Fashion-Long-Trench-Coats-Lapel.jpg" />
            </Link>
            <Link to = "/women">
                <img className = "coat_women" src = "https://ae01.alicdn.com/kf/HTB175NPax_rK1RkHFqDq6yJAFXaB/Long-Slim-Blend-Outerwear-2019-Women-Overcoat-Wool-Coat-Autumn-Winter-Jacket-Clothes.jpg_960x960.jpg" /> 
            </Link>
           </div>
        </div>
    )
}

export default Women
