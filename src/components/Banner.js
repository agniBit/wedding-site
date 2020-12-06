import React from 'react';
import './Banner.css';
function Banner() {
  return (
      <div id='banner'>
          <div className='dec_top'>
              <img src='./images/banner_3.png' className='dec_top_img' />
          </div>
          <div className='banner_content'>
                <h1>Wedding</h1>
                <h3>11 Dec, 2020</h3>
                <h3>ML palace, Kannauj</h3>
          </div>
          <div className='dec_bottom'>
              <img src='./images/banner_3.png' className='dec_bottom_img' />
          </div>
      </div>
  );
}

export default Banner;