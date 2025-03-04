import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";


// **Grouping images into sets of 3**
function Slider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api");
        setSlides(data);
      } catch (error) {
        console.log("Error fetching slider data:", error.message);
      }
    };

    fetchSlider();
  }, []);

  const groupedSlides = [];
  for (let i = 3; i < slides.length; i += 3) {
    groupedSlides.push(slides.slice(i, i + 3));
  }

  return (
    <div className="w-full sm:h-72 md:h-80 lg:h-96 bg-slate-200 p-3 relative">
      <Carousel
        slideInterval={2000}
        indicators={true}
        leftControl={
          <div className="absolute z-10 left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
            ❮
          </div>
        }
        rightControl={
          <div className="absolute z-10 right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-all bg-gray-100 flex justify-center items-center text-lg sm:text-xl md:text-2xl border border-gray-300 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] text-black p-2 rounded-full shadow-md">
            ❯
          </div>
        }
      >
        {groupedSlides.map((group, index) => (
          <div key={index} className="flex justify-center space-x-3">
            {group.map((slide) => (
              <a key={slide.id} href={slide.link} className="flex-1">
                <img
                  className="w-full h-60 sm:h-72 sm:w-full md:h-80 lg:h-96 rounded-lg shadow-md"
                  src={slide.image}
                  alt="Slider Image"
                />
              </a>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
