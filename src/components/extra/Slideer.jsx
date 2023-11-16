
import urban from "../assets/images/projects/urban.jpg"
import interior from "../assets/images/projects/interior.jpg"
import architecture from "../assets/images/projects/architecture.jpg"
import landscape from "../assets/images/projects/landscape.jpeg"
import retail from "../assets/images/projects/retail.jpeg"
import artsTeam from "../assets/images/projects/artsTeam.jpg"
import graphics from "../assets/images/projects/graphics.jpg"
import dobjects from "../assets/images/projects/3dobjects.jpg"

import ImageItem from "./ImageItem"




const Slideer = () => {

    const images = [
        {
            id:1,
            title:"urban",
            img: urban,
        },
        {
            id:2,
            title:"interior",
            img: interior,
        },
        {
            id:3,
            title:"Architecture",
            img: architecture,
        },
        {
            id:4,
            title:"Landscape",
            img: landscape,
        },
        {
            id:5,
            title:"Retails",
            img: retail,
        },
        {
            id:6,
            title:"ArtsTeam",
            img: artsTeam,
        },
        {
            id:7,
            title:"Graphics",
            img: graphics,
        },
        {
            id:8,
            title:"3D Objects",
            img: dobjects,
        },

    ]

  return (
    <div className="mt-[90px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
      {images.map((image) => (
        <ImageItem key={image.id} title={image.title} img={image.img} />
      ))}
    </div>
  )
}

export default Slideer
