import React from 'react'
import './Buttons.css'

export default function ScrollButton(props) {
    const scrollToRef = (myRef) => {
        myRef.current.scrollIntoView();
        // console.log(myRef);
    }

    return (
        <div>
            <button onClick={() => scrollToRef(props.myRef)}>
                <div className="scrollbutton hover:bg-bluePrimary transition shadow-xl shadow-inner bg-greenWebsite h-16 w-16 rounded-full flex justify-center items-center">                            
                    <svg className="h-10 w-10" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0225 0.644226L24 18.5826L41.9775 0.644226L47.5 6.16673L24 29.6667L0.5 6.16673L6.0225 0.644226Z" fill="white"/>
                    </svg>
                </div>
            </button>
        </div>
       
    )
}
