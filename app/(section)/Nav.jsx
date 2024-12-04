'use client'
import Image from "next/image"
import navLogo from "../imgs/white-and-green-logo.png"
import "./Nav.css";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [navBgColor, setNavBgColor] = useState(false)
  const changeColor = () => window.scrollY >= 20 ? setNavBgColor(true) : setNavBgColor(false);
  window.addEventListener("scroll", changeColor);

  const menuItem = [ "Home", "Buy", "Rent", "Developers", "Offplan Projects", "About", "Careers", "Contact Us", ];

  return (
    <div className={navBgColor ? "navBar sticky" : "navBar"}>
      <div className="navContainer">
        <div className="navLogoWrapper">
          <Link href="/">
            <Image
              className="navLogo"
              src={navLogo}
              alt="Pure Home logo"
            />
          </Link>
        </div>
        <div className="navListWrapper">
          <ul>
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="/">Buy</Link></li>
            <li><Link href="/">Rent</Link></li>
            <li><Link href="/">Developers</Link></li>
            <li><Link href="/">Offplan Projects</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Careers</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav