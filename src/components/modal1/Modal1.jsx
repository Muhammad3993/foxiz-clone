import React, { useContext } from 'react'
// icon
import { BiSearch } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'
// css
import './modal1.css'

const Modal1 = () => {
  const { setModal1, modal1 } = useContext(Context)
  if(modal1) {
    return (
      <div className={modal1 ? 'modal1 modal1_active' : 'modal1'}>
        <div className="container modal1_cont">
          <div className="modal1_main">
            <div className='modal1_main_divs'>
              <p className='modal1_main_p'>Search</p>
              <div className='modal1_main_div'>
                <BiSearch/>
                <input type="text" placeholder='Search Headlines, News'/>
                <BsArrowRightCircle/>
              </div>
              <div className='modal1_main_div1'>
                <div className='modal1_main_div1_div'>
                  <p className='modal1_main_div1_div_p'>Technology</p>
                  <Link to='/' className='modal1_main_div1_div_a'>Innovate</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Gadget</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>PC hardware</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Review</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Software</Link>
                </div>
                <div className='modal1_main_div1_div'>
                  <p className='modal1_main_div1_div_p'>Health</p>
                  <Link to='/' className='modal1_main_div1_div_a'>Medicine</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Children</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Coronavirus</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Nutrition</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Disease</Link>
                </div>
                <div className='modal1_main_div1_div'>
                  <p className='modal1_main_div1_div_p'>Entertainment</p>
                  <Link to='/' className='modal1_main_div1_div_a'>Stars</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Screen</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Culture</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Media</Link>
                  <Link to='/' className='modal1_main_div1_div_a'>Videos</Link>
                </div>
              </div>
            </div>
            <div className='modal1_main_div2'>
              <div className='modal1_main_div2_div'>
                <Link to='/' className='modal1_main_div1_div_a'>Contact</Link>
                <Link to='/' className='modal1_main_div1_div_a'>Blog</Link>
                <Link to='/' className='modal1_main_div1_div_a'>Complaint</Link>
                <Link to='/' className='modal1_main_div1_div_a'>Advertise</Link>
              </div>
              <p className='modal1_main_div2_p'>© 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.</p>
            </div>
          </div>
          <div className='close_div' onClick={() => setModal1(false)}></div>
        </div>
      </div>
    )
  }
}

export default Modal1
