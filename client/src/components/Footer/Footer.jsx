import React from 'react'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import logo from '../../assets/images/logo-shape-ft.png'
function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row contact-row">
                <div className="col-md-4">
                    <div className="feature-box ">
                        <h6>Connect with Us</h6>
                        <ul className="links">
                            <li><a href="" className='phone'>+91 9567843340</a></li>
                            <li><a href="" className='email'>info@deepnetsoft.com</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 logo-col">
                    <div className="feature-box">
                        <img src={logo} className='logo' alt="" />
                        <h3 className='title'>Deep <span className='txt-white'>Net </span><span className='txt-dark'>Soft</span></h3>
                        <ul className='social-links'>
                            <li><a href=""><img src={facebook} alt="" /></a></li>
                            <li><a href=""><img src={twitter} alt="" /></a></li>
                            <li><a href=""><img src={youtube} alt="" /></a></li>
                            <li><a href=""><img src={instagram} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box">
                        <h6>Find Us</h6>
                        <a href="" className='address'>First floor, Geo infopark, <br /> Infopark EXPY, Kakkanad</a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="ft-bottom">
            <div className="container">
            <div className="row">
                <div className="container">
                    <div className="d-flex">
                        <div className="left">
                            <a href="">© 2024 Deepnetsoft Solutions. All rights reserved.</a>
                        </div>
                        <div className="right">
                            <a href="">Terms & Conditions</a>
                            <a href="">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        </div>
    </footer>
  )
}

export default Footer
