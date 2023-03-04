import { } from 'react'
import avatarImg from '../../assets/img/avatar.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineMedium } from 'react-icons/ai';
import { FaDev, FaStackOverflow } from 'react-icons/fa';


import resumePDF from '../../assets/resume-julio-fonseca.pdf'

function Home() {
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <div className='flex flex-col items-center text-white'>
                <img className='h-48 w-48 rounded-full mx-auto mb-4' src={avatarImg} />
                <div className='mb-3 text-3xl'>
                    <span>Julio Fonseca</span>
                </div>
                <div className='text-base mb-5 text-center' style={{ fontWeight: '300' }}>
                    <span>21 • Frontend Enginer at <a href={'https://www.softbuilder.com.br/web/'} target={'_blank'}> <span className='hover:text-blue-300'>Softbuilder</span></a> • Ceará, Brazil</span>
                </div>
                <div className='flex gap-3'>
                    <a href={'linkedin.com/in/ojuliofonseca/'}>
                        <AiFillLinkedin size={'25px'} />
                    </a>
                    <a href={'github.com/JulioFonseca'}>
                        <AiFillGithub size={'25px'} />
                    </a>
                    <a href={'ojuliofonseca.medium.com/'}>
                        <AiOutlineMedium size={'25px'} />
                    </a>
                    <a href={'dev.to/juliofonseca'}>
                        <FaDev size={'25px'} />
                    </a>
                    <a href={'stackoverflow.com/users/10274207/julio-fonseca'}>
                        <FaStackOverflow size={'25px'} />
                    </a>
                </div>
            </div>
            <div className='flex gap-5 justify-end items-end max-h-screen text-white z-10 absolute bottom-2'>
                <a href='mailto:juliocezar5716@gmail.com?Subject=Hey' className='hover:text-blue-300'> hire me </a>
                <a href={resumePDF} target='_blank' className='hover:text-blue-300'> resume </a>
            </div>
        </div>
    )
}

export default Home
