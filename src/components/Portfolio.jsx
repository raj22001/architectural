import skyhall  from "../assets/Protfolio/skyhall.jpeg"
import architectureImg from "../assets/Protfolio/architectureImage.jpg"
import businesscenter from "../assets/Protfolio/businesscenter2.avif"
import { useState } from "react"
import { BsArrowUpRightCircle } from "react-icons/bs";
import { TbCircleArrowUpRight } from "react-icons/tb"
import { ImArrowUpRight2 } from "react-icons/im";

const Portfolio = () => {

    const Portfolios = [
        {
            id:1,
            name:"Sky Hal",
            img: skyhall,
            description:"We provide companeshment mangement services through the development design and construction phases",
            area:"124 850 m^2",
            propertyKey:"appartment",
            propertyValue:"1 300",
            propertyKey2:"Parking Area",
            propertyValue2:"900",
            button1:"PUBLIC BULDINGS",
            button2:"IMPLEMENTED",
        },
        {   
            id:2,
            name:"ArchitectureImg",
            img: architectureImg,
            description:"We provide companeshment mangement services through the development design and construction phases",
            area:"12 850 m^2",
            propertyKey:"People",
            propertyValue:"700",
            propertyKey2:"Engineers",
            propertyValue2:"500",
            button1:"PUBLIC BULDINGS",
            button2:"IMPLEMENTED",

        },
        {
            id:1,
            name:"Business Center",
            img: businesscenter,
            description:"The Building focuse the just like wow and all we provide love with the people and adawd sd wd asdw dsdaw ",
            area:"1 850 m^2",
            propertyKey:"Offces",
            propertyValue:"300",
            propertyKey2:"Parking Area",
            propertyValue2:"900",
            button1:"PUBLIC BULDINGS",
            button2:"IMPLEMENTED",
        }

    ]

    const cards = [
      
      {
        id:1,
        name:"Restaurant",
        category:"PUBLIC BULDINGS",
        status:"IMPLEMENTED",
        buildingArea:"600 M^2"

      },
      {
        id:2,
        name:"Business Center",
        category:"PUBLIC BULDINGS",
        status:"IMPLEMENTED",
        buildingArea:"1 800 M^2"
      },
      {
        id:3,
        name:"Care Ambulatory",
        category:"PUBLIC BULDINGS",
        status:"IMPLEMENTED",
        buildingArea:"900 M^2"
      }
    ]
    
    const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="w-full h-[900px] bg-black  rounded-b-3xl transition-all duration-5 00">
        <div className="flex justify-center gap-x-5 p-4 pl-1">
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
        <div className="mt-[25px]">
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
    </div>
  )
}

export default Portfolio
