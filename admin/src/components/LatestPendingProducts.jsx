import React from 'react';

const products = [
  {
    id: 3036,
    name: 'Test',
    image: 'https://via.placeholder.com/50',
    date: '5 months ago',
  },
  {
    id: 3035,
    name: 'Test',
    image: 'https://via.placeholder.com/50',
    date: '5 months ago',
  },
  {
    id: 3033,
    name: 'Melissa & Doug Water Wow! - Dinosaur',
    image: 'https://via.placeholder.com/50',
    date: '5 months ago',
  },
  {
    id: 3032,
    name: 'Melissa And Doug Water Wow! Sports Activity Pad',
    image: 'https://via.placeholder.com/50',
    date: '5 months ago',
  },
];

const LatestPendingProducts = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded p-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
      {/* Added max-w-lg for increased width, overflow-y-auto for scrollbar, and maxHeight */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-sm">Latest Products</h2>
        {/* Added minus icon before the cross icon */}
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              {/* This is the minus icon */}
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              {/* This is the cross icon */}
            </svg>
          </button>
        </div>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-2 py-2 text-sm">Id</th>
            <th className="px-2 py-2 text-sm">Name</th>
            <th className="px-2 py-2 text-sm">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="px-2 py-2 text-sm">{product.id}</td>
              <td className="px-2 py-2">
                <div className="flex items-center space-x-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                  <div>
                    <p className="text-sm">{product.name}</p>
                    <p className="text-gray-400 text-xs">{product.date}</p>
                  </div>
                </div>
              </td>
              <td className="px-2 py-2">
                <button
                  style={{ backgroundColor: '#17a2b8' }}
                  className="text-white text-xs px-2 py-1 rounded-md hover:bg-teal-600"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        <button className="bg-gray-200 text-xs px-3 py-1 rounded-md hover:bg-gray-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default LatestPendingProducts;
