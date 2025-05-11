import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
       <div className='content'>
        <h1 className='title'>movie name</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
       </div>

       <div className="fade"></div>
    </div>
  )
}

export default Banner
