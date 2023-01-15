import React, { Component } from 'react'
import BasicCard from '../card/BasicCard';
import Footer from '../footer/Footer'
import Header from '../header/Header'

const shales=[
    {
        name:'shaleh1',
        location:'nabuls',
        price:1200
    }
    ,
    {
        name:'shaleh2',
        location:'Tulkarm',
        price:800
    }
    ,
    {
        name:'shaleh3',
        location:'jercoh',
        price:1500
    }

];

export default class View extends Component {
  render() {
    return (
      <div>
        <Header/>


{
    shales.map(shaleh=>{
        return(
            
            <div key={shaleh.name}>
                <BasicCard name={shaleh.name} location={shaleh.location} price={shaleh.price}/>
            </div>
            
        )
    })
}

        <Footer/>
        
        </div>
    )
  }
}
