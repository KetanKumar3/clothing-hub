import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi velit sed sunt libero quis quia et iusto officia impedit, nobis, ducimus placeat eius quo accusantium. Modi, quis quod! Provident.</p>
      </div>
    </div>
  )
}

export default DescriptionBox