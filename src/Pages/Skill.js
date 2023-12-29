import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Skill() {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])
    return (
        <div className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-20 leading-normal uppercase text-light-blue">Skills</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-normal gap-20">
                <h1 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-dark-blue rounded-3xl h-36 w-44 border-2 border-light-blue b_glow"  >HTML</h1>
                <h1 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-dark-blue rounded-3xl h-36 w-44 border-2 border-light-blue b_glow"  >C++</h1>
                <h1 data-aos='fade-up' className="text-[26px] flex items-center justify-center font-semibold text-dark-blue rounded-3xl h-36 w-44 border-2 border-light-blue b_glow"  >React</h1>
                <h1 data-aos='fade-down' className="text-[26px] flex items-center justify-center font-semibold text-dark-blue rounded-3xl h-36 w-44 border-2 border-light-blue b_glow"  >Tailwind css</h1>

            </div>
            <button className='neno-button shadow-xl hover:shadow-light-blue  text-black hover:text-dark-blue text-bold border-2 hover:bg-yellow-100 border-yellow-200 mt-20 rounded-lg py-4 px-8 uppercase relative overflow-hidden' >Show-more</button>
        </div>


    )
}
export default Skill