const ImageItem = ({ title, img }) => {
  return (
    <div className="relative overflow-hidden group bg-black">
    <p className="bg-black bg-opacity-70 text-white p-0 m-0 absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      {title}
    </p>
    <img
      src={img}
      alt={title}
      className="w-full h-auto transform translate-y-full opacity-0 transition-transform duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
    />
  </div>
  );
};

export default ImageItem;