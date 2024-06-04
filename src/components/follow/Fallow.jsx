import React from 'react'
// css
import './follow.css'
// img
import img from '../../assets/editor_img/img1.webp'
import img1 from '../../assets/follow_img/img.webp'
import img2 from '../../assets/follow_img/img1.webp'
// icon
import {AiOutlinePlus} from 'react-icons/ai'
// data
const data = [
    {
        id: 1,
        name: 'Taylor Emma',
        middlename: '106 Articles',
        text: 'A senior editor for The Mars that left the company to join the team of Foxiz as a news editor and content creator. An artist…',
        img: img,
        imgname: 'Senior Editor'
    },
    {
        id: 2,
        name: 'Jacob',
        middlename: '7 Articles',
        text: 'Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity. Work in Foxiz.',
        img: img1,
        imgname: 'Foxiz Contributor'
    }
]

const Fallow = () => {
  return (
    <div className='follow'>
        <div className="container">
            <div className="follow_main">
                <div className="follow_main_div">
                    <p className='follow_main_div_p'>
                        <span className='follow_main_div_p_span'>{"/"}</span>
                        Follow Writers
                        <span className='follow_main_div_p_span'>{"/"}</span>
                    </p>
                </div>
                <div className="follow_main_divs">
                    {
                        data.map(item => (
                            <div className="follow_main_divs_product" key={item.id}>
                                <div className="follow_main_divs_product_text">
                                    <div className="follow_main_divs_product_text_div">
                                        <p className='follow_main_divs_product_text_div_p'>{item.name}</p>
                                        <p className='follow_main_divs_product_text_div_p1'>/ {item.middlename}</p>
                                    </div>
                                    <p className='follow_main_divs_product_text_p'>{item.text}</p>
                                    <p className='discover_main_div_product_text_i'><AiOutlinePlus /></p>
                                </div>
                                <div className="follow_main_divs_product_img">
                                    <img src={item.img} alt="" />
                                    <p className='follow_main_divs_product_img_p'>{item.imgname}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="follow_img">
                <p className='follow_img_p'>- Sponsored -</p>
                <img src={img2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Fallow