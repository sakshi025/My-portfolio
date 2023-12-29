import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import abouts from '../assets/abouts.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const About = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
    return (

        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center bg-dark-blue'>
            <img src={abouts} width={200} height={200} className=' rounded-full border-2 p-1 border-light-blue img_glow' alt=''></img>


            <div data-aos='fade-down' className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-gray-800'>
                <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-100'> About me</h1>
                <p data-aos='fade-left' className='text-xl text-white lg:text-start' >I Sakshi, code-sculptor and pixel-painter, wove websites into interactive dreams. I dance between logic and beauty, building laughter in hospitals and crafting magic on the web's boundless canvas. My pixels whispers hope, and code a brushstroke against the digital sky.</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2'>
                            <button className='neno-button shadow-xl hover:shadow-light-blue  text-white hover:text-black text-bold border-2 hover:bg-light-blue  border-yellow-200 mt-20 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default About

