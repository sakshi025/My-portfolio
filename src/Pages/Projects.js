import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import image4 from '../assets/project4 (1).png'
import image3 from '../assets/project4 (2).png'
import image2 from '../assets/project4 (3).png'
import image1 from '../assets/project4 (4).png'
const Projects = () => {

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])
    const projects = [
        { title: 'blog', link: 'https://blog-sakshi025.vercel.app/', imsg: { image1 }, right: true },
        { title: 'Restaurant', link: 'https://sakshi025.github.io/Restaurant/', imsg: { image2 }, right: false },
        { title: 'CodeBu', link: 'https://shopping-app-eosin.vercel.app/', imsg: { image3 }, right: true },
        { title: 'quote', link: 'https://sakshi025.github.io/quote/', imsg: { image4 }, right: false }
    ]
    return (
        <>
            <div className='p-20 flex flex-col items-center justify-center bg-dark-blue'>
                <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-100'>
                    Projects
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-normal gap-20">
                    {
                        projects.map((items, key) => <div key={key} data-aos='fade-up' className={` mt-16 text-[26px] flex items-center justify-center font-semibold text-dark-blue rounded-3xl h-36 w-44 border-2 border-light-blue b_glow`}>

                            <Link to={items.link} key={key} className='hover:animate-bounce text-yellow-100 no-underline cursor-pointer hover:text-white rounded-full p-3 capitalize'>
                                {items.title}
                            </Link>
                        </div>
                        )
                    }

                </div>
                <button className='neno-button shadow-xl hover:shadow-light-blue  text-white hover:text-black text-bold border-2 hover:bg-light-blue  border-yellow-200 mt-20 rounded-lg py-4 px-8 uppercase relative overflow-hidden' >Show-more</button>
            </div>
        </>
    )
}

export default Projects
