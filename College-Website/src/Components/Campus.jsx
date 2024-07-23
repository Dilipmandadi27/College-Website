import React from 'react'
import gallery_1 from "./../assets/gallery-1.png"
import gallery_2 from "./../assets/gallery-2.png"
import gallery_3 from "./../assets/gallery-3.png"
import gallery_4 from "./../assets/gallery-4.png"
import btnarrow from "../assets/white-arrow.png"


const Campus = () => {
  return (
    <div  className='campus-section'>
        <div className="gallery-item">
        <img src={gallery_1} alt="gallery-item1" />
        <img src={gallery_2} alt="gallery-item2" />
        <img src={gallery_3} alt="gallery-item3" />
        <img src={gallery_4} alt="gallery-item4" />
        </div>

        <button className='campus-btn'>See more here <img src={btnarrow} alt="btnarrow" /></button>
      
    </div>
  )
}

export default Campus
