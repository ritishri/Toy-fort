import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function CategoryProductPage() {
  const { category } = useParams()
  const { sidebarFilter, sidebarProducts } = useContext(AppContext)

  useEffect(() => {
    if (category) {
      sidebarFilter(category)
    }
  }, [category])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar/>
        <div className="p-4">
          {Array.isArray(sidebarProducts) && sidebarProducts.length > 0 ? (
            <div className="w-full ml-5 mt-5">
              <div className="w-full grid grid-cols-4 gap-4">
                {sidebarProducts.map((item, index) => (
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
    </div>
  )
}

export default CategoryProductPage





















// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import Card from '../components/Card'

// function CategoryProductPage() {

//     const {sidebarFilter, sidebarProducts, setSidebarProducts} = useContext(AppContext)

//   return (
//     <div className="flex flex-col min-h-screen">
//     <div className="flex flex-1">
//       <div className="p-4">
//         {Array.isArray(sidebarProducts) && sidebarProducts.length > 0 ? (
//           <div className="w-full ml-5 mt-5">
//             <div className="w-full grid grid-cols-4 gap-4">
//               {currentProduct.map((item, index) => (
//                 <Card
//                   className="border border-black cursor-pointer"
//                   key={index}
//                   discount={item.discount_rate}
//                   imageUrl={item.image_default}
//                   title={item.title}
//                   originalPrice={item.price / 100}
//                   discountedPrice={
//                     Math.ceil(
//                       (item.price / 100) * (1 - item.discount_rate / 100)
//                     ) - 1
//                   }
//                   onClick={() => handleProduct(item.slug)}
//                   slug={item.slug}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p>No items.</p>
//         )}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default CategoryProductPage