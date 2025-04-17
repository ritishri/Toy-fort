import "@fontsource/open-sans";
import { useEffect, useState } from "react";
import axios from "axios";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Pagination from "../components/Pagination";
import CategoryLinks from "../components/CategoryLinks";
import { Link } from "react-router-dom";

function Blog() {
  const [blogImage, setBlogImage] = useState([]);
  const [blogContent, setBlogContent] = useState([]);
  const [booksImages, setBooksImages] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 12;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const imgUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetchBlogImage = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/blog-image"
        );
        setBlogPosts(data);
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

  useEffect(() => {
    const fetchBooksImages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/books-images"
        );
        setBooksImages(data);
      } catch (error) {
        console.log("Error in fetching the Books Images", error.message);
      }
    };
    fetchBooksImages();
  }, []);

  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <CategoryLinks />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-6">
          {currentBlogPosts.map((post) => (
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
                  {post.summary.length > 100
                    ? `${post.summary.slice(0, 104)}...`
                    : post.summary}
                </p>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      <Pagination
        totalPages={Math.ceil(blogPosts.length / postsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Blog;
