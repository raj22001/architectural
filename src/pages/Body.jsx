
import property from "../assets/images/property.avif"
import propertyIcon from "../assets/images/propertyicon.avif"
import {ImArrowUpRight2} from "react-icons/im"
import { useSpring, animated } from 'react-spring';
import Cards from "../components/Cards";


const Body = () => {

  {/* State and Animation Setup: */}
    const props = useSpring({
        opacity: 1,
        transform: 'translate(0%, 0%)',
        from: { opacity: 0, transform: 'translate(-50%, -50%)' },
      });

  return (
    <animated.div style={props} className="w-[100%] h-[70%] relative">
      {/* Inner Containers and Image Elements: */}
      
      <div className="w-full h-full ">
        <div className="w-[100%] h-[100%] -ml-1 -z-10">
            <img src={property} alt="propertyImage" className="absolute w-full h-full object-cover rounded-3xl  animate-x-to-y"/> 
            <div className="absolute">

              {/* Text and Button Content: */}
                <div className="ml-[70px]  lg:w-[70%] animate-x-to-y ">
                    <p className= "md:text-xl text-white lg:text-2xl w-[70%] mt-[200px]">Turn on North America-based let join the and hand make your <span> dream come true the best way to buy</span> </p>
                    <h1 className="text-white text-5xl mt-[70px]">The Best Way to Predict <br/> <span>the future is to invent it</span></h1>
                    <button className=" flex lg:items-center lg:justify-center lg:text-xl lg:mt-[20px] p-2 bg-gray-100 rounded-full md:mt-[25px]">Shop Now <span className="ml-1"><ImArrowUpRight2 size={15}/></span></button>
                </div>
            </div>

            {/* Icon and Image at the Bottom: */}
            <div className="flex justify-end relative items-end ">
                    <img src={propertyIcon} className="w-[250px] h-[170px] rounded-2xl mt-[130px] mr-20" />
            </div>
        </div>
            <Cards/> {/* Rendering the Cards component. */}
       </div>
    </animated.div>
  )
}

export default Body
