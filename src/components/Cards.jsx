import {BsArrowUpRightCircleFill} from "react-icons/bs"
import propertyIcon from "../assets/images/propertyicon.avif"

const Cards = () => {
  return (
    <div className="-mt-2 w-[100%] h-[220px] box-border flex flex-row items-center justify-around"> 
    <div className="w-[32%] h-[190px] bg-gray-200 rounded-3xl">
         <div className="">

            {/* Content of First Card: */}
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

        {/* Content of Second Card: */}
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

        {/* Content of Third Card: */}
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
  )
}

export default Cards
