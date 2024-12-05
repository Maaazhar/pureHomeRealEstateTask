import "./WhyChooseUs.css"
import partnerImg from "../imgs/DP-Logo-150x150.jpg"
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {

  return (
    <div className="whyChooseUsWrapper">
      <div className="whyChooseUsVideoWrapper">
        <Link href="https://www.youtube.com/watch?v=GBaBi9RUoSk">
          <button>
            <i className="fa-solid fa-play"></i>
          </button>
        </Link>
      </div>
      <div className="whyChooseUsTypographyWrapper">
        <span className="typography1">Why Choose Our Properties</span>
        <span className="typography2"> We are experts in local and international property listings</span>
        <span className="typography3">Our residential, retail, and commercial projects all have something in common. They aspire to stimulate immediate surroundings and enrich the lives of the people that interact with them.</span>
        <div className="reasonList">
          <ul>
            <li>Outstanding property</li>
            <li>Modern City Locations</li>
            <li>Specialist services</li>
            <li>Market-leading listings</li>
          </ul>
        </div>
        <button className="detailsButton"><span>read more</span></button>
      </div>
    </div>
  )
}

export default WhyChooseUs