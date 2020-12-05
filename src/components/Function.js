import React from 'react';
import './Functions.css';
function Function(props) {
  return (
      <div className='fun_container'>
          <div className='fun_img_wrap'>
            <img src={props.imageName} className='fun_img' />
          </div>
          <div className='fun_details'>
              <div className='fun_date'>
                  <h4>{props.date}</h4>
              </div>
              <div className='fun_time'>
                  <h4>{props.time}</h4>
              </div>
              <div className='fun_add1'>
                  <h4>{props.addr1}</h4>
              </div>
              <div className='fun_addr2'>
                  <h4>{props.addr2}</h4>
              </div>
          </div>
      </div>
  );
}

export default Function;