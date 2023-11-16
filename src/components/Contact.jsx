import { ImArrowUpRight } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";
import circular from "../assets/servicesImage/circular.jpg"

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
      <div className="w-[30%] h-[280px] ml-9 bg-slate-50 rounded-3xl ">
        <div >
            <div className="lg:space-x-2 lg:p-4 md:space-x-2 xl:p-8 xl:space-x-5 md:p-0 md:flex">
                <button className="md:p-0  lg:p-2 border-4 bg-slate-200 rounded-3xl">building@gmail.com</button>
                <button className="md:p-0 lg:p-2 border-4 bg-slate-200 rounded-3xl">(207) 555-089</button>
            </div>
            <div className="flex justify-between items-center m-4">
                <h1 className="text-3xl">Get In Touch</h1>
                <img src={circular} className="w-[110px] h-[50px] rounded-3xl hover:animate-pulse" /> 
            </div>
            <div className="flex md:gap-1 lg:p-2 xl:p-3 justify-end lg:gap-1 xl:gap-4 animate-pulse cursor-pointer">
                <p className="border-b-4 border-black hover:scale-125 duration-200">FACEBOOK</p>
                <p className="border-b-4 border-black hover:scale-125 duration-200">LINKDIN</p>
                <p className="border-b-4 border-black hover:scale-125 duration-200">INSTGRAM</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
