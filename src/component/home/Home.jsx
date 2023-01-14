import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './home.css'
import Hero from '../hero/Hero'
import About from '../about/About'
export default class Home extends Component {
  render() {
    return (
      <div className='home_page'>
        <Header />
        <About/>
        <Hero/>
        <Footer />
      </div>
    )
  }
}
