import NeighborhoodCard from "../(components)/NeighborhoodCard"
import "./Neighborhood.css"

const Neighborhood = () => {
  const createArray = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  const partnerList = createArray(6);
  return (
    <div className="neighborhood">
      <div className="header">
        <span className="typography1">Top Areas</span>
        <span className="typography2">Find Your Neighborhood</span>
      </div>
      <div className="neighborhoodCards">
        <div className="cardHolder">
          <div className="card2">
            <NeighborhoodCard />
            <NeighborhoodCard />
          </div>
          <div className="card">
            <NeighborhoodCard />
          </div>
        </div>
        <div className="cardHolder">
          <div className="card">
            <NeighborhoodCard />
          </div>
          <div className="card2">
            <NeighborhoodCard />
            <NeighborhoodCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Neighborhood