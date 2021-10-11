import React from 'react'
import './Buttons.css'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default function Button({onClickHandler, buttonText, buttonCssProps, backgroundColor}) {
  async function createRipple(event) {
    event.preventDefault()
    console.log(event);
    // logToConsole(event)
    const {inputName,  message} = onClickHandler;

    // console.log(encode({"form-name":"contact", name:inputName, message:message}));
    const response = await fetch("/", {
      method:"POST",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:encode({"form-name":"contact", name:inputName, message:message})
    })

    console.log(response);
  }





  return (
    <div className="">
      <button onClick={createRipple} className={buttonCssProps} style={{backgroundColor:backgroundColor}}>{buttonText}</button>
    </div>
  )
}


  // ReactDOM.render(<App />, document.getElementById("root"));
