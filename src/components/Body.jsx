
import property from "../assets/images/property.avif"
import propertyIcon from "../assets/images/propertyicon.avif"
import {ImArrowUpRight2} from "react-icons/im"
import {BsArrowUpRightCircleFill} from "react-icons/bs"


const Body = () => {
  return (
    <div className="w-[100%] h-[70%] relative">
      <div className="w-full h-full ">
        <div className="w-[100%] h-[100%] -ml-1 -z-10">
            <img src={property} alt="propertyImage" className="absolute w-full h-full object-cover rounded-3xl "/> 
            <div className="absolute">
                <div className="ml-[70px]  lg:w-[70%] ">
                    <p className= "md:text-xl text-white lg:text-2xl w-[70%] mt-[200px]">Turn on North America-based let join the and hand make your <span> dream come true the best way to buy</span> </p>
                    <h1 className="text-white text-5xl mt-[70px]">The Best Way to Predict <br/> <span>the future is to invent it</span></h1>
                    <button className=" flex lg:items-center lg:justify-center lg:text-xl lg:mt-[20px] p-2 bg-gray-100 rounded-full md:mt-[25px]">Shop Now <span className="ml-1"><ImArrowUpRight2 size={15}/></span></button>
                </div>
            </div>
            <div className="flex justify-end relative items-end ">
                    <img src={propertyIcon} className="w-[250px] h-[170px] rounded-2xl mt-[130px] mr-20" />
            </div>
        </div>
        <div className="-mt-2 w-[100%] h-[220px] box-border flex flex-row items-center justify-around"> 
               <div className="w-[32%] h-[190px] bg-gray-200 rounded-3xl">
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
               <div className="w-[32%] h-[190px] bg-gray-200 rounded-3xl">
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
               <div className="w-[32%] h-[190px]  bg-black rounded-3xl text-white">
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
    </div>
  )
}

export default Body
