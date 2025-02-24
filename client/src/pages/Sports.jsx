import "@fontsource/open-sans";
import { useEffect, useState } from "react";
import axios from "axios";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CategoryLinks from "../components/CategoryLinks";


const Sports = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    const imgUrl = import.meta.env.VITE_IMAGE_URL;
  
    useEffect(() => {
      const fetchBlogImage = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/blog-image");
          setBlogPosts(data);
        } catch (error) {
          console.log("Error fetching blog data:", error.message);
        }
      };
      fetchBlogImage();
    }, []);
  

    const infantsPosts = blogPosts.filter(
      (post) =>
        post.category_name  === "Sports"
    );
  
    return (
      <div style={{ fontFamily: "Open Sans" }}>
        <CategoryLinks />
  
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-6">
          {infantsPosts.map((post) => (
            <div key={post.id}>
              <img
                src={`${imgUrl}${post.image_default}`}
                alt="blog_images"
                className="w-full h-80 object-cover p-2"
              />
              <div className="mt-3">
                <a
                  href="#"
                  className="w-full flex font-semibold text-left ml-2 hover:text-red-500 cursor-pointer pb-2"
                >
                  {post.title}
                </a>
                <div className="w-full flex flex-row text-left ml-2">
                  <FolderOpenIcon className="text-gray-400" fontSize="small" />
                  <p className="w-full border-gray-300 text-xs text-left ml-2 hover:text-red-400 text-gray-400 cursor-pointer pb-2">
                    {post.category_name}
                  </p>
                </div>
                <p className="text-gray-400 font-thin text-sm p-2">
                  {post.summary.length > 100
                    ? `${post.summary.slice(0, 104)}...`
                    : post.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Sports