// useHoook
import { useContext } from 'react'
// react-router-dom
import { Link } from 'react-router-dom'
// img
import img from '../../assets/navbar_img/img.webp'
import img1 from '../../assets/navbar_img/img1.svg'
import img2 from '../../assets/navbar_img/img2.svg'
import img3 from '../../assets/navbar_img/img1.webp'
import img4 from '../../assets/navbar_img/img2.webp'
import img5 from '../../assets/navbar_img/img3.webp'
import img6 from '../../assets/navbar_img/img4.webp'
import img7 from '../../assets/navbar_img/img5.webp'
import img8 from '../../assets/navbar_img/img6.webp'
import img9 from '../../assets/navbar_img/img7.webp'
import img10 from '../../assets/navbar_img/img8.webp'
import img11 from '../../assets/navbar_img/img9.webp'
import img12 from '../../assets/navbar_img/img10.webp'
// css
import './navbar.css'
// icon
import {AiOutlineClockCircle} from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsThreeDotsVertical, BsFillSunFill, BsArrowRightCircle } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { HiArrowTrendingUp } from 'react-icons/hi2'
import { MdKeyboardArrowDown, MdDarkMode, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { TbBellRinging } from 'react-icons/tb'
// Context
import Context from '../../context/Context'
// components
import Modal from '../modal/Modal'
import Modal1 from '../modal1/Modal1'
// icon
import {BiMenuAltLeft} from 'react-icons/bi'

const Navbar = () => {
    const { dark, handleDark ,setModal, setModal1, menu, setMenu } = useContext(Context)
    const handleMenu = () => setMenu(!menu)
    return (
        <>
            <div className='navbar_top'>
                <div className="container1">
                    <Link to='/' className="navbar_top_main">
                        <img src={img} alt="" />
                    </Link>
                </div>
            </div>
            <div className={menu ? "navbar navbar_active" : "navbar"}>
                <div className="container">
                    <div className="navbar_main">
                        <div className="navbar_main_left">
                            <div className="navbar_main_left_menu" onClick={handleMenu}>
                                <BiMenuAltLeft/>
                            </div>
                            <Link to='/' className="navbar_main_img">
                                {
                                    !dark ? <img src={img1} alt="" /> :
                                        <img src={img2} alt='' />
                                }
                            </Link>
                            <div className="navbar_main_left_links">
                                <div className='navbar_main_left_links_boxes'>
                                    <Link to='/' className='navbar_main_left_link_active'>Home <MdKeyboardArrowDown className='i' /></Link>
                                    <div className="navbar_main_left_links_box">
                                        <Link to='/' className='navbar_main_left_links_box_link'>Home 2 <span className='navbar_main_left_links_box_link_span'>Hot</span></Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Home 3</Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Home 4 <span className='navbar_main_left_links_box_link_span1'>New</span></Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Home 5</Link>
                                    </div>
                                </div>
                                <div className="navbar_main_left_links_boxes">
                                    <Link to='/' className='navbar_main_left_link'>Politics <MdKeyboardArrowDown className='i' /></Link>
                                    <div className="navbar_main_left_links_box1">
                                        <div className="navbar_main_left_links_box1_div">
                                            <Link to='/' className='navbar_main_left_links_box1_div_p'>Politics</Link>
                                            <div className="navbar_main_left_links_box1_div_img">
                                                <img src={img3} alt="" />
                                                <div className='img'></div>
                                            </div>
                                            <p className='navbar_main_left_links_box1_div_p1'>Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.</p>
                                            <Link to='/' className='navbar_main_left_links_box1_div_btn'>Show More <BsArrowRightCircle /></Link>
                                        </div>
                                        <div className="navbar_main_left_links_box1_div">
                                            <p className='navbar_main_left_links_box1_div_p2'><HiArrowTrendingUp className='navbar_main_left_links_box1_div_p2_i' /> Top News</p>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className="navbar_main_left_links_box1_div_img">
                                                    <img src={img4} alt="" />
                                                </div>
                                                <div>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>White House Reminds Lawmakers not to Travel to Afghanistan</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 28, 2021</p>
                                                </div>
                                            </div>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className="navbar_main_left_links_box1_div_img">
                                                    <img src={img5} alt="" />
                                                </div>
                                                <div>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>Two Anti-Lockdown Leaders Arrested as Protests Held Across Valinor</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 28, 2021</p>
                                                </div>
                                            </div>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className="navbar_main_left_links_box1_div_img">
                                                    <img src={img3} alt="" />
                                                </div>
                                                <div>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>National Day Rally 2023: Sacrifice, Effort Needed to Preserve Harmony</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 28, 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navbar_main_left_links_box1_div">
                                            <p className='navbar_main_left_links_box1_div_p2'><AiOutlineClockCircle className='navbar_main_left_links_box1_div_p2_i'/> Latest News</p>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className='navbar_main_left_links_box1_div2'>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>Bad Credit Shouldn’t Affect Health Insurance, Experts Say</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Sep 19, 2021</p>
                                                </div>
                                            </div>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className='navbar_main_left_links_box1_div2'>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>What Is Women’s Equality Day and Why Is It Celebrated?</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 31, 2021</p>
                                                </div>
                                            </div>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className='navbar_main_left_links_box1_div2'>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>New Census Data Will Shake Up Alabama Politics</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 30, 2021</p>
                                                </div>
                                            </div>
                                            <div className='navbar_main_left_links_box1_div1'>
                                                <div className='navbar_main_left_links_box1_div2'>
                                                    <Link to='/' className='navbar_main_left_links_box1_div1_p'>The States Braces for Protests Over New COVID Rules</Link>
                                                    <p className='navbar_main_left_links_box1_div1_p1'>Aug 29, 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='navbar_main_left_links_boxes'>
                                    <Link to='/' className='navbar_main_left_link'>Technology <MdKeyboardArrowDown className='i' /></Link>
                                    <div className="navbar_main_left_links_box2">
                                        <div className="navbar_main_left_links_box2_navbar">
                                            <p className='navbar_main_left_links_box2_navbar_p'>Technology</p>
                                            <Link to='/' className='navbar_main_left_links_box2_navbar_p1'>Show More <BsArrowRightCircle /></Link>
                                        </div>
                                        <div className="navbar_main_left_links_box2_div">
                                            <div className="navbar_main_left_links_box2_div1">
                                                <div className="navbar_main_left_links_box2_div1_img">
                                                    <img src={img6} alt="" />
                                                </div>
                                                <Link to='/' className='navbar_main_left_links_box2_div1_p'>How My Phone’s Most Annoying Feature Saved My Life</Link>
                                                <p className='navbar_main_left_links_box2_div1_p1'>Oct 1, 2021</p>
                                            </div>
                                            <div className="navbar_main_left_links_box2_div1">
                                                <div className="navbar_main_left_links_box2_div1_img">
                                                    <img src={img7} alt="" />
                                                </div>
                                                <Link to='/' className='navbar_main_left_links_box2_div1_p'>Apple Watch Series 9 Reportedly Has Flat Sides and Bigger Screens</Link>
                                                <p className='navbar_main_left_links_box2_div1_p1'>Sep 19, 2021</p>
                                            </div>
                                            <div className="navbar_main_left_links_box2_div1">
                                                <div className="navbar_main_left_links_box2_div1_img">
                                                    <img src={img8} alt="" />
                                                </div>
                                                <Link to='/' className='navbar_main_left_links_box2_div1_p'>Apple iMac M1 Review: the All-In-One for Almost Everyone</Link>
                                                <p className='navbar_main_left_links_box2_div1_p1'>
                                                    <p className='color'></p>
                                                    <p className='color1'></p>
                                                    <p className='color2'></p>
                                                    <p className='color3'></p>
                                                    <p className='color4'></p>
                                                    9.4 out of 10
                                                </p>
                                            </div>
                                            <div className="navbar_main_left_links_box2_div1">
                                                <div className="navbar_main_left_links_box2_div1_img">
                                                    <img src={img9} alt="" />
                                                </div>
                                                <Link to='/' className='navbar_main_left_links_box2_div1_p'>Google’s Self-Designed Tensor Chips will Power Its Next</Link>
                                                <p className='navbar_main_left_links_box2_div1_p1'>Sep 8, 2021</p>
                                            </div>
                                            <div className="navbar_main_left_links_box2_div1">
                                                <div className="navbar_main_left_links_box2_div1_img">
                                                    <img src={img10} alt="" />
                                                </div>
                                                <Link to='/' className='navbar_main_left_links_box2_div1_p'>How My Phone’s Most Annoying Feature Saved My Life</Link>
                                                <p className='navbar_main_left_links_box2_div1_p1'>
                                                    <TbBellRinging />
                                                    Sponsored by
                                                    {
                                                        !dark ? <img src={img11} alt="" className='navbar_main_left_links_box2_div1_p1_img' /> :
                                                        <img src={img12} alt="" className='navbar_main_left_links_box2_div1_p1_img' />
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar_main_left_links_boxes">
                                    <Link to='/' className='navbar_main_left_link'>Posts <MdKeyboardArrowDown className='i' /></Link>
                                    <div className="navbar_main_left_links_box">
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Post Layouts <span className='navbar_main_left_links_box_link_span'>Unlimited</span> <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 5</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link '>Standard 6</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link '>Standard 7</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link '>Standard 8</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link white'>No Featured</Link>
                                            </div>
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Gallery Layouts <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                            </div>
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Video Layouts <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe" >
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Audio Layouts <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>  
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Post Sidebar <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>  
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Review <span className='navbar_main_left_links_box_link_span1'>Hot</span> <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>  
                                        </div>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Content Featuers <span className='navbar_main_left_links_box_link_span1'>100+</span> <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>  
                                        </div>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Multiple Authors <span className='navbar_main_left_links_box_link_span1 box_link_span1'>New</span></Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Break Page Selection <span className='navbar_main_left_links_box_link_span1'>Hot</span></Link>
                                        <div className="navbar_main_left_links_boxes2">
                                            <Link to='/' className='navbar_main_left_links_box_link'>Table of Contents <MdOutlineKeyboardArrowRight className='navbar_main_left_links_box_link_i' /></Link>
                                            <div className="navbar_main_left_links_boxe">
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 1</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 2</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 3</Link>
                                                <Link to='/' className='navbar_main_left_links_box_link'>Standard 4</Link>
                                            </div>  
                                        </div>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Auto Load Next Posts <span className='navbar_main_left_links_box_link_span1 box_link_span1'>New</span></Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Reaction Post</Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Sponsored Post</Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Highlights/Key Points</Link>
                                    </div>
                                </div>
                                <Link to='/' className='navbar_main_left_link'><CiBookmark /> Bookmarks</Link>
                                <div className="navbar_main_left_links_boxes">
                                    <Link to='/' className='navbar_main_left_link'>Pages <MdKeyboardArrowDown className='i' /></Link>
                                    <div className="navbar_main_left_links_box">
                                        <Link to='/' className='navbar_main_left_links_box_link'>Blog Index</Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Contact US</Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Search Page<span className='navbar_main_left_links_box_link_span1'>404 Page</span></Link>
                                        <Link to='/' className='navbar_main_left_links_box_link'>Customize Interests</Link>
                                    </div>
                                </div>
                                <Link to='/' className='navbar_main_left_links_bar' onClick={() => setModal1(true)}><BsThreeDotsVertical /></Link>
                            </div>
                        </div>
                        <div className="navbar_main_right">
                            <div className="navbar_main_right_div">
                                <button className='navbar_main_right_div_btn' onClick={() => setModal(true)}>Sign In</button>
                                <Modal/>
                                <Link to='/' className="navbar_main_right_div_ring">
                                    <TbBellRinging />
                                </Link>
                            </div>
                            <BiSearch className='navbar_main_right_search' onClick={() => setModal1(true)}/>
                            <Modal1/>
                            <div className='navbar_main_right_light' onClick={handleDark}>
                                <div className={dark ? "navbar_main_right_light_sun navbar_main_right_light_sun_right" : 'navbar_main_right_light_sun'}>
                                    {
                                        !dark ? <BsFillSunFill /> : <MdDarkMode />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar