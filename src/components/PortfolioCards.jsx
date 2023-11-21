import { cards } from "../data/data";
import { ImArrowUpRight2 } from "react-icons/im";

const PortfolioCards = () => {
  return (
    <div className="mt-[30px]">
    {
        cards.map((item) => (
          <div key={item.id} >
            <div className="flex justify-evenly p-4 border-2 rounded-full m-3 text-gray-200  ">
              <h1 className="w-[50%]">{item.name}</h1>
              <div className="flex flex-row w-[100%] justify-around items-center">
                  <p className="">CATEGORY {item.category}</p>
                  <p>STATUS {item.status}</p>
                  <p>BUILDING AREA {item.buildingArea}</p>
                  <span><ImArrowUpRight2  size={25} color="white"/></span>
              </div>
            </div>
          </div>
        ))
    }
  </div>
  )
}

export default PortfolioCards
