import { ImArrowUpRight } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";
import circular from "../assets/servicesImage/circular.jpg"
import ContactRight from "../components/ContactRight";

const Contact = () => {
  return (
    <div className='w-[95%] h-[300px] m-4 flex justify-around'>

      {/*  Email sending and decription send div   */}

      <div className="flex w-[65%] h-[300px] flex-row ">
        <div className='w-[100%] h-[280px] rounded-3xl bg-black text-white  p-12 flex flex-col'>
            <span className="flex text-4xl justify-start items-center gap-x-6"><ImArrowUpRight color="white" size={30}/>Let Work Together</span>
            <form>
                <input 
                    type="input"
                    placeholder="EMAIL"
                    className="bg-black border-b-2 w-[60%] mt-[3%]"
                />
                <input 
                    type="input"
                    placeholder="PROJECT DESCRIPTION"
                    className="bg-black border-b-2 w-[60%] mt-[3%]"
                />
            </form>
            <div className="flex justify-end w-[60%]">
                <button className="p-2 bg-gray-200 mt-3 text-black rounded-3xl flex items-center">SEND<FiArrowUpRight size={20}/></button>
            </div>
        </div>
        <div className="-ml-[15%] rounded-3xl">
            <img src={circular}  alt=""  className="w-[250px] object-cover h-[280px] rounded-3xl hover:animate-pulse"/> 
        </div>
      </div>


          {/*  Contact Div   */}
        <ContactRight/>
    </div>
  )
}

export default Contact
