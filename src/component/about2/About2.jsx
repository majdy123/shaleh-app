import React, { Component } from 'react'
import Info from './info2.png'
import './about2.css'
export default class About2 extends Component {
  render() {
    return (

      <div id='about'>
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={Info} alt="" width="100" height="100"></img>
            <h1 className="display-5 fw-bold">من نحن ؟</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 info-data">
                  موقع بدك شاليه هو موقع متخصص في عرض الشاليهات المتواجدة في فلسطين بطريقة مرتبة تتيح للمستخدمين حجز الشاليه المناسب بالسعر و المواصفات المطلوبة
              </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              </div>
            </div>
          </div>
          <div className="b-example-divider"></div>
          <div className="b-example-divider"></div>
      </div>
    )
  }
}
