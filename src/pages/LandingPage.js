import React from "react"
import {Link} from 'react-router-dom'

import Phone from '../assets/images/phone.png'
import Logos from '../assets/images/logos.png'
import Phone2 from '../assets/images/phone2.png'
import Prof1 from '../assets/images/prof1.png'
import Prof2 from '../assets/images/prof2.png'
import Prof3 from '../assets/images/prof3.png'
import "../assets/css/style.css"
import { FiPhone, FiLock, FiDownload } from "react-icons/fi";

const LandingPage = () => {
    return (
    <>
    <header className="landing-header">
      <nav className="landing-nav">
        <div className="landing-zwallet">
          <span>Zwallet</span>
        </div>
        <div className="landing-btn">
          <button className="landing-nav-login">Login</button>
          <button className="landing-nav-reg">Register</button>
        </div>
      </nav>
      <div className="landing-header2">
        <div className="landing-header2-desc">
            <p className="landing-header-awesome">Awesome App For Saving <span className="time">Time.</span></p>
            <p>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
            <button className="landing-header-try">Try It Free</button>
        </div>
        <div>
            <img className="landing-header-phone" src={Phone} alt=""></img>
        </div>
      </div>
    </header>
    <section className="landing-section">
        <div>
            <p className="landing-section-title"><span className="landing-section-about">About </span>the Application.</p>
            <p className="landing-section-desc">We have some great features from the application and it's totally free to use by all users around the world.</p>
        </div>
        <div className="landing-section-wrapper">
            <div className="landing-section-card">
                <div><FiPhone className="landing-section-logo"/></div>
                <span className="landing-section-card-tittle">24/7 Support</span>
                <p className="landing-section-card-desc">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
            </div>
            <div className="landing-section-card-mid">
                <div><FiLock className="landing-section-logo"/></div>
                <span className="landing-section-card-tittle">Data Privacy</span>
                <p className="landing-section-card-desc">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
            </div>
            <div className="landing-section-card">
                <div><FiDownload className="landing-section-logo"/></div>
                <span className="landing-section-card-tittle">Easy Download</span>
                <p className="landing-section-card-desc">Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</p>
            </div>
        </div>
    </section>
    <main className="landing-main">
      <div className="landing-main-text-wrapper">
        <p className="landing-main-100">100+ <span className="landing-main-trust">Trusted </span>Partners.</p>
        <p className="landing-main-desc">We have reached global level and have 100+ brand partners around the globe.</p>
      </div>
      <div>
        <img src={Logos} alt=""></img>
      </div>
    </main>
    <main className="landing-main2">
      <div>
        <img src={Phone2} alt=""></img>
      </div>
      <div className="landing-main2-wrapper">
        <p className="landing-main2-all">All The <span className="landing-main2-great">Great </span>Zwallet Features.</p>
        <div>
          <div className="landing-main2-text-box">
            <p className="landing-main2-num">1. <span className="landing-main2-title"> Small Fee</span></p>
            <p className="landing-main2-desc">We only charge 5% of every success transaction done in Zwallet app.</p>
          </div>
          <div className="landing-main2-text-box">
            <p className="landing-main2-num">2. <span className="landing-main2-title"> Data Secured</span></p>
            <p className="landing-main2-desc">All your data is secured properly in our system and it's encrypted.</p>
          </div>
          <div className="landing-main2-text-box">
            <p className="landing-main2-num">3. <span className="landing-main2-title"> User Friendly</span></p>
            <p className="landing-main2-desc">Zwallet come up with modern and sleek design and not complicated.</p>
          </div>
        </div>
      </div>
    </main>
    <section className="landing-section2">
      <div>
        <p className="landing-section2-title">What Users are <span className="saying">Saying.</span></p>
        <p className="landing-section2-text">We have some great features from the application and it's totally free to use by all users around the world.</p>
      </div>
      <div className="landing-section2-card-wrapper">
        <div className="landing-section-card">
          <img className="landing-section2-prof" src={Prof1} alt=""></img>
          <p className="name">Sherina Chaw</p>
          <p className="description">“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”</p>
        </div>
        <div className="landing-section-card-mid">
        <img className="landing-section2-prof" src={Prof2} alt=""></img>
          <p className="name">Jessica Mera</p>
          <p className="description">“I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app”</p>
        </div>
        <div className="landing-section-card">
        <img className="landing-section2-prof" src={Prof3} alt=""></img>
          <p className="name">Robert Chandler</p>
          <p className="description">“Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!”</p>
        </div>
      </div>
    </section>
    <footer className="landing-footer">
      <span className="landing-footer-zwallet">Zwallet</span>
      <div className="landing-footer-desc">Simplify financial needs and saving much time in banking needs with one single app.</div>
      <hr className="hr"></hr>
      <div className="landing-footer-end">
        <p>2020 Zwallet. All right reserved.</p>
        <div className="landing-footer-contact">
          <div>+62 5637 8882 9901</div>
          <div className="landing-footer-email">contact@zwallet.com</div>
        </div>       
      </div>
    </footer>
    </>
    
    )
}

export default LandingPage