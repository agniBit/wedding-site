import React from 'react';
import './Functions.css';
import Function from './Function';
function Functions() {
  return (
      <div className='functions' id='functions'>
        <img src='images/separator.png' id='sep_top' />
        <h1>FUNCTIONS</h1>

          <div className='sangeet'>
            <Function
                fun_name='SANGEET'
                imageName='images/sangeet.webp'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='haldi'>
          <Function
                fun_name='HALDI'
                imageName='images/haldi.jpg'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='wedding'>
            <Function
                fun_name='WEDDING'
                imageName='images/wedding.webp'
                date='11 Dec, 2020'
                time='5:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='vidai'>
            <Function
                fun_name='VIDAI'
                imageName='images/VIDAI-CEREMONY.jpg'
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