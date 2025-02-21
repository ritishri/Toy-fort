import "@fontsource/open-sans";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const [blogImage, setBlogImage] = useState([]);
  const [blogContent, setBlogContent] = useState([]);

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetchBlogImage = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/blog-image"
        );
        setBlogImage(data);
      } catch (error) {
        console.log("Error fetching slider data:", error.message);
      }
    };
    fetchBlogImage();
  }, []);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/blog-content"
        );
        setBlogContent(data);
      } catch (error) {
        console.log("Error fetching slider data:", error.message);
      }
    };
    fetchBlogContent();
  }, []);

  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <p className="text-gray-600 text-sm mt-2 pl-6 pr-6">
        <a className="hover:text-red-500 cursor-pointer text-gray-400" href="/">
          Home
        </a>
        / Blog
      </p>
      <br />
      <p className="ml-7 font-semibold text-2xl">Blog</p>

      <div>
        <div className="flex flex-row justify-center items-center gap-3 align-middle blog-categories">
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            All
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            Infants
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            Toys
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            Sports
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            School Items
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="#"
          >
            Electronics
          </a>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-6">
          {blogImage.map((image) => {
            const content = blogContent.find((c) => c.id === image.id);

            return (
              <div key={image.id}>
                <img
                  src={`${imgUrl}${image.image_path}`}
                  alt="blog_images"
                  className="w-full h-80 object-cover p-2 "
                />

                {content && (
                  <div className="mt-3">
                    <a
                      href="#"
                      className=" w-full flex relative font-semibold font-lg text-left ml-2 hover:text-red-500 cursor-pointer pb-2"
                    >
                      {content.title}
                    </a>
                    <p className=" w-full border-gray-300 font-lg text-left ml-2 hover:text-red-400 text-gray-400 cursor-pointer pb-2"> <FontAwesomeIcon icon={faFolder}/> Toys </p>
                    <p className="text-gray-400 font-thin text-sm p-2">
                      {content.summary.length > 100
                        ? `${content.summary.slice(0, 104)}...`
                        : content.summary}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
