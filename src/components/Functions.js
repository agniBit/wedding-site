import React from 'react';
import './Functions.css';
import Function from './Function';
function Functions() {
  return (
      <div className='functions' id='functions'>
        <h1>FUNCTIONS</h1>
        <div className='fun_ul'>
          <div className='tilak'>
            <Function
                fun_name='TILAK'
                imageName='images/tilak.jpeg'
                date='11 Dec, 2020'
                time='11:00am'
                addr1='M.J. palace'
                addr2='Kannauj'
            />
          </div>

          <div className='lunch'>
          <Function
                fun_name='LUNCH'
                imageName='images/lunch.jpg'
                date='11 Dec, 2020'
                time='7:00pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>
          </div>
        
        <div className='fun_ul'>
          <div className='wedding'>
            <Function
                fun_name='WEDDING'
                imageName='images/wedding.webp'
                date='11 Dec, 2020'
                time='7:30pm'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>

          <div className='vidai'>
            <Function
                fun_name='VIDAI'
                imageName='images/VIDAI-CEREMONY.jpg'
                date='12 Dec, 2020'
                time='8:00am'
                addr1='MJ palace'
                addr2='Kannauj'
            />
          </div>
        </div>
      </div>
  );
}

export default Functions;