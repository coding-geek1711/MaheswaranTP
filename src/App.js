import React, {useState, useEffect, useRef} from 'react'

// import logo from './assets/images/image1.png';
import ScrollButton from './components/utils/Buttons/ScrollButton'
import About from './components/About/About'
import NavBar from './components/NavBar/NavBar'
import LandingText from './components/LandingText/LandingText'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
  const [toggle, setToggle] = useState(false)
  const[TOGGLE, setTOGGLE] = useState("")
  useEffect(() => {
    if(toggle){
      setTOGGLE(" hidden")
    } else setTOGGLE("")
  }, [toggle])

  const abtRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <div className="App flex flex-col">
      {/* Landing Page */}
      <div ref={homeRef} className="Landing-Page bg-fixed h-screen w-screen bg-cover" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/image1.png)`}}>
        <NavBar setToggle={setToggle} toggle={toggle} scrollRef={abtRef} footerRef={footerRef}/>
        <div className="flex justify-center items-center mt-24">
          <LandingText />
        </div>
        <div className={"flex justify-center items-end mt-24" + TOGGLE + " lg:flex"}>
          <ScrollButton myRef={abtRef}></ScrollButton>
        </div>
      </div>
      {/* About Page */}
      <div ref={abtRef} className="About-Page bg-bluePrimary w-screen">
        <About></About>
      </div>
      {/* Skills */}
      <div className="Skills-Page bg-blueSecondary w-screen">
        <Skills></Skills>
      </div>
      {/* Footer */}
      <div ref={footerRef} className="footer w-screen">
        <Footer homeRef={homeRef} abtRef={abtRef} footerRef={footerRef} />
      </div>
    </div>
  );
}

export default App;