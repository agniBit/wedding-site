import React from 'react';
import  './VideoSec.css';
function VideoSec() {
  return (
      <div className='videosec' id='videosec'>
          <h1>
            glimpse of Bride and Groom
          </h1>
          <div className='vd_wrap'>
            <video className='vd' controls autoplay>
                <source src="images/vd1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           </div>
      </div>
  );
}

export default VideoSec;