import "./Hero.css";
import bgImg from "../imgs/bg.jpg"

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="searchBox">
        <form action="">
          <ul>
            <li>
              <input
                className="input1"
                type="text"
                name="" id=""
                placeholder="Enter keywords here..."
              />
            </li>
            <li>
              <select >
                <option value="" >Select Type</option>
                <option value="sale">Sale</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </li>
            <li>
              <select >
                <option value="" >Select Location</option>
                <option value="abu-dhabi">Abu Dhabi</option>
                <option value="al-ghadeer-2">&nbsp;&nbsp;&nbsp;Al Ghadeer 2</option>
                <option value="al-jubail-island">&nbsp;&nbsp;&nbsp;Al Jubail Island</option>
                <option value="al-khalidiyah">&nbsp;&nbsp;&nbsp;Al Khalidiyah</option>
                <option value="al-maryah-island">&nbsp;&nbsp;&nbsp;Al Maryah Island</option>
                <option value="al-raha-beach">&nbsp;&nbsp;&nbsp;Al Raha Beach</option>
                <option value="al-reem-island">&nbsp;&nbsp;&nbsp;Al Reem Island</option>
                <option value="al-shamkha">&nbsp;&nbsp;&nbsp;Al Shamkha</option>
                <option value="corniche-road">&nbsp;&nbsp;&nbsp;Corniche Road</option>
                <option value="danet-abu-dhabi">&nbsp;&nbsp;&nbsp;Danet Abu Dhabi</option>
                <option value="ghantoot">&nbsp;&nbsp;&nbsp;Ghantoot</option>
                <option value="al-ghadeer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al Ghadeer</option>
                <option value="masdar-city">&nbsp;&nbsp;&nbsp;Masdar City</option>
                <option value="saadiyat-island">&nbsp;&nbsp;&nbsp;Saadiyat Island</option>
                <option value="the-marina">&nbsp;&nbsp;&nbsp;The Marina</option>
                <option value="tourist-club-area">&nbsp;&nbsp;&nbsp;Tourist Club Area</option>
                <option value="yas-island">&nbsp;&nbsp;&nbsp;Yas Island</option>
              </select>
            </li>
            <li>
              <input
                type="text"
                name="" id=""
                placeholder="Enter location here..."
              />

            </li>
            <li>
              <input type="submit" value="search" name="" id="" />
            </li>
          </ul>
        </form>
        <p>We’ve more than 50,000 apartments for you to take your pick</p>
      </div>
    </div>
  )
}

export default Hero