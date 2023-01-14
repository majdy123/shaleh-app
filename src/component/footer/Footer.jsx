import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>
  <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item "><a href="#" className="nav-link px-2 text-muted">الصفحة الرئيسية</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">تسجيل الدخول</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">حول</a></li>
      
    </ul>
    <p className="text-center text-muted">© 2022 Company, Inc</p>
  </footer>
      </div>
    )
  }
}
