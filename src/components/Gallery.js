import React from 'react';
import './Gallery.css';
function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <div className='gallery' id='gallery'>
        <div className="row"> 

          <div className="column">
            <img src="./images/8.jpeg" />
            <img src="./images/3.jpeg" />
          </div>


          <div className="column">
            <img src="./images/2.jpeg" />
            <img src='./images/9.jpeg' />
            {/* <img src="./images/kisspng-wedding-invitation-vector-graphics-portable-networ-5cf0a2b136e7a9.8610740215592741612249.png" /> */}
          </div>


          <div className="column">
            <img src="./images/6.jpeg" />
            <img src='./images/1.jpeg' />
          </div>


          <div className="column">
            <img src='./images/7.jpeg' />
            {/* <img src="./images/kisspng-wedding-invitation-vector-graphics-portable-networ-5cf0a2b136e7a9.8610740215592741612249.png" /> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default Gallery;