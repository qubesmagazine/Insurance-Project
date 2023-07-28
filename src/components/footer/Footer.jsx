import React from 'react'
import './FooterStyle.css'
import Rollerwhite from '../Rollers/Rollerwhite'

function Footer() {
  return (
    <div className='footerColor'>
      <div class='spinnerD'>
        <Rollerwhite />
        <p>Darcy's insurance product</p>
      </div>
      <div>
      <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
