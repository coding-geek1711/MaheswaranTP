import React from "react";
import Logo from '../utils/Logo/Logo'
import MenuToggler from '../utils/Buttons/MenuToggler'
import './NavBar.css'

export default function Navbar({ setToggle, toggle, scrollRef, footerRef }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const scrollToElement = (scrollRef) => {
    scrollRef.current.scrollIntoView(false);
  }


  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
                <Logo size="h-24 w-24"/>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen)
                setToggle(!toggle)
              }}
            >
                <MenuToggler></MenuToggler>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow justify-center items-center transition bg-grayPrimary bg-opacity-30 lg:bg-transparent lg:opacity-100" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto transition">
              <li className="nav-item">
                <a
                  className="navlink px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-greenWebsite hover:underline focus:text-greenWebsite focus:underline transition"
                  href="#pablo"
                >
                    Home
                </a>
              </li>
              <li className="nav-item">
              <button onClick={() => scrollToElement(scrollRef)}>
                  <a
                    className="navlink px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-greenWebsite hover:underline focus:text-greenWebsite focus:underline transition"
                    href="#pablo"
                  >
                      About
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToElement(scrollRef)}>
                  <a
                    className="navlink px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-greenWebsite hover:underline focus:text-greenWebsite focus:underline transition"
                    href="#pablo"
                  >
                      Resume
                  </a>
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="navlink px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-greenWebsite hover:underline focus:text-greenWebsite focus:underline transition"
                  href="https://github.com/maheswarantp"
                >
                    Projects
                </a>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToElement(footerRef)}>
                  <a
                    className="navlink px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-greenWebsite hover:underline focus:text-greenWebsite focus:underline transition"
                    href="#pablo"
                  >
                      Contact
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
