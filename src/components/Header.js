import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleHamburgerClick = () => {
    setIsNavActive(!isNavActive);
  };

  const handleNavLinkClick = () => {
    setIsNavActive(false);
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsNavActive(false);
    }
  };

  useEffect(() => {
    if (isNavActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavActive]);
  return (
    <header className="header" id="header">
      <nav className="header__navbar">
        <a href="/" className="header__navbar__link">
          <Image
            src="/images/logo-FanForte.png"
            alt="FanForte Logo"
            width={2470}
            height={559}
            className="header__navbar__link__img"
          />
          <Image
            src="/images/logo-FanForte_for_insta.png"
            alt="FanForte Logo"
            width={2470}
            height={559}
            className="header__navbar__link__img2"
          />
        </a>

        <div className="header__navbar__div">
          <ul
            ref={navRef}
            className={`header__navbar__div__ul ${isNavActive ? "active" : ""}`}
          >
            <li className="header__navbar__div__ul__li">
              <a
                className="header__navbar__div__ul__li__a"
                href="/our-models"
                onClick={handleNavLinkClick}
              >
                <h2 className="header__navbar__div__ul__li__a__h2">
                  Our Models
                </h2>
              </a>
            </li>
            <li className="header__navbar__div__ul__li">
              <a
                className="header__navbar__div__ul__li__a"
                href="/about-us"
                onClick={handleNavLinkClick}
              >
                <h2 className="header__navbar__div__ul__li__a__h2">About us</h2>
              </a>
            </li>
            <li className="header__navbar__div__ul__li">
              <a
                className="header__navbar__div__ul__li__a"
                href="/faq"
                onClick={handleNavLinkClick}
              >
                <h2 className="header__navbar__div__ul__li__a__h2">Faq</h2>
              </a>
            </li>
            <li className="header__navbar__div__ul__li">
              <a
                className="header__navbar__div__ul__li__a"
                href="/contact-form"
                onClick={handleNavLinkClick}
              >
                <h2 className="header__navbar__div__ul__li__a__h2">
                  Contact Form
                </h2>
              </a>
            </li>
          </ul>
        </div>

        <div
          ref={hamburgerRef}
          className={`hamburger ${isNavActive ? "active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
