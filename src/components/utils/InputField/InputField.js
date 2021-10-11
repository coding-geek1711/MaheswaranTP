import React, {useRef} from 'react'
import './InputField.css'

export default function InputField({change, classNameInputField, placeHolder}) {
    const ref = useRef()

    return (
        <div>
            <input type="text" ref={ref} onChange={() => change(ref.current.value)} className={classNameInputField} placeholder={placeHolder}/>
        </div>
    )
}
