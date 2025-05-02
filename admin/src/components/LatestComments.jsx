import React from 'react';

const LatestComments = () => {
  const Orders = [
    { order: "#10101", amount: "₹2,370", status: "Processing", date: "2024-10-06 / 03:40" },
    { order: "#10100", amount: "₹8,264", status: "Completed", date: "2024-10-05 / 17:57" },
    { order: "#10099", amount: "₹5,275", status: "Completed", date: "2024-09-29 / 10:36" },
    { order: "#10098", amount: "₹977", status: "Completed", date: "2024-09-23 / 17:30" },
    { order: "#10097", amount: "₹399", status: "Completed", date: "2024-09-23 / 13:28" },
    { order: "#10096", amount: "₹404", status: "Cancelled", date: "2024-09-23 / 10:46" },
    { order: "#10095", amount: "₹1,998", status: "Completed", date: "2024-09-23 / 09:29" },
  ];

  return (
    <div className="bg-white shadow-md rounded p-6 relative">
      {/* Minimize and Close Icons */}
      <div className="absolute top-2 right-2 flex space-x-2 text-gray-500">
        <button className="text-xl hover:text-gray-700" title="Minimize">−</button>
        <button className="text-xl hover:text-gray-700" title="Close">×</button>
      </div>

      {/* Header with title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm">Latest Comments</h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto max-h-60 overflow-y-auto pr-2"> {/* Added padding-right here */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-xs font-medium text-gray-500">Id</th>
              <th className="p-2 text-xs font-medium text-gray-500">User</th>
              <th className="p-2 text-xs font-medium text-gray-500">Comment</th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((orders, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 text-xs">{orders.order}</td>
                <td className="p-2 text-xs">{orders.amount}</td>
                <td className="p-2 text-xs">{orders.status}</td>
                <td className="p-2 text-xs">{orders.date}</td>
                <td className="p-2">
                  <button
                    style={{ backgroundColor: '#17a2b8' }}
                    className="text-white text-xs px-2 py-1 rounded hover:bg-opacity-75"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View All button positioned at the bottom-right */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded hover:bg-gray-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default LatestComments;
