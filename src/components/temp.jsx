/*


import property from "../assets/images/property.avif"
import propertyIcon from "../assets/images/propertyicon.avif"
import {ImArrowUpRight2} from "react-icons/im"
import {BsArrowUpRightCircleFill} from "react-icons/bs"
import Slideer from "./slideer"


const Body = () => {
  return (
    <div className="w-[100%] h-[70%]  overflow-y-auto">
      <div className="w-full h-full absolute">
        <div className="absolute -ml-1 w-[92%] h-[60%]">
            <img src={property} alt="propertyImage" className="relative w-full h-full object-cover rounded-3xl"/>
        </div>
        <div className="w-[87%] flex flex-col">

        <div className="absolute ml-[70px]  lg:w-[70%] ">
            <p className= "md:text-xl text-white lg:text-2xl  mt-[200px]">Turn on North America-based let join the and hand make your<br/> <span> dream come true the best way to buy</span> </p>
            <h1 className="text-white text-5xl mt-[70px]">The Best Way to Predict <br/> <span>the future is to invent it</span></h1>
            <button className=" flex lg:items-center lg:justify-center lg:text-xl lg:mt-[20px] p-2 bg-gray-100 rounded-full md:mt-[25px]">Shop Now <span className="ml-1"><ImArrowUpRight2 size={15}/></span></button>
        </div>
        <div className=" flex justify-end ">
            <img src={propertyIcon} className="w-[250px] h-[170px] rounded-2xl mt-[130px]" />
        </div>
        </div>
        <div className="absolute xl:mt-[250px] lg:mt-[250px] -ml-1 w-[92%] h-[290px] box-border flex flex-row items-center justify-around md:mt-[320px]"> 
               <div className="w-[30%] h-[190px] bg-gray-200 rounded-3xl">
                    <div className="">
                        <div className="flex justify-end">
                            <h1 className="text-end mr-7 mt-2 p-2 border border-gray-400 rounded-3xl ">Task </h1>
                        </div>
                        <p className="xl:text-8xl lg:text-6xl ml-5 ">10 K</p>
                        <div className="p-2 pl-6 flex justify-between">
                            <span className="text-gray-500 lg:text-sm">EMPLOYEES ALL OVER THE WORLD</span> 
                            <span className="mr-7"><BsArrowUpRightCircleFill size={25}/></span>
                        </div>
                    </div>
               </div>
               <div className="w-[30%] h-[190px] bg-gray-200 rounded-3xl">
               <div className="">
                    <div className="flex justify-end">
                            <h1 className="text-end mr-7 mt-2 p-2 "></h1>
                    </div>
                        <p className="xl:text-8xl lg:text-6xl mt-5 ml-5 ">$12 Bn</p>
                        <div className="p-1 pl-6 flex justify-between items-center">
                            <span className="text-gray-500 lg:text-sm p-2">OF CONSTRUCTION </span> 
                            <span className="mr-7 "><img src={propertyIcon } className="w-[75px] h-[35px] rounded-3xl" /></span>
                        </div>
                    </div>  
               </div>
               <div className="w-[30%] h-[190px] bg-black rounded-3xl text-white">
               <div className="">
                    <div className="flex justify-end">
                            <h1 className="text-end mr-6 mt-1 p-2 flex bg-white rounded-3xl text-black">Explore our Work <span className="ml-2"><BsArrowUpRightCircleFill size={25}/></span></h1>
                    </div>
                        <p className="xl:text-8xl lg:text-6xl ml-5  ">1,500</p>
                        <div className="p-1 pl-6 flex justify-between items-center">
                            <span className="text-gray-500 lg:text-sm p-2">PROJECTS EACH YEAR </span> 
                        </div>
                    </div>  
               </div>
        </div>
      </div>
      <Slideer/>
    </div>
  )
}

export default Body


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
            description:"The Way we build just like wow",
            area:"124 850 m^2",
            propertyKey:"appartment",
            propertyValue:"1 300",
            propertyKey2:"Parking Area",
            propertyValue2:"900",
            button1:"PUBLIC BULDINGS",
            button2:"IMPLEMENTED",
            type:{
                name:"Restaurant",
                category:"PUBLIC BULDINGS",
                status:"IMPLEMENTED",
                buildingArea:"600 M^2"

            }
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
            type:{
                name:"Business Center",
                category:"PUBLIC BULDINGS",
                status:"IMPLEMENTED",
                buildingArea:"1 800 M^2"
            }
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
            type:{
                name:"Care Ambulatory",
                category:"PUBLIC BULDINGS",
                status:"IMPLEMENTED",
                buildingArea:"900 M^2"
            }
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
    <div className="w-full h-full bg-gray-600 mt-[600px] rounded-3xl">
      <div className="flex flex-wrap justify-center gap-x-10 p-4 pl-1">
        {Portfolios.map((portfolio, index) => (
          <div
            key={portfolio.id}
            className={`relative w-[30%] h-[100%] cursor-pointer grayscale transition-all ${
              expandedIndex === index ? 'grayscale-hover lg:w-[35%] lg:h-[55%] xl:w-[28%]' : ''
            } transition-all`}
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            <img src={portfolio.img} alt={`imgPortfolio${index}`} className="w-full h-full object-cover rounded-md" />
            {
              expandedIndex === index ? (
                <div className="absolute -mt-[65%] ml-6">
                <div className="gap-y-3 text-gray-200 lg:text-xl">

                  <h1 className="lg:text-2xl font-bold mb-4">{portfolio.name}</h1>

                  <p className="text-gray-200 mb-3">{portfolio.area}</p>
                  <p className="mb-5">{portfolio.propertyValue}<br/><span>{portfolio.propertyKey}</span></p>
                  <p className="mb-5">{portfolio.propertyValue2}<br/><span>{portfolio.propertyKey2}</span></p>
                </div>

                <div className="flex mt-[17%] space-x-5 text-gray-300">
                  <button className="border-2 rounded-3xl p-2">{portfolio.button1}</button>
                  <button className="border-2 rounded-3xl p-2">{portfolio.button2}</button>
                </div>
              </div>
              ) : (
                <div>

                <div className="absolute -mt-[25%] flex flex-col  mx-auto">
                <h1 className="lg:text-2xl text-xl text-gray-200 text-center">{portfolio.name} </h1>
                <p className="lg:text-xl text-center text-gray-50 ">{portfolio.description}</p>

        </div>
        <div className="flex -mt-[35%] justify-end  mr-6 ">
                {
                  index % 2 !== 0 ? (<span className="-mt-[25%]"><BsArrowUpRightCircle  size={35}/></span>) : (<span className="-mt-[25%]"><TbCircleArrowUpRight size={35}/></span>) 
                }
              </div>
                </div>

              ) 
            }
           
            <div>

            </div>

           
          </div>

          
        ))}
      </div>
      <div className="mt-[200px]">
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

*/