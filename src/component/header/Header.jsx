import React, { Component } from 'react'
import './header.css'
import Heroo from './hero-section-banner.jpg'
import Nav from '../navbar/Nav'
export default class Header extends Component {
  render() {
    return (
      <>
      <Nav/>
       <div className='header_home'>
       <div className='overlay_header'>
          <h1 className='main-title '>بدك شاليه ؟</h1>
          <h4 className='sub-title'>أكبر موقع شاليهات في فلسطين</h4>
        </div>
       </div>
      </>
    )
  }
}
