import circular from "../assets/servicesImage/circular.jpg"


const ContactRight = () => {
  return (
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
  )
}

export default ContactRight
