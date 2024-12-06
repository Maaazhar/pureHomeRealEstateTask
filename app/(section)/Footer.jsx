import Image from "next/image"
import "./Footer.css"
import Link from "next/link"
import footerBg from "../imgs/white-and-green-logo.png"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="aboutLinks">
          <div className="about">
            <div className="imgWrapper">
              <Image src={footerBg}/>
            </div>
            <div className="text">
              <p>Pure Home Real Estate had been established in 2011 with a focus on the real estate industry in the emirate of Abu Dhabi, the capital of the United Arab Emirates.</p>
            </div>
            <div className="social">
              <ul>
                <li> <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link> </li>
                <li> <Link href="#"><i className="fa-brands fa-x-twitter"></i></Link> </li>
                <li> <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link> </li>
                <li> <Link href="#"><i className="fa-brands fa-instagram"></i></Link> </li>
                <li> <Link href="#"><i className="fa-brands fa-youtube"></i></Link> </li>
              </ul>
            </div>
          </div>
          <div className="links">
            <p className="title">quick links</p>
            <ul>
              <li><Link href="#">home</Link></li>
              <li><Link href="#">about</Link></li>
              <li><Link href="#">developers</Link></li>
              <li><Link href="#">careers</Link></li>
              <li><Link href="#">blog</Link></li>
              <li><Link href="#">contact</Link> us</li>
            </ul>
          </div>
        </div>
        <div className="newsletterContact">
          <div className="newsletter">
            <p className="title">newsletter</p>
            <form action="">
              <input type="text" placeholder="Enter your email address"/>
              <input type="submit" value="subscribe"/>
              <p>We will never spam you...!</p>
            </form>
          </div>
          <div className="contact">
            <p className="title">contact</p>
            <div className="contactItem">
              <i className="fa-solid fa-location-dot"></i>
              <p>Pure Home Real Estate LLC Al Wahda Complex – Hazza Bin Zayed the First St . P.O. Box: 110388, Abu Dhabi</p>
            </div>
            <div className="contactItem">
              <i className="fa-regular fa-envelope"></i>
              <Link href="mailto:Info@purehome-re.ae">Info@purehome-re.ae</Link>
            </div>
            <div className="contactItem">
              <i className="fa-solid fa-phone"></i>
              <Link href="tel:(+971) 02 446 6775">(+971) 02 446 6775</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <ul className="termsPrivacy">
          <li> <Link href="#">Terms of Use</Link> </li>
          <li> <Link href="#"> Privacy Policy</Link> </li>
        </ul>
        <p className="copyright">2011 - {currentYear}© All right reserved by Purehome Real Estate LLC.</p>
      </div>
    </div>
  )
}

export default Footer