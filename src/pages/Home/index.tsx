import { } from 'react'
import avatarImg from '../../assets/mini-avatar-julio.png'
import resumePDF from '../../assets/Resume.pdf'

function Home() {
    return (
        <div className="p-20 py-28">
            <div className="bg-gray-200 rounded-2xl">
                <div className="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 lg:flex lg:items-center ">
                    <div className='rounded-full scale-90'>
                        <img src={avatarImg}>
                        </img>
                    </div>
                    <h2 className=" font-extrabold tracking-tight text-gray-900 lg:ml-4">
                        <span className="block text-3xl sm:text-4xl">Hello! I am Julio</span>
                        <span className="block text-indigo-600 text-xl">I´m a 2 year experienced
                            Junior Software Engineer </span>
                    </h2>
                </div>
                <div className='px-10 pb-5 flex justify-center'>
                <div className="mt-8 flex lg:mt-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="mailto:juliocezar5716@gmail.com?Subject=Hello" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Contact me </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a href={resumePDF} target='_blank' className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Resume </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
