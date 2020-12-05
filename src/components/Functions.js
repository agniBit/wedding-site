import React from 'react';
import './Functions.css';
import Function from './Function';
function Functions() {
  return (
      <div className='functions' id='functions'>
          <div className='mehendi'>
            <Function
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='sangeet'>
            <Function
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='haldi'>
          <Function
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='wedding'>
            <Function
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='vidai'>
            <Function
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>
      </div>
  );
}

export default Functions;