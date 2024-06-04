// use Hook
import { useContext } from 'react'
import { Link } from 'react-router-dom'
// img
import img from '../../assets/modal_img/img.webp'
// css
import './modal.css'
// icon
import { MdClose } from 'react-icons/md'
// Context
import Context from '../../context/Context'

const Modal = () => {
    const { setModal, modal } = useContext(Context)

    if (modal) {
        return (
            <div className={modal ? 'modal modal_active' : 'modal'} aria-hidden={modal ? 'false' : 'true'}>
                <div className="container modal_cont">
                    <div className="modal_main">
                        <div className="modal_main_img">
                            <img src={img} alt="" />
                        </div>
                        <p className='modal_main_p'>Welcome Back!</p>
                        <p className='modal_main_p1'>Sign in to your account</p>
                        <div className='modal_main_div'>
                            <p className='modal_main_div_color'></p>
                            <p className='modal_main_div_color'></p>
                            <p className='modal_main_div_color'></p>
                        </div>
                        <div className='modal_main_div1'>
                            <p className='modal_main_div1_p'>Username or Email Address</p>
                            <input type="text" />
                        </div>
                        <div className='modal_main_div1'>
                            <p className='modal_main_div1_p'>Password</p>
                            <input type="text" />
                        </div>
                        <div className='modal_main_div2'>
                            <input type="checkbox" />
                            <p className='modal_main_div2_p'>Remember Me</p>
                        </div>
                        <button className='navbar_main_right_div_btn btn'>Log In</button>
                        <Link to='/' className='modal_main_a'>Lost your password?</Link>
                        <MdClose className='close' onClick={() => setModal(false)} />
                    </div>
                    <div className='close_div' onClick={() => setModal(false)}></div>
                </div>
            </div>
        )
    }
}

export default Modal
