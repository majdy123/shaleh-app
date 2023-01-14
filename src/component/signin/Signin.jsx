import React, { Component } from 'react'
import './signin.css'
import Logo from './logo1.png'
export default class Signin extends Component {
  render() {
    return (
      <div className='Ali_dev'>
          <div className="containerr" id='container'>
            <div className="form-container sign-up-container">
              <form action="#">
                <img className='image_sign' src={Logo}></img>
                <h1>انشاء حساب</h1>
                <div className="social-container">
                  <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>استعمل الايمل الشخصي لتسجيل حساب جديد</span>
                <input type="text" placeholder="الاسم" />
                <input type="email" placeholder="الايميل" />
                <input type="password" placeholder="كلمة المرور" />
                <button >تسجيل</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <img className='image_sign' src={Logo}></img>
                <h1>دخول</h1>
                <div className="social-container">
                  <a href="" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span></span>
                <input type="email" placeholder="الايميل" />
                <input type="password" placeholder="كلمة المرور" />
                <a href="#">نسيت كلمة المرور ؟</a>
                <button >تسجيل دخول</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>مرحبا بدك مرة اخرة</h1>
                  <p>لمتابعة رحلتك في موقعنا قم بتسجيل الدخول </p>
                  <button className="ghost" onClick={fun} id="signIn">تسجيل دخول</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>مرحبا هل لديك شاليه ؟</h1>
                  <p>قم بتسجيل بياناتك و ابدا رحلتك معنا</p>
                  <button className="ghost" onClick={fun} id="signUp">تسجيل حساب</button>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
    
    
  }
}
function fun(){
 
  const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
    
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
}