
import {Link} from "react-scroll"

const Navbar = () => {

    const links = [
        {
            id:1,
            link:'About',
            linkto:"Body"
        },
        {
            id:2,
            link:'Services',
            linkto:"Services"
        },
        {
            id:3,
            link:'Portfolio',
            linkto:"Portfolio"
        },
        {
            id:4,
            link:'Contact',
            linkto:"Contact"
        },
    ]

  return (
    <div className="flex justify-between items-center ">
    
    <div className="w-[50%] h-[55px] flex justify-evenly items-center">

      <div>
            <h1 className="text-4xl md:ml-[14px]">RM</h1>
      </div>

        <ul className="flex justify-evenly cursor-pointer">

                {
                    links.map((item) =>(
                        <li key={item.id} className="px-4 font-medium text-gray-500 hover:scale-125 duration-200 " style={{ cursor: 'pointer' }}><Link to={item.linkto} smooth duration={400}>{item.link}</Link></li>
                        ))
                    }
            </ul>
        </div>
        <div className="w-[50%] flex justify-end mr-10">
            <button className="inter p-2 m-1 mt-2 rounded-full bg-gray-200 hover:animate-bounce">Book a Call</button>
        </div>
    </div>
  )
}

export default Navbar
