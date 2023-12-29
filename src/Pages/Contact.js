function Contact() {

    return (
        <div className="p-4 lg:p-20 flex flex-col items-center justify-center ">
            <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase text-light-blue'>Contact Me</h1>
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6">
                    <input className="w-full my-3 rounded-lg bg-sate-800 p-4 border-2 border-light-blue b_glow" placeholder="Enter your name" type='text' />

                    <input className="w-full my-3 rounded-lg bg-sate-800 p-4 border-2 border-light-blue b_glow" placeholder="Enter your email" type='text' />
                </div>
                <textarea name="" className="w-full my-3 rounded-lg bg-sate-800 p-4 border-2 border-light-blue b_glow" placeholder="Write Your message" id="" cols='20'></textarea>

                <button className='neno-button shadow-xl hover:shadow-light-blue  text-black hover:text-dark-blue text-bold border-2 hover:bg-yellow-100 border-yellow-200 mt-20 rounded-lg py-4 px-8 uppercase relative overflow-hidden' >Submit</button>
            </form>
        </div>
    )
}
export default Contact;