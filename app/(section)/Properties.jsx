import PropertyCard from "../(components)/PropertyCard";
import "./Properties.css";

const Properties = () => {

  const createArray = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  const propertyList = createArray(9);


  return (
    <div className="properties">
      <div className="heading">
        <div className="title">
          <span className="typography1">Our Partners and Top Developers</span>
          <span className="typography2">Latest Properties</span>
        </div>
        <div className="filterButtons">
          <button className="active">sale</button>
          <button>buy</button>
          <button>rent</button>
        </div>
      </div>
      <div className="propertyCards">
        {propertyList.map(()=> ( <PropertyCard /> ))}
      </div>
    </div>
  )
}

export default Properties