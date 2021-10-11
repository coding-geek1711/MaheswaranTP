import React, { useState, useEffect }from 'react'
import InputField from '../utils/InputField/InputField'
import Logo from '../utils/Logo/Logo'
import Social from '../utils/Social/Social'
import SubmitButton from '../utils/Buttons/Button'

export default function Footer({homeRef, abtRef, footerRef}) {
    const [inputName, setInputName] = useState("")
    const [message, setMessage] = useState("")
    
    const messageBox = {inputName, message}

    // const scrollToElement = (ref) => ref.current.scrollIntoView()

    const scrollToElement = (myRef) => {
        myRef.current.scrollIntoView();
        // console.log(myRef);
    }

    return (
        <div className="footer w-full h-full flex flex-col">
            <div className="footer-primary bg-footerPrimary w-full flex flex-col md:flex-row justify-around">
                <div className="footer-primary-col-1 flex flex-col pt-8 justify-center items-center">
                    <div className="">
                        <Logo size="h-36 w-36"/>
                    </div>
                    <div className="flex flex-row text-white">
                        <Social SocialSVG='github' classDetails={"h-12 w-12 bg-black rounded hover:bg-greenWebsite m-2"} link={"https://github.com/coding-geek1711"}/>
                        <Social SocialSVG='discord' classDetails={"h-12 w-12 bg-black rounded hover:bg-greenWebsite m-2"} link={""}/>
                        <Social SocialSVG='linkedin' classDetails={"h-12 w-12 bg-black rounded hover:bg-greenWebsite m-2"} link={"https://www.linkedin.com/in/maheswaran-parameswaran-4b0204193/"}/>
                    </div>
                </div>
                <div className="footer-primary-col-2 flex flex-col pt-8 justify-center items-center">
                    <h1 className="text-4xl text-white mb-8">Links</h1>
                    <ul className="list-none text-center">
                        <li onClick = {() => scrollToElement(homeRef)} className="text-grayPrimary hover:text-greenWebsite cursor-pointer">Home</li>
                        <li onClick = {() => scrollToElement(abtRef)} className="text-grayPrimary hover:text-greenWebsite cursor-pointer">About</li>
                        <li onClick = {() => scrollToElement(abtRef)} className="text-grayPrimary hover:text-greenWebsite cursor-pointer">Resume</li>
                        <li onClick = {() => scrollToElement()} className="text-grayPrimary hover:text-greenWebsite cursor-pointer">Projects</li>
                        <li onClick = {() => scrollToElement(footerRef)} className="text-grayPrimary hover:text-greenWebsite cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className="footer-primary-col-3 flex flex-col pt-8 justify-center items-center">
                    <h1 className="text-4xl text-white mb-8">Get in Touch ?</h1>
                    <div className="flex flex-col">
                        <form action="/" method="POST" name="contact" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            <InputField change={setInputName} classNameInputField={"rounded bg-graySecondary p-1 text-sm text-white hover:bg-grayPrimary focus:bg-grayPrimary w-full mb-2"} placeHolder="email"></InputField>
                            <InputField change={setMessage} classNameInputField={"rounded bg-graySecondary p-1 text-sm text-white hover:bg-grayPrimary focus:bg-grayPrimary w-full h-16"} placeHolder="message"></InputField>
                            <SubmitButton onClickHandler={messageBox} buttonText={"Submit"} buttonCssProps={"button mb-3 w-full mt-2 text-white rounded"} backgroundColor={"#2ADDA7"}/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-secondary w-full flex justify-center items-center bg-footerSecondary">
                <h1 className="text-white text-lg">Designed by Maheswaran | 2021</h1>
            </div>
        </div>
    )
}
