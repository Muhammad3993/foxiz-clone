import React from 'react'
// css
import './editor.css'
// img
import img from '../../assets/editor_img/img.webp'
import img1 from '../../assets/editor_img/img1.webp'
import img2 from '../../assets/editor_img/img2.webp'
// react-router-dom
import { Link } from 'react-router-dom'
// icon
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaFacebookF, FaPinterest, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CiDroplet, CiBookmark } from 'react-icons/ci'
import { MdOutlineNightlight } from 'react-icons/md'
import { TiWeatherWindy, TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherSnow, TiWeatherSunny, TiWeatherDownpour } from 'react-icons/ti'

// data
const data = [
  {
    id: 1,
    name: 'Sun',
    icon: <TiWeatherCloudy />,
    num: '17'
  },
  {
    id: 2,
    name: 'Mon',
    icon: <TiWeatherPartlySunny />,
    num: '17'
  },
  {
    id: 3,
    name: 'Tue',
    icon: <TiWeatherSnow />,
    num: '17'
  },
  {
    id: 4,
    name: 'Wed',
    icon: <TiWeatherSunny />,
    num: '17'
  },
  {
    id: 5,
    name: 'Thu',
    icon: <TiWeatherDownpour />,
    num: '17'
  }
]

const Editor = () => {
  return (
    <div className='editor'>
      <div className="container">
        <div className="editor_main">
          <div className='editor_main_div'>
            <span className='editor_main_div_span'>{"/"}</span>
            Editor's Pick
            <span className='editor_main_div_span'>{"/"}</span>
          </div>
          <div className='editor_main_big_div'>
            <div className='editor_main_big_div_litle_div'>
              <div className='editor_main_big_div_litle_div_product'>
                <div className="editor_main_big_div_litle_div_product_text">
                  <Link to='/' className='editor_main_big_div_litle_div_product_text_a'>Corsair HS80 RGB Wireless Gaming Headset Review</Link>
                  <div className='editor_main_big_div_litle_div_product_text_div'>
                    <div className='editor_main_big_div_litle_div_product_text_div_stars'>
                      <p className='editor_main_big_div_litle_div_product_text_div_star'><BsStarFill /></p>
                      <p className='editor_main_big_div_litle_div_product_text_div_star'><BsStarFill /></p>
                      <p className='editor_main_big_div_litle_div_product_text_div_star'><BsStarFill /></p>
                      <p className='editor_main_big_div_litle_div_product_text_div_star'><BsStarFill /></p>
                      <p className='editor_main_big_div_litle_div_product_text_div_star'><BsStarHalf /></p>
                    </div>
                    <p>4.8 out of 5 Good</p>
                  </div>
                  <p className='editor_main_big_div_litle_div_product_text_p'>As for quality, the HS80's provided clear-cut sound with adequate bass and…</p>
                  <div className='editor_main_big_div_litle_div_product_text_div12'>
                    <div className='editor_main_big_div_litle_div_product_text_div1'>
                      <div className='editor_main_big_div_litle_div_product_text_div1_image'>
                        <img src={img1} alt="" className='editor_main_big_div_litle_div_product_text_div1_img' />
                        <Link to='/' className='editor_main_big_div_litle_div_product_text_div1_title'>Taylor Emma</Link>
                      </div>
                      <p className='editor_main_big_div_litle_div_product_text_div1_p'>Aug 8, 2021</p>
                    </div>
                    <div className='editor_main_big_div_litle_div_product_text_div12_i'><CiBookmark /></div>
                  </div>
                </div>
                <div className="editor_main_big_div_litle_div_product_img">
                  <img src={img} alt="" />
                  <Link to='/' className='editor_main_big_div_litle_div_product_img_a'>TECHNOLOGY</Link>
                </div>
              </div>
              <div className='editor_main_big_div_litle_div_flex'>
                <div className="editor_main_big_div_litle_div_product1">
                  <div className='editor_main_big_div_litle_div_product1_mobile'>
                    <Link to='/' className='editor_main_big_div_litle_div_product1_a'>Self-Driving Cars: Everything You Need to Know</Link>
                    <div className='editor_main_big_div_litle_div_product1_div'>
                      <p className='editor_main_big_div_litle_div_product_text_div1_p'>Aug 8, 2021</p>
                      <div className='editor_main_big_div_litle_div_product_text_div12_i'><CiBookmark /></div>
                    </div>
                  </div>
                  <div className="editor_main_big_div_litle_div_product1_img">
                    <img src={img2} alt="" />
                    <Link to='/' className='editor_main_big_div_litle_div_product_img_a'>TECHNOLOGY</Link>
                  </div>
                </div>
                <div className="editor_main_big_div_litle_div_product1">
                  <div className="editor_main_big_div_litle_div_product1_mobile">
                    <Link to='/' className='editor_main_big_div_litle_div_product1_a'>Self-Driving Cars: Everything You Need to Know</Link>
                    <div className='editor_main_big_div_litle_div_product1_div'>
                      <p className='editor_main_big_div_litle_div_product_text_div1_p'>Aug 8, 2021</p>
                      <div className='editor_main_big_div_litle_div_product_text_div12_i'><CiBookmark /></div>
                    </div>
                  </div>
                  <div className="editor_main_big_div_litle_div_product1_img">
                    <img src={img2} alt="" />
                    <Link to='/' className='editor_main_big_div_litle_div_product_img_a'>TECHNOLOGY</Link>
                  </div>
                </div>
                <div className="editor_main_big_div_litle_div_product1">
                  <div className="editor_main_big_div_litle_div_product1_mobile">
                    <Link to='/' className='editor_main_big_div_litle_div_product1_a'>Self-Driving Cars: Everything You Need to Know</Link>
                    <div className='editor_main_big_div_litle_div_product1_div'>
                      <p className='editor_main_big_div_litle_div_product_text_div1_p'>Aug 8, 2021</p>
                      <div className='editor_main_big_div_litle_div_product_text_div12_i'><CiBookmark /></div>
                    </div>
                  </div>
                  <div className="editor_main_big_div_litle_div_product1_img">
                    <img src={img2} alt="" />
                    <Link to='/' className='editor_main_big_div_litle_div_product_img_a'>TECHNOLOGY</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='editor_main_big_div_little_div'>
              <div className="editor_main_big_div_little_div_weather">
                <p className='editor_main_big_div_little_div_weather_p'>Weather</p>
                <div className="editor_main_big_div_little_div_weather_num">
                  <div className='editor_main_big_div_little_div_weather_num_div'>
                    <p className='editor_main_big_div_little_div_weather_num_div_i'><MdOutlineNightlight /></p>
                    <p className='editor_main_big_div_little_div_weather_num_div_p'>New York</p>
                    <p className='editor_main_big_div_little_div_weather_num_div_p1'>Clear Sky</p>
                  </div>
                  <div className='editor_main_big_div_little_div_weather_num_deg'>
                    <p className='editor_main_big_div_little_div_weather_num_deg_p'>9 <b className='editor_main_big_div_little_div_weather_num_deg_p_b'>°C</b></p>
                    <div className='editor_main_big_div_little_div_weather_num_deg_div'>
                      <p className='editor_main_big_div_little_div_weather_num_deg_div_p'><p className='editor_main_big_div_little_div_weather_num_deg_div_p_b'><AiOutlineArrowUp /></p>11°</p>
                      _
                      <p className='editor_main_big_div_little_div_weather_num_deg_div_p'><p className='editor_main_big_div_little_div_weather_num_deg_div_p_b1'><AiOutlineArrowDown /></p>3°</p>
                    </div>
                    <p className='editor_main_big_div_little_div_weather_num_deg_p1'><b className='editor_main_big_div_little_div_weather_num_deg_p1_b'><CiDroplet className='' /></b>65%</p>
                    <p className='editor_main_big_div_little_div_weather_num_deg_p1'><b className='editor_main_big_div_little_div_weather_num_deg_p1_b'><TiWeatherWindy /></b>3 km/h</p>
                  </div>
                </div>
                <div className="editor_main_big_div_little_div_weather_cond">
                  {
                    data.map(item => (
                      <div className="editor_main_big_div_little_div_weather_cond_div" key={item.id}>
                        <p className="editor_main_big_div_little_div_weather_cond_div_name">{item.name}</p>
                        <p className='editor_main_big_div_little_div_weather_cond_div_p'>{item.icon}</p>
                        <p className='editor_main_big_div_little_div_weather_cond_div_p1'>{item.num}<b className='editor_main_big_div_little_div_weather_cond_div_p1_b'>°C</b></p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="editor_main_big_div_little_div1">
                <div className='editor_main_div'>
                  <span className='editor_main_div_span'>{"/"}</span>
                  Follow US
                  <span className='editor_main_div_span'>{"/"}</span>
                </div>
                <div className='editor_main_big_div_little_div1_divs'>
                  <div className="editor_main_big_div_little_div1_div1">
                    <Link to='/' className="editor_main_big_div_little_div1_a editor_main_big_div_little_div1_a_blue1">
                      <div className='editor_main_big_div_little_div1_i1'>
                        <FaFacebookF />
                      </div>
                      <div>
                        <p className='editor_main_big_div_little_div1_a_p'>248.1k Followers</p>
                        <p className='editor_main_big_div_little_div1_a_p1'>Like</p>
                      </div>
                    </Link>
                    <Link to='/' className="editor_main_big_div_little_div1_a editor_main_big_div_little_div1_a_red">
                      <div className='editor_main_big_div_little_div1_i2'>
                        <FaPinterest />
                      </div>
                      <div>
                        <p className='editor_main_big_div_little_div1_a_p'>134k Followers</p>
                        <p className='editor_main_big_div_little_div1_a_p1'>Pin</p>
                      </div>
                    </Link>
                  </div>
                  <div className="editor_main_big_div_little_div1_div1">
                    <Link to='/' className="editor_main_big_div_little_div1_a editor_main_big_div_little_div1_a_blue">
                      <div className='editor_main_big_div_little_div1_i3'>
                        <FaTwitter />
                      </div>
                      <div>
                        <p className='editor_main_big_div_little_div1_a_p'>69.1k Followers</p>
                        <p className='editor_main_big_div_little_div1_a_p1'>Follow</p>
                      </div>
                    </Link>
                    <Link to='/' className="editor_main_big_div_little_div1_a editor_main_big_div_little_div1_a_ink">
                      <div className='editor_main_big_div_little_div1_i4'>
                        <FaInstagram />
                      </div>
                      <div>
                        <p className='editor_main_big_div_little_div1_a_p'>54.3k Followers</p>
                        <p className='editor_main_big_div_little_div1_a_p1'>Follow</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor