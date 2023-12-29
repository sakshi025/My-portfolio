import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Skill from '../Pages/Skill'
import Projects from '../Pages/Projects';

const Main = () => {
    return (
        <div>


            <BrowserRouter>


                <Nav />


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/skill' element={<Skill />} />
                    <Route path='/projects' element={<Projects />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main