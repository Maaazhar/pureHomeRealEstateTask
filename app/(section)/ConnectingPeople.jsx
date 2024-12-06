import Link from "next/link"
import "./ConnectingPeople.css"
import Image from "next/image"
import homeImage from "../imgs/home-5-service-2.png"
import buildings from "../imgs/buildings.png"

const ConnectingPeople = () => {
  return (
    <div className="connectingPeople">
      <Image src={buildings} />
      <div className="connectingPeopleText">
        <p className="cptitle">Connecting People & Property, Perfectly.</p>
        <p className="subtitle">
          We have helped hundreds of People get their dream home in the UAE.
          <br /> <br />
          Let us help you do the same.</p>
        <div className="linkWrapper">
          <i className="fa-solid fa-phone"></i>
          <Link href="tel:+971 2 446 6775" className="link">
            <p>Our Hot Line:</p>
            <p>+971 2 446 6775</p>
          </Link>
        </div>
        <div className="linkWrapper">
          <i className="fa-regular fa-envelope"></i>
          <Link href="mailto:info@purehome-re.ae" className="link">
            <p>Our Hot Line:</p>
            <p>info@purehome-re.ae</p>
          </Link>          
        </div>
        <button className="detailsButton"><span>contact us</span></button>
      </div>
      <div className="connectingPeopleImg">
        <Image src={homeImage} />
      </div>
    </div>
  )
}

export default ConnectingPeople