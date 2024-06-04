import React, { useState } from 'react'
// icon
import { FiArrowUp } from 'react-icons/fi'
// css
import './totop.css'

const ToTop = () => {
    const [top, setTop] = useState(false)
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const changetop = () => {
        if (window.scrollY >= 200) {
            setTop(true)
        } else {
            setTop(false)
        }
      }
      window.addEventListener("scroll", changetop)

    return (
        <div className={top ? 'totop changetop' : 'totop'}>
            <div className="container">
                <div className="totop_main" onClick={toTop}>
                    <FiArrowUp />
                </div>
            </div>
        </div>
    )
}

export default ToTop