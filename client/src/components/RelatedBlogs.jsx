import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const RelatedPosts = () => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { category_slug, id } = useParams();

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/related-posts"
        );
        setRelatedPosts(data);
      } catch (error) {
        console.error("Error fetching related posts:", error.message);
      }
    };

    fetchRelatedPosts();
  }, [category_slug, id]);

  return (
    <div className="mt-8 ">
      <div className="mb-7">
        <h2 className="relative mt-6 font-semibold p-4">
          RELATED POSTS
          <span className="absolute left-4 bottom-0 w-24 h-[2px] tracking-widest bg-black"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedPosts.map((post) => (
          <div key={post.id}>
            <Link to={`${post.category_slug}/${post.id}`}>
              <img
                src={`${imgUrl}${post.image_default}`}
                alt="blog_images"
                className="w-full h-80 object-cover p-2"
              />
            </Link>

            <div className="mt-3">
              <a
                href="#"
                className="w-full flex relative font-semibold font-lg text-left ml-2 hover:text-red-500 cursor-pointer pb-2"
              >
                {post.title}
              </a>

                <div className="w-full flex items-center gap-x-1 ml-2 text-left">
                  <FolderOpenIcon className="text-gray-400" fontSize="small" />
                  <p className="text-xs text-gray-400 hover:text-red-400 gap-x-1 cursor-pointer">
                    {post.category_name}
                  </p>
                  <AccessTimeIcon className="text-gray-400" fontSize="small" />
                  <p className="text-xs text-gray-400">{post.month_val} months ago</p>
                </div>

                <p className="text-gray-400 font-thin text-sm p-2">
                  {
                  post.summary.length > 100
                    ? `${post.summary.slice(0, 104)}...`
                    : post.summary
                  }
                </p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
