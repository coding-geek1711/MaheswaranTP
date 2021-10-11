import React from 'react'
// import logo from '../assets/images/image1.png';
// import logo from '../../assets/images/image1.png'
import ResumeButton from '../utils/Buttons/ResumeButton'

export default function About() {
    return (
        <div className="flex w-screen justify-center flex-col items-center text-white bg-bluePrimary py-10">
            <h1 className="text-5xl mb-14">About</h1>
            <div className="container flex justify-evenly flex-wrap flex-row lg:flex-row">
                <div className="image-container h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 m-10 rounded-full" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/image1.png)`}}></div>
                <div className="whoami-container w-72 m-10 flex flex-col">
                    <h2 className="text-white text-3xl mb-8 text-center">Who am I?</h2>
                    <p className="text-grayPrimary text-xl">
                    I am currently a Second Year student at Federal Institute of Science and Technology, Angamaly. I am a budding Software Developer and proficient in Javascript and Python. I also actively work in Artificial Intelligence and Deep Learning and am constantly looking for interesting technologies. I enjoy reading, swimming and sometimes playing my guitar.
                    </p>
                </div>
                <div className="contact-container h-72 w-72 m-10 flex flex-col justify-center">
                    <h2 className="text-white text-3xl mb-8 text-center">Contact Details</h2>
                    <div className="flex flex-col justify-center">
                    <p className="text-grayPrimary text-xl mb-8">Contact: <a href="mailto:me@maheswarantp.com" className="no-underline transition hover:underline">me@maheswarantp.com</a></p>
                    <p className="text-grayPrimary text-xl mb-8">Contact: <br /><a href="mailto:me@maheswarantp.com" className="no-underline transition hover:underline">mahestpm@gmail.com</a></p>            
                    </div>
                </div>
            </div>
            <div className="w-3/4 h-24">
                <ResumeButton size={"w-full h-full"}></ResumeButton>
            </div>
        </div>
    )
}
