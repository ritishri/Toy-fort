import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const AgeProductPage = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const postsPerPage = 24;

  const totalPages = Math.ceil(product.length / postsPerPage);

  const age = new URLSearchParams(location.search).get("age");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/age?age=${age}`
        );

        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("Error in fetching the products", error);
      }
    };

    if (age) {
      fetchProduct();
    }
  }, [age]);

  const handleProduct = (productSlug) => {
    navigate(`/${productSlug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-1">
      <Sidebar />
      <div className="p-4">
        {Array.isArray(product) && product.length > 0 ? (
          <div className="w-full ml-5 mt-5">
            <div className="w-full grid grid-cols-4 gap-4">
              {currentProduct.map((item, index) => (
                <Card
                  className="border border-black cursor-pointer"
                  key={index}
                  discount={item.discount_rate}
                  imageUrl={item.image_default}
                  title={item.title}
                  originalPrice={item.price / 100}
                  discountedPrice={
                    Math.ceil(
                      (item.price / 100) * (1 - item.discount_rate / 100)
                    ) - 1
                  }
                  onClick={() => handleProduct(item.slug)}
                  slug={item.slug}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>No items.</p>
        )}
      </div>
    </div>
    <div className="flex justify-center mt-5 mb-5">
        <Pagination
          totalPages={Math.ceil(product.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AgeProductPage;
