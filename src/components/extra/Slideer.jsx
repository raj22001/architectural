import ImageItem from "./ImageItem"
import { images } from "../../data/data"




const Slideer = () => {

  return (
    <div className="mt-[90px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
      {images.map((image) => (
        <ImageItem key={image.id} title={image.title} img={image.img} />
      ))}
    </div>
  )
}

export default Slideer
