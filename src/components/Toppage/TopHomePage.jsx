import React from 'react'
import './TopHome.css'
import CircleFonts from '../../utils/CircleFonts'
import { Pictures } from '../../utils/images'

function TopHomePage() {
  return (
    <div className='top-home'>
      <div className='first-row'>
        <h3>Darcy's<br />
          insurance<br />
          products
        </h3>
      </div>
      <div className='second-row'>
        <div>
        <CircleFonts />
          <p>Our <span className="light-blue">plans</span> are saving policyholders 30% - 60% on premiums</p>
        </div>
        <div>
        <CircleFonts />
          <p>We offer a choice of law deductibles and include no cost value-added services</p>
        </div>
        <div className='myimage'>
  <img src={Pictures.Arrow} alt="arrow" style={{ height: '100px', width: '10px', color: 'white' }} className='arrow-icon' />
</div>

      </div>
      <div className='third-row'>
        <img src={Pictures.Baloon} style={{ height: '500px', width: '250px'  }} alt="Baloon" />
      </div>
    </div>
  )
}

export default TopHomePage;