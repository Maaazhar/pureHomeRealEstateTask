import Link from "next/link"
import "./NeighborhoodCard.css"
import NeighborhoodImg from "../imgs/Alreem-Island-AD.jpeg"
import Image from "next/image"

const NeighborhoodCard = () => {
  return (
    <div className="neighborhoodCard">
      {/* <Image src={NeighborhoodImg} /> */}
      <div className="imgWrapper"></div>
      <div className="cardLinks">
        <div className="textLink">
          <p>112 Properties in</p>
          <Link href="#">al reem</Link>
        </div>
        <div className="buttonLink">
          <Link href="#"><i className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default NeighborhoodCard