import React from 'react';
import './Functions.css';
function Function(props) {
  return (
      <div className='fun_container'>
          <h1>{props.fun_name}</h1>
          <div className='fun_img_wrap'>
            <img src={props.imageName} className='fun_img' />
          </div>
          <div className='fun_details'>
              <div className='fun_date'>
                <div className='container-icon-details'>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  <h4>{props.date}</h4>
                </div>
              </div>
              <div className='fun_time'>
              <div className='container-icon-details'>
                <i class="far fa-clock"></i>
                <h4>{props.time}</h4>
                </div>
              </div>
              <div className='fun_add1'>
              <div className='container-icon-details'>
                <i class="fa fa-home" aria-hidden="true"></i>
                <h4>{props.addr1}</h4>
                </div>
              </div>
              <div className='fun_addr2'>
              <div className='container-icon-details'>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <h4>{props.addr2}</h4>
                </div>
              </div>
          </div>
      </div>
  );
}

export default Function;