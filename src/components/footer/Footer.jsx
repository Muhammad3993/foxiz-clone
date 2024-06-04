import React from 'react'

// import style

import './footer.css'

// import image

import Img from '../../assets/footer-img/footer_logo.jpg'


// import icons

import {FaFacebookF} from 'react-icons/fa'

import {AiOutlineTwitter , AiFillYoutube} from 'react-icons/ai'
import { Link } from 'react-router-dom'






const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer_texts">
                <div className="footer_text footer_text-1">
                    <div className="footer_header">
                        <h1>{"//"}</h1>
                    </div>
                   <div className="text1">
                          <p><d>W</d>e influence 20 million users and <br />  is the number one business and <br /> technology news network on the <br />  planet</p>
                    </div> 
                </div>
                <div className="footer_text footer_text-2">
                    <div className="footer_header1">
                        <h3>Quick Link</h3>
                    </div>
                    <p className='footer_text_style'>MY BOOKMARK</p> 
                    <p className='footer_text_style'> INTERESTS <c>New</c></p>
                    <p className='footer_text_style'> CONTACT US</p>
                       <p className='footer_text_style'>BLOG INDEX</p> 
                </div>
                <div className="footer_text footer_text-3">
                    <div className="footer_header1">
                        <h3>Top Categories</h3>
                    </div>
                    <p className='footer_text_style'>Top Categories</p>
                      <p className='footer_text_style'> BUSINESS</p> 
                       <p className='footer_text_style'> POLITICS</p>
                       <p className='footer_text_style'> TECH <d>Hot</d></p>
                       <p className='footer_text_style'>HEALTH</p> 
                </div>
                <div className="footer_text footer_text-4">
                    <div className="footer_header1">
                        <h3>Sign Up for Our Newsletter</h3>
                    </div>
                    <p className='footer_text_style1'>Subscribe to our newsletter to get our newest articles <br /> instantly!</p> <br />
                    
                    <div className="footer_media">
                        <div className="sign1_up">
                            <input className='email_style' type="email" placeholder='Your email addres' />
                            <Link to='/' className='signup_style'>Sign up now </Link> <br />
                        </div>
                    </div>
                    <div className="footer_media_bottom">
                        <input className='checkbox_style' type="checkbox" /> <p className='agree'>I have read and agree to the terms & conditions</p>
                    </div>
                </div>  
            </div>

            <div className="footer_bottom">
                <div className="footer_bottom_style">
                    <div className="footer_bottom_right">
                        <img className='footer_logo' src={Img} alt="" />
                    </div>
                    <div className="footer_bottom_left">

                        <div className="follow_us">

                            <h4>Follow US</h4>
                        </div>
                        <div className="media_icons">
                             <a href="https://www.facebook.com/" title='Facebook'><FaFacebookF/></a> 
                             <a href="https://twitter.com/" title='Twitter'><AiOutlineTwitter/></a> 
                             <a href="https://www.youtube.com/" title='You Tube'><AiFillYoutube/></a> 
                        </div>
                      
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer_bottom_left1">
                <div className="copyright_section_right">
                    <p>© 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.</p>
                </div>
                <div className="copyright_section_left">
                    <p className='td_style'>Contact</p>
                    <p className='td_style'>Blog</p>
                    <p className='td_style'>Complaint</p>
                    <p className='td_style'>Advertise</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer