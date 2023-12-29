import React, { useEffect } from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Homes from '../assets/homes.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
    const icons = [
        { icon: <AiFillGithub className='text-[28px]'></AiFillGithub>, link: 'https://github.com/sakshi025' },
        { icon: <AiFillInstagram className='text-[28px]' />, link: 'https://www.instagram.com/sakshi_pan.dey/' }, {
            icon: <AiFillLinkedin className='text-[28px]' />, link: 'https://www.linkedin.com/in/sakshi-kumari-37384622b/'
        }
    ]
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])

    return (
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-gray-800'>
                <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal'>Welcome to <span className='text-light-blue'>My Website</span></h1>
                <p data-aos='fade-left' className='text-xl text-gray-800  lg:text-start' >I Sakshi, code-sculptor and pixel-painter, wove websites into interactive dreams. I dance between logic and beauty, building laughter in hospitals and crafting magic on the web's boundless canvas. My pixels whispers hope, and code a brushstroke against the digital sky.</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2'>
                            {
                                icons.map((items, key) =>
                                    <Link to={items.link} key={key} className='text-light-blue hover:text-dark-blue rounded-full glow p-2'>
                                        {items.icon}
                                    </Link>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
            <img data-aos='fade-up' src={Homes} width={200} height={100} className=' rounded-full border-2 p-1 border-light-blue img_glow' alt=''></img>
        </div>


    )
}

export default Home
