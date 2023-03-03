import { } from 'react'
import avatarImg from '../../assets/img/avatar.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import resumePDF from '../../assets/Resume.pdf'

function Home() {
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <div className='flex flex-col items-center text-white'>
                <img className='h-48 w-48 rounded-full mx-auto mb-4' src={avatarImg} />
                <div className='mb-3 text-3xl'>
                    <span>Julio Fonseca</span>
                </div>
                <div className='text-base mb-5 text-center' style={{ fontWeight: '300' }}>
                    <span>21 • Frontend Enginer at <a href={'https://www.softbuilder.com.br/web/'} target={'_blank'}> <span className='hover:text-blue-300'>Softbuilder</span></a>• Ceará, Brazil</span>
                </div>
                <div className='flex gap-5'>
                    <a href={'https://www.linkedin.com/in/ojuliofonseca/'} target={'_blank'}>
                        <AiFillLinkedin size={'28px'} />
                    </a>
                    <a href={'https://github.com/JulioFonseca'} target={'_blank'}>
                        <AiFillGithub size={'28px'} />
                    </a>
                    <a href={'https://twitter.com/jufonx'} target={'_blank'}>
                        <FaTwitter size={'28px'} />
                    </a>
                </div>
            </div>
            <div className='flex gap-5 justify-end items-end max-h-screen text-white z-10 absolute bottom-2'>
                <a href='mailto:juliocezar5716@gmail.com?Subject=Hey' className='hover:text-blue-300'> hire me </a>
                <a href={resumePDF} target='_blank' className='hover:text-blue-300'> Resume </a>
            </div>
        </div>
    )
}

export default Home
