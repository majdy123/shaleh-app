import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <div className='home_page'>
        <Header />
        <Footer />
      </div>
    )
  }
}
