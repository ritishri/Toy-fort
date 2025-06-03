import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";

const CarouselImages = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        if (!slug) return;
        const { data } = await axios.get(`http://localhost:5000/api/${slug}`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching brand products:", error.message);
      }
    };
    fetchBrandProducts();
  }, [slug]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = products[currentIndex]?.image_default;

  return (
    <div className="flex flex-col items-center mt-20 mb-28">
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-gray-100 text-black border border-gray-300 p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          ❮
        </button>

        {currentImage && (
          <div
            style={{
              width: "400px",
              height: "400px", 
              position: "relative",
            }}
          >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: false,
                  width: 400,
                  height: 500,
                  src: currentImage,
                },
                largeImage: {
                  src: currentImage,
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "80%",
                },
              }}
            />
          </div>
        )}

        <button
          onClick={handleNext}
          className="bg-gray-100 text-black border border-gray-300 p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          ❯
        </button>
      </div>

      <p className="mt-4 text-gray-600">
        Image {currentIndex + 1} of {products.length}
      </p>
    </div>
  );
};

export default CarouselImages;

















// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Carousel } from "flowbite-react";
// import axios from "axios";
// import ReactImageMagnify from "react-image-magnify";

// const CarouselImages = () => {
//   const [products, setProducts] = useState([]);

//   const { slug } = useParams();

//   useEffect(() => {
//     const fetchBrandProducts = async () => {
//       try {
//         if (!slug) {
//           return "No slug";
//         }
//         const { data } = await axios.get(`http://localhost:5000/api/${slug}`);
//         setProducts(data);
//         console.log("Fetched Data: ", data);
//       } catch (error) {
//         console.error("Error fetching brand products:", error.message);
//       }
//     };
//     fetchBrandProducts();
//   }, [slug]);

//   return (
//     <div className="h-80 w-1/3 mt-20 mb-28 ml-40 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel
//         className="w-96 h-96 mb-10"
//         indicators={true}
//         leftControl={
//           <div className="absolute z-10 left-0 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
//             ❮
//           </div>
//         }
//         rightControl={
//           <div className="absolute z-10 right-0 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
//             ❯
//           </div>
//         }
//       >
//         {products.map((item, index) => (
//           <div key={index}>
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: "Product Image",
//                   isFluidWidth: true,
//                   src: item.image_default,
//                 },
//                 largeImage: {
//                   src: item.image_default,
//                   width: 1200,
//                   height: 1800,
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselImages;