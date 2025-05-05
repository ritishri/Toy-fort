import React from 'react';

const LatestTransactions = () => {
  const Transactions = [
    { Id: 83, order: "#10101", amount: "₹2,370", method: "cash on delivery", status: "Processing", date: "2024-10-06 / 03:40" },
    { Id: 83, order: "#10100", amount: "₹8,264", method: "cash on delivery", status: "Completed", date: "2024-10-05 / 17:57" },
    { Id: 83, order: "#10099", amount: "₹5,275", method: "cash on delivery", status: "Completed", date: "2024-09-29 / 10:36" },
    { Id: 83, order: "#10098", amount: "₹977",  method: "cash on delivery",status: "Completed", date: "2024-09-23 / 17:30" },
    { Id: 83, order: "#10097", amount: "₹399",  method: "cash on delivery",status: "Completed", date: "2024-09-23 / 13:28" },
    { Id: 83, order: "#10096", amount: "₹404",  method: "cash on delivery",status: "Cancelled", date: "2024-09-23 / 10:46" },
    { Id: 83, order: "#10095", amount: "₹1,998", method: "cash on delivery", status: "Completed", date: "2024-09-23 / 09:29" },
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
        <h2 className="text-sm">Latest Orders</h2>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto max-h-60 overflow-y-auto pr-2"> {/* Added padding-right here */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
            <th className="p-2 text-xs font-medium text-gray-500">Id</th>
              <th className="p-2 text-xs font-medium text-gray-500">Order</th>
              <th className="p-2 text-xs font-medium text-gray-500">Payment Amount</th>
              <th className="p-2 text-xs font-medium text-gray-500">Payment Method</th>
              <th className="p-2 text-xs font-medium text-gray-500">Status</th>
              <th className="p-2 text-xs font-medium text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody>
            {Transactions.map((transactions, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2 text-xs">{transactions.Id}</td>
                <td className="p-2 text-xs">{transactions.order}</td>
                <td className="p-2 text-xs">{transactions.amount}</td>
                <td className="p-2 text-xs">{transactions.method}</td>
                <td className="p-2 text-xs">{transactions.status}</td>
                <td className="p-2 text-xs">{transactions.date}</td>
                {/* <td className="p-2">
                  <button
                    style={{ backgroundColor: '#17a2b8' }}
                    className="text-white text-xs px-2 py-1 rounded hover:bg-opacity-75"
                  >
                    Details
                  </button>
                </td> */}
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

export default LatestTransactions;
