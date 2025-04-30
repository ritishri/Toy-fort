import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
const InStockProduct = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const { fetchProductInStock, productInStock } = useContext(AppContext);

  const navigate = useNavigate();

  const postsPerPage = 24;

  const inStock = new URLSearchParams(location.search).get("stock");

  useEffect(() => {
    if (inStock) {
      fetchProductInStock(inStock);
    }
  }, [inStock, fetchProductInStock]);

  const handleProduct = (productSlug) => {
    navigate(`/${productSlug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProduct = productInStock.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="p-4">
          {Array.isArray(productInStock) && productInStock.length > 0 ? (
            <div className="w-full ml-5 mt-5">
              <div className="w-full grid grid-cols-4 gap-4">
                {productInStock.map((item, index) => (
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
          totalPages={Math.ceil(productInStock.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default InStockProduct;
