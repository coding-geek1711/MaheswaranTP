import React from 'react'
import './Buttons.css'

// border-4 border-white h-12 w-48 text-white
export default function ResumeButton({size}) {
    return (
        <div>
            <button className={"resume-button border-4 border-white text-white text-lg flex justify-center items-center "+size}>
                <span className="m-3">Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            </button>
        </div>
    )
}
