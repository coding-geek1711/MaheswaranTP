import React from 'react'
import Typewriter from 'typewriter-effect'


export default function LandingText() {
    return (
        <div className="flex justify-between flex-col items-center">
            <div className="flex flex-wrap flex-col justify-center">
                <div className="hello text-3xl lg:text-5xl text-white text-center" style={{textAlign:"center"}}>Hello</div>
                <Typewriter options={{
                    strings:['I am <span class="text-greenWebsite">Maheswaran</span>'],
                    skipAddStyles:true,
                    deleteSpeed:100,
                    autoStart:true,
                    loop:true,
                    pauseFor:2000,
                    cursorClassName:"text-white text-4xl lg:text-6xl",
                    wrapperClassName:"rest text-white text-4xl lg:text-6xl text-left",
                }}/>
                {/* <div className="rest text-white text-4xl lg:text-7xl text-left">I am <span className="text-greenWebsite">Maheswaran</span></div> */}
            </div>
        </div>
        
    )
}
