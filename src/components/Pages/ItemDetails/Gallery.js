import React from 'react'

const Gallery = ({imgurl}) => {
    return (
        <div className="gallery_container">
            <img className = "gallery" src = {imgurl} /> 
            <img className = "gallery"  src = {imgurl} /> 
            <img className = "gallery"  src = {imgurl} /> 
            <img className = "gallery"  src = {imgurl} /> 
        </div>
    )
}

export default Gallery
