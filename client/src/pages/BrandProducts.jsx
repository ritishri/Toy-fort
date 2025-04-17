import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams()
  const brand = searchParams.get("brand")

  const navigate = useNavigate()

  const postsPerPage = 24

  const totalPages = Math.ceil(products.length / postsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  };

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        if (!brand) {
          return "No brands";
        }
        const { data } = await axios.get(
          `http://localhost:5000/api/brand-products?brand=${brand}`
        );
        setProducts(data)
        setCurrentPage(1)
        console.log(data)
      } catch (error) {
        console.error("Error fetching brand products:", error.message)
      }
    }
    fetchBrandProducts()
  }, [brand])

  const handleProduct = (productSlug) => {
    navigate(`/${productSlug}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-full ml-10 mt-5 p-4">
          <div className="w-full  grid grid-cols-4 gap-4">
            {currentProduct.map((product) => (
              <Card
                className="border border-gray-600 cursor-pointer"
                key={product.id}
                discount={product.discount_rate}
                imageUrl={product.image_default}
                title={product.title}
                originalPrice={product.price / 100}
                discountedPrice={
                  Math.ceil(
                    (product.price / 100) * (1 - product.discount_rate / 100)
                  ) - 1
                }
                onClick={() => handleProduct(product.slug)}
                slug = {product.slug}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <Pagination
          totalPages={Math.ceil(products.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BrandProducts;
