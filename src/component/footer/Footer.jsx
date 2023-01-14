import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
  <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item "><a href="#" className="nav-link px-2 text-muted" > <span className='footer-link'>
      الصفحة الرئيسية
        </span>  </a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"  > <span className='footer-link'>
      تسجيل الدخول
        </span></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"  > <span className='footer-link'>
      حول
        </span>      </a></li>
      
    </ul>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-whatsapp"></i>
    <i className="fa-brands fa-instagram"></i>

    </ul>
    <p className="text-center text-muted foot fs-5" >© 2023 Vision, Inc</p>
  </footer>
      </div>
    )
  }
}
