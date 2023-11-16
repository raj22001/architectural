import mangment from "../assets/servicesImage/mangment.jpg"
import office from "../assets/servicesImage/office.jpg"
import circular from "../assets/servicesImage/circular.jpg"
import { FaCirclePlay } from "react-icons/fa6";

const Services = () => {
    
  return (
    <div className="mt-[320px] w-[100%] h-[750px] relative flex justify-center">
        <div className=" w-[95%] h-full ">
            <div className="w-[100%] h-full flex flex-row">
                <div className="w-[40%] ">
                    <p className="">We Provide comprehensive management services through the development design and contruction phases of general building projects</p>
                    <div className="w-[35] h-[70] mt-10">
                        <img src={mangment} className="w-full h-[350px] object-cover m-2 rounded-3xl"/>
                        <img src={office} className="w-full h-[250px] object-cover m-2 rounded-3xl"/>
                    </div>
                </div>
                <div className="flex flex-col w-[60%] ">
                    <div className="flex justify-end mr-10 gap-x-3  ">
                        <div className="w-[32%] h-[300px] rounded-2xl ">
                            <img src={circular} className="w-full h-full rounded-2xl" />
                            <span className="relative flex xl:-mt-[25%] lg:-mt-[15%] ml-[10%] gap-2 text-gray-500 md:-mt-[55%]"><FaCirclePlay size={25} color="black"/>LEARN MORE ABOUT
                            </span>
                        </div>

                        <img src={circular} className="w-[50%] h-[300px] rounded-3xl" />
                    </div>
                    <div className="flex w-[100%] justify-start">
                        <h1 className="flex ml-[11%] mr-[2%] mt-[4%] text-3xl">About</h1>
                        <div className="flex flex-row mt-[9%]  -ml-[10%] w-[84%] gap-x-2 ">
                            <p className="w-[47%]">The company has earned recognition for undertaking large , complex projects forstering innovation embrocing emerging technologies and making a difference for therir clients employees and community</p>

                            <p className="w-[47%]">Turner offers clients the accessiblity and support of a local firm with the stability and resources of a multi-national organization</p>
                        </div>
                    </div>

                    <h1 className="w-[70%] ml-[11%] mt-[5%] text-4xl text-start">Our Vision is to be the highest value provider of global construction services and technical expertise.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
