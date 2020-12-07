import React from 'react';
import  './VideoSec.css';
function VideoSec() {
  return (
      <div className='videosec' id='vdo'>
          <h1>
            INVITATION
          </h1>
          <div className='vd_wrap'>
            <video className='vd' controls autoplay>
                <source src="images/1607337768.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           </div>
      </div>
  );
}

export default VideoSec;