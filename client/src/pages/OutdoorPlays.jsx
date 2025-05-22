import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Pagination from '../components/Pagination';

const OutdoorPlays = () => {
  const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
  
    const {outdoorProducts, outdoorProduct} = useContext(AppContext)
  
    const navigate = useNavigate();
  
    const postsPerPage = 24;
  
    const toys = new URLSearchParams(location.search).get("toys");
  
    useEffect(() => {
        if (toys) {
          outdoorProducts(toys);
        }
      }, [toys, outdoorProducts]);
    
      const handleProducts = (productSlug) => {
        navigate(`/${productSlug}`); 
      };
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      const indexOfLastProduct = currentPage * postsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
      const currentProduct = outdoorProduct.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="p-4">
          {Array.isArray(outdoorProduct) && outdoorProduct.length > 0 ? (
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
          totalPages={Math.ceil(outdoorProduct.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )

}

export default OutdoorPlays