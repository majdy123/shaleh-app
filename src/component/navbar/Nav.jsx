import React, { Component } from 'react'
import './nav.css'
import Logo from './logo.png'

export default class Nav extends Component {
  render() {
    return (
      <>
    <nav className='Nav_align'>
       
        <div>
        <ul className='navlist'>
          <li className='element'><a  className='link' href="#">الصفحة الرئيسية</a></li>
          <li className='element'><a className='link'  href="#">تسجيل الدخول</a></li>
          <li className='element'><a  className='link' href="#">حول</a></li>
        </ul>
      </div>
      <div className='logoContainer' >
          <a  href="#"><img src={Logo} alt="BooNametstrap" className='logo'/></a>
        </div>
    </nav>
    
      </>
    )
  }
}
