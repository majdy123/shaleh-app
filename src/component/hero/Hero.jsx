import React, { Component } from 'react'
import './hero.css'
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import Img4 from './img4.jpg'
import Img5 from './img5.jpg'
import Img6 from './img6.jpg'

export default class Hero extends Component {
  render() {
    return (
      <>
      <center>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
    <img src={Img1} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary'>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Img2} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary '>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Img3} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary'>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Img4} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary '>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Img5} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary hover bttn'>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Img6} className="d-block w-100 carosel-img" alt="صورة شاليه"/>
    <div class="carousel-caption d-none d-md-block">
    <button className='bg-primary '>احجز الشاليه الخاص بك الان</button>

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </center>
     

      </>
    )
  }
  }

