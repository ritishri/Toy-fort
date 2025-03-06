import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "flowbite-react";
import axios from "axios";

const CarouselImages = () => {
  const [products, setProducts] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        if (!slug) {
          return "No slug";
        }
        const { data } = await axios.get(`http://localhost:5000/api/${slug}`);
        setProducts(data);
        console.log("Fetched Data: ", data);
      } catch (error) {
        console.error("Error fetching brand products:", error.message);
      }
    };
    fetchBrandProducts();
  }, [slug]);

  return (
    <div className="h-80 w-1/3 mt-20 mb-28 ml-40 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        className="w-96 h-96 mb-10"
        indicators={true}
        leftControl={
          <div className="absolute z-10 left-0 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
            ❮
          </div>
        }
        rightControl={
          <div className="absolute z-10 right-0 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
            ❯
          </div>
        }
      >
        {products.map((item, index) => (
          <div key={index}>
            <img
              className="w-96 h-96 sm:h-72 sm:w-full md:h-80 lg:h-96 rounded-lg shadow-md"
              src={item.image_default}
              alt="Product Image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
