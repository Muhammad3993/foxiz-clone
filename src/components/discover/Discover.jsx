// react-router-dom
import { Link } from 'react-router-dom';
// icon
import { AiOutlinePlus } from 'react-icons/ai'

// img
import img from '../../assets/discover_img/img.webp';
import img1 from '../../assets/discover_img/img1.webp';
import img2 from '../../assets/discover_img/img2.webp';
import img3 from '../../assets/discover_img/img3.webp';

// css
import './discover.css';
// data
const data = [
    {
        id: 1,
        img: img,
        nomi: 'Business',
        artic: '12 Articles'
    },
    {
        id: 2,
        img: img1,
        nomi: 'Entertainment',
        artic: '13 Articles'
    },
    {
        id: 3,
        img: img2,
        nomi: 'Technology',
        artic: '17 Articles'
    },
    {
        id: 4,
        img: img3,
        nomi: 'Travel',
        artic: '14 Articles'
    }
];


const Discover = () => {
    return (
        <div className='discover'>
            <div className="container">
                <div className="discover_main">
                    <div className='editor_main_div'>
                        <span className='editor_main_div_span'>{"/"}</span>
                        Discover Categories
                        <span className='editor_main_div_span'>{"/"}</span>
                    </div>
                    <div className="discover_main_div">
                        {
                            data.map(item => (
                                <div className="discover_main_div_product" key={item.id}>
                                    <div className="discover_main_div_product_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='discover_main_div_product_text'>
                                        <div className="discover_main_div_product_text_div">
                                            <Link to='/' className='discover_main_div_product_text_div_a'>{item.nomi}</Link>
                                            <p className='discover_main_div_product_text_div_p'>{item.artic}</p>
                                        </div>
                                        <p className='discover_main_div_product_text_i'><AiOutlinePlus /></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='discover_main_links'>
                        <p className='discover_main_links_p'>Discover More <span>of What Matters to You:</span></p>
                        <Link to='/' className='discover_main_link'>Politicals</Link>
                        <Link to='/' className='discover_main_link'>Science</Link>
                        <Link to='/' className='discover_main_link'>Life Style</Link>
                        <Link to='/' className='discover_main_link'>Videos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover