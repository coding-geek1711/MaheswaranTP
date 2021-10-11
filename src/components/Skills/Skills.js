import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/less/font-awesome.less'

export default function Skills() {
    return (
        <div className="bg-blueSecondary flex items-center flex-col w-full py-10">
            <h1 className="text-black text-5xl">Skills</h1>
            <h3 className="text-black text-3xl pt-4">I have experience in</h3>
            <div className="flex flex-col flex-wrap md:flex-row justify-evenly items-center w-full pl-24 pr-24 pt-12">
                <div className="NodeJS pb-3 flex flex-col justify-center items-center">
                    <i className="fab fa-node-js text-9xl hover:text-greenWebsite transition py-2"></i>
                    <h3 className="text-2xl">NodeJS</h3>
                </div>
                <div className="HTML5 pb-3 flex flex-col justify-center items-center">
                    <i className="fab fa-html5 text-9xl hover:text-greenWebsite transition py-2"></i>
                    <h3 className="text-2xl">HTML5</h3>
                </div>
                <div className="ReactJS pb-3 flex flex-col justify-center items-center">
                    <i className="fab fa-react text-9xl hover:text-greenWebsite transition py-2"></i>
                    <h3 className="text-2xl">ReactJS</h3>
                </div>
                <div className="CSS pb-3 flex flex-col justify-center items-center">
                    <i className="fab fa-css3-alt text-9xl hover:text-greenWebsite transition py-2"></i>
                    <h3 className="text-2xl">CSS3</h3>
                </div>
                <div className="Python pb-3 flex flex-col justify-center items-center">
                    <i className="fab fa-python text-9xl hover:text-greenWebsite transition py-2"></i>
                    <h3 className="text-2xl">Python</h3>
                </div>    
            </div>
        </div>
    )
}
