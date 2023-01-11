import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="imgContainer">
          <img src="/assets/img/logo-rocket.png" alt="" />
          <img src="/assets/img/logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header