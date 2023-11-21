 //data for cards
import { Portfolios } from "../data/data";

//for state mangement
import { useState } from "react"

//icons for some uses.
import { BsArrowUpRightCircle } from "react-icons/bs";
import { TbCircleArrowUpRight } from "react-icons/tb"
import PortfolioCards from "../components/PortfolioCards";

const Portfolio = () => {
 
    {/* State for tracking the expanded index of the portfolio item */ }
    const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="w-full h-[900px] bg-black  rounded-b-3xl transition-all duration-500">
        <div className="flex justify-center gap-x-5 p-4 pl-1">
          
         {/* Mapping through portfolio data */}
            {
              Portfolios.map((portfolio , index) =>(
                <div key={portfolio.id}
                  className={`relative w-[40%] h-[500px] cursor-pointer grayscale transition-all ${expandedIndex === index ? 'grayscale-hover h-[550px] w-[50%]' : ""} transition-all`}

                  onMouseEnter={() => setExpandedIndex(index)}
                  onMouseLeave={() => setExpandedIndex(null)}
                >
                    <img src={portfolio.img} alt={`imgPortfolio${index}`}  className="w-full h-full object-cover rounded-md"/>
                    {
                      expandedIndex === index ? (
                        <div className="absolute md:-mt-[115%] lg:-mt-[100%] 2xl:-mt-[65%] ml-6">
                        <div className="lg:gap-y-3 text-gray-200 lg:text-xl md:gap-y-1">
        
                          <h1 className="lg:text-2xl font-bold mb-4">{portfolio.name}</h1>
        
                          <p className="text-gray-200 mb-3">{portfolio.area}</p>
                          <p className="mb-5">{portfolio.propertyValue}<br/><span>{portfolio.propertyKey}</span></p>
                          <p className="mb-5">{portfolio.propertyValue2}<br/><span>{portfolio.propertyKey2}</span></p>
                        </div>
        
                        <div className="flex lg:mt-[17%] space-x-5 text-gray-300">
                          <button className="border-2 rounded-3xl p-2">{portfolio.button1}</button>
                          <button className="border-2 rounded-3xl p-2">{portfolio.button2}</button>
                        </div>
                      </div>

                      ) : (
                          <div>
                            <div className="absolute -mt-[30%] flex flex-col mx-auto">
                                <h1 className="lg:text-2xl text-xl text-gray-800 font-extrabold mb-[20px] m-3">{portfolio.name} </h1>
                                <p className="lg:text-xl lg:w-[50%] lg:m-3 xl:w-[80%] md:w-[90%] xl:m-3 text-gray-50 ">{portfolio.description}</p>
                              </div>

                              <div className="flex -mt-[35%] justify-end  mr-6">
                                  {
                                    index % 2 !== 0 ? (<span className="-mt-[45%]"><BsArrowUpRightCircle color="white" size={35}/></span>) : (<span className="mt-[15%]"><TbCircleArrowUpRight size={40}/></span>) 
                                  }
                              </div>
                          </div>
                      )
                    }
                </div>
              ))
            }
        </div>
            <PortfolioCards/>
    </div>
  )
}

export default Portfolio
