import "./Partner.css"
import partnerImg from "../imgs/DP-Logo-150x150.jpg"
import Image from "next/image";

const Partner = () => {
  const createArray = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  const partnerList = createArray(24);
  
  return (
    <div className="partnerWrapper">
      <div className="partnerTypographyWrapper">
        <span className="typography1">Our Partners and Top Developers</span>
        <span className="typography2">We're going to become partners for the long run</span>
        <span className="typography3">We are partnered with the best real estate development companies in the UAE and GCC region.</span>
      </div>
      <div className="partnerLogoWrapper">
        {partnerList.map(() => (<Image src={partnerImg} />))}
      </div>
    </div>
  )
}

export default Partner