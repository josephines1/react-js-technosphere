import { useEffect } from "react";
import { useState } from "react";
import PrimaryButtonLink from "./buttons/PrimaryButtonLink";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  function handleClick() {
    setShow(!show);
    console.log(showClass);
  }

  let showClass = show ? "left-0" : "left-[105%]";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShow(false);
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollClass = scroll ? "bg-white shadow-md" : "bg-transparent";

  return (
    <div
      className={`navbar fixed transition-all w-full py-4 ${scrollClass} z-50`}
    >
      <div className="container mx-auto px-4">
        <div className="navbar-box flex justify-between items-center">
          <div className="logo">
            <a href=".">
              <h1 className="text-lg md:text-2xl font-bold">
                Techno<span className="text-teal-500">Sphere</span>
              </h1>
            </a>
          </div>
          <ul
            className={`flex gap-8 lg:gap-12 flex-col fixed top-24 bg-teal-500 text-white font-bold p-4 rounded-md shadow-md right-0 ${showClass} max-w-[80vw] mx-auto md:flex-row md:static md:bg-transparent md:text-black md:shadow-none transition-all md:p-0 text-center md:text-left`}
          >
            <li>
              <a
                href="#home"
                className="md:opacity-60 font-medium hover:opacity-100 transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="md:opacity-60 font-medium hover:opacity-100 transition-all"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="md:opacity-60 font-medium hover:opacity-100 transition-all"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="md:opacity-60 font-medium hover:opacity-100 transition-all"
              >
                Proyek
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-4">
            <PrimaryButtonLink
              text="Hubungi Kami"
              href="#contact"
              size="small"
              bold={true}
            />
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
