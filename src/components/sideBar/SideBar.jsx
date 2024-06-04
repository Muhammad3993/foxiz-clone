import React, { useContext } from 'react'
// icon
import { BiSearch } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
// react-router-dom
import { Link } from 'react-router-dom'
import Context from '../../context/Context'
// components
import Modal from '../modal/Modal'
// css
import './sidebar.css'

const Sidebar = () => {
  const { setModal, menu } = useContext(Context)
  return (
    <div className={menu ? 'sidebar sidebar_active' : 'sidebar'}>
        <div className="sidebar_main">
          <div className="sidebar_main_divs">
            <p className='sidebar_main_divs_p'>Search</p>
            <div className='modal1_main_div'>
              <BiSearch />
              <input type="text" placeholder='Search Headlines, News' />
              <BsArrowRightCircle />
            </div>
            <div className="sidebar_main_div">
              <Link to='/' className='sidebar_main_div_a'>Home Pages</Link>
              <div className="sidebar_main_div_div1">
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Home 1</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Home 3</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Home 5</Link>
                </div>
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Home 2</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Home 4</Link>
                </div>
              </div>
            </div>
            <div className="sidebar_main_div">
              <Link to='/' className='sidebar_main_div_a'>Categories</Link>
              <div className="sidebar_main_div_div1">
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Technology</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Travel</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Business</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Science</Link>
                </div>
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Entertainment</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Fashion</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Politics</Link>
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Health</Link>
                </div>
              </div>
            </div>
            <div className="sidebar_main_div">
              <Link to='/' className='sidebar_main_div_a'>Bookmarks</Link>
              <div className="sidebar_main_div_div1">
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Customize Interests</Link>
                </div>
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>My Bookmarks</Link>
                </div>
              </div>
            </div>
            <div className="sidebar_main_div">
              <Link to='/' className='sidebar_main_div_a'>More Foxiz</Link>
              <div className="sidebar_main_div_div1">
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Blog Index</Link>
                </div>
                <div className="sidebar_main_div_div1_left">
                  <Link to='/' className='sidebar_main_div_div1_left_a'>Sitemap</Link>
                </div>
              </div>
            </div>
            <div className="sidebar_main_div_div2">
              <p className='sidebar_main_div_div2_p'>Have an existing account?</p>
              <button className='navbar_main_right_div_btn' onClick={() => setModal(true)}>Sign In</button>
              <Modal />
            </div>
            <div className="sidebar_main_div_div2">
              <p className='sidebar_main_div_div2_p'>Follow US</p>
              <div className='sidebar_main_div_div2_div'>
                <Link to='/' className='sidebar_main_div_div2_div_a'>
                  <FaFacebookF />
                </Link>
                <Link to='/' className='sidebar_main_div_div2_div_a'>
                  <FaTwitter />
                </Link>
                <Link to='/' className='sidebar_main_div_div2_div_a'>
                  <FaYoutube />
                </Link>
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
    </div>
  )
}

export default Sidebar;
