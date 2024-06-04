import React from 'react'
// icon
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { TfiShoppingCart } from 'react-icons/tfi'
// react-router-dom
import { Link } from 'react-router-dom'
// css
import './shopfixed.css'

const ShopFixed = () => {
    return (
        <div className='shopfixed'>
            <div className="container">
                <div className="shopfixed_main">
                    <Link to='/' className="shopfixed_main_div">
                        <p className='shopfixed_main_div_p'><MdOutlineLibraryBooks /></p>
                        <p className='shopfixed_main_div_p1'>Demos</p>
                    </Link>
                    <Link to='/' className="shopfixed_main_div blue">
                        <p className='shopfixed_main_div_p2'><TfiShoppingCart /></p>
                        <p className='shopfixed_main_div_p3'>Buy Now</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShopFixed
