import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

function discountProductPage() {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const postsPerPage = 24;

  const totalPages = Math.ceil(product.length / postsPerPage);

  const discount = new URLSearchParams(location.search).get("discount");

  useEffect(() => {
    const fetchDiscountProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/discount?discount=${discount}`
        );

        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.log("Error in fetching the products", error);
      }
    };

    if (discount) {
      fetchDiscountProduct();
    }
  }, [discount]);

  const handleProducts = (productSlug) => {
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
                    onClick={() => handleProducts(item.slug)}
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
}

export default discountProductPage;
