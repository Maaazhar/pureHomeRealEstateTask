import Image from "next/image"
import "./PropertyCard.css"
import propertyImg from "../imgs/property-400x240.png"

const PropertyCard = () => {
  return (
    <div className="propertyCard">
      <div className="thumbnail">
        <div className="imgWrapper">
          <Image src={propertyImg} />
        </div>
        <div className="typography">
          <div className="tag"><p>for sale</p></div>
          <div className="price"><p>AED 6,000,000</p></div>
          <div className="type"><p>Apartments</p></div>
        </div>
      </div>
      <div className="detailsWrapper">
        <div className="title"><p>Amazing 1BR Loft Apt | Premium Location | Premium Amenities</p></div>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <p>Yas Island, Abu Dhabi</p></div>
        <div className="roomDetails">
          <div className="roomDetailsItem">
            <i className="fa-solid fa-bed"></i>
            <p>Beds: 1</p>
          </div>
          <div className="roomDetailsItem">
            <i className="fa-solid fa-shower"></i>
            <p>Baths: 2</p>
          </div>
          <div className="roomDetailsItem">
            <i className="fa-solid fa-expand"></i>
            <p>1522 sqft</p>
          </div>
          <div className="roomDetailsItem">
            <i className="fa-solid fa-circle-chevron-right"></i>
            <p>Reference:</p> <span>Sale-0306</span>
          </div>
        </div>
      </div>
      <div className="detailsButtonWrapper">
        <button className="detailsButton"><span>details</span></button>
      </div>
    </div>
  )
}

export default PropertyCard