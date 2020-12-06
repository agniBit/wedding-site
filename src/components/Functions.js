import React from 'react';
import './Functions.css';
import Function from './Function';
function Functions() {
  return (
      <div className='functions' id='functions'>
        <img src='images/separator.png' id='sep_top' />
        <h1>FUNCTIONS</h1>
          <div className='mehendi'>
            <Function
                fun_name='MEHENDI'
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='sangeet'>
            <Function
                fun_name='SANGEET'
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='haldi'>
          <Function
                fun_name='HALDI'
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='wedding'>
            <Function
                fun_name='WEDDING'
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='vidai'>
            <Function
                fun_name='VIDAI'
                imageName='images/v.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>
        <img src='images/separator.png' id='sep_bottom' />
      </div>
  );
}

export default Functions;