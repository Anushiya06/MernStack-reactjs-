import React from 'react'

const Gallery = (props) => {
  return (
    <div>
      <h4>welcome to {props.page} Page</h4>
      <img src="logo.png"alt="Logo"  />  
        <h2>the image is{props.img}</h2>
    </div>
  )
}

export default Gallery;