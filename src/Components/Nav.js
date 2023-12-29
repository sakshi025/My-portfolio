import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLaptop } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
const Nav = () => {
    const menus = [{ title: 'home', to: '/' }, { title: 'about', to: '/about' },
    { title: 'Skill', to: '/Skill' },

    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/Contact' }]
    const [toggle, settoggle] = useState(false);
    function openMenu() {
        settoggle(true);
    }
    function closemenu() {
        settoggle(false)
    }
    return (
        <div className='bg-dark-blue '>
            <nav className='flex items-center justify-between p-8 lg:flex-row '>
                <div><Link to={'/'} className='text-white font-mono text-3xl tracking-wider flex items-center no-underline '><MdLaptop className='text-light-blue' />Sakshi</Link></div>
                <ul className=' flex gap-x-10   '>
                    {

                        menus.map((students) => (
                            <div className='hover:border-b-4  border-Dark-red duration-300  ssm:hidden md:block space-x-2   '>
                                <Link to={students.to} key={students.id} className='no-underline  text-white text-xl text-capitalize  hover:text-2xl duration-300'>{students.title}</Link>
                            </div>
                        ))

                    }
                    <div className='ssm:block md:hidden' >
                        {toggle ? <AiOutlineClose size={30} onClick={closemenu} className='text-white cursor-pointer' /> : <HiMenuAlt1 size={30} onClick={openMenu} className='text-white cursor-pointer' />} </div>
                </ul>

            </nav>
            <div className='flex flex-col gap-4 ml-10 '>
                {
                    toggle ? <ul   >
                        {

                            menus.map((students) => (
                                <div className='hover:border-b-2 w-20  border-Dark-red duration-300  ssm:block md:hidden space-x-2  '>
                                    <Link to={students.to} key={students.id} className='no-underline  text-white hover:text-2xl text-xl text-capitalize duration-300 '>{students.title}</Link>
                                </div>
                            ))

                        }
                    </ul> : null

                }

            </div>
        </div>
    )
}

export default Nav
