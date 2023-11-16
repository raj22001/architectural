import urban from "../assets/images/projects/urban.jpg"
import interior from "../assets/images/projects/interior.jpg"
import architecture from "../assets/images/projects/architecture.jpg"
import landscape from "../assets/images/projects/landscape.jpeg"
import retail from "../assets/images/projects/retail.jpeg"
import artsTeam from "../assets/images/projects/artsTeam.jpg"
import graphics from "../assets/images/projects/graphics.jpg"
import dobjects from "../assets/images/projects/3dobjects.jpg"


const Slider = () => {
    
  return (
    <div className="text-black bg-black w-[100%] h-[950px] rounded-t-3xl ">
            <div className="">
                <h1 className="text-white text-4xl flex justify-center mt-[]"></h1>
            </div>
       <ul className="silder-ul mt-[20%] flex">
        <div className="text-start -mt-16">
            <h1 className="text-white text-4xl mb-[20px] -pb-[100px]"> WHAT WE DO</h1>
        </div>
      <div className="hover-container">
        <li>Urban design</li>
        <li>/</li>
        <img src={urban} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>Interior</li>
        <li>/</li>
        <img src={interior} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>Architecture</li>
        <li>/</li>
        <img src={architecture} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>Landscape</li>
        <li>/</li>
        <img src={landscape} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>Retails</li>
        <li>/</li>
        <img src={retail} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>ArtsTeam</li>
        <li>/</li>
        <img src={artsTeam} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>Graphics</li>
        <li>/</li>
        <img src={graphics} alt="" className="image-hover" />
      </div>
      <div className="hover-container">
        <li>3D Objects</li>
        <li>/</li>
        <img src={dobjects} alt="" className="image-hover" />
      </div>
    </ul>

    </div>
  )
}

export default Slider
