import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const RefundRequests = () => {
  const refundData = [
    {
      product: "#10015 - Dubblin SS Insulated Lunch Box Bento",
      total: "₹892",
      commission: "10%",
      earned: "Not Added to Vendor Balance",
      buyer: "",
      seller: "Piyush Gupta",
      status: "Processing",
      updated: "2 years ago",
      date: "2023-08-11 / 15:06"
    },
    {
      product: "#10015 - Dubblin SS Insulated Lunch Box Bento",
      total: "₹892",
      commission: "10%",
      earned: "Not Added to Vendor Balance",
      buyer: "",
      seller: "Piyush Gupta",
      status: "Processing",
      updated: "2 years ago",
      date: "2023-08-11 / 15:03"
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-[250px]">
        <Header />
        <div className="p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-gray-700 text-xl font-semibold">Refund Requests</h2>

            <div className="mt-4 overflow-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-3 py-2 border">Product</th>
                    <th className="px-3 py-2 border">Total</th>
                    <th className="px-3 py-2 border">Commission Rate</th>
                    <th className="px-3 py-2 border">Earned Amount</th>
                    <th className="px-3 py-2 border">Buyer</th>
                    <th className="px-3 py-2 border">Seller</th>
                    <th className="px-3 py-2 border">Status</th>
                    <th className="px-3 py-2 border">Updated</th>
                    <th className="px-3 py-2 border">Date</th>
                    <th className="px-3 py-2 border">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {refundData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-3 py-2 border text-blue-600 hover:underline cursor-pointer">{item.product}</td>
                      <td className="px-3 py-2 border">{item.total}</td>
                      <td className="px-3 py-2 border">{item.commission}</td>
                      <td className="px-3 py-2 border">{item.earned}</td>
                      <td className="px-3 py-2 border">{item.buyer}</td>
                      <td className="px-3 py-2 border text-blue-600">{item.seller}</td>
                      <td className="px-3 py-2 border">
                        <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">Processing</span>
                      </td>
                      <td className="px-3 py-2 border">{item.updated}</td>
                      <td className="px-3 py-2 border">{item.date}</td>
                      <td className="px-3 py-2 border space-x-2">
                        <button className="bg-gray-200 hover:bg-gray-300 text-xs px-2 py-1 rounded mb-2">Details</button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-xs px-2 py-1 rounded">✓ Approve Refund</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-gray-600 mt-6 text-xs">
                Number of Entries: <span className="text-black font-bold">{refundData.length}</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-100 text-blue-900 border border-blue-300 p-4 mt-6 text-sm rounded">
            <strong className="font-semibold">Warning!</strong> To complete a refund request, you must return the buyer's money.
            If you click the <strong>"Approve Refund"</strong> button, the system will change the order status to
            <strong> "Refund Approved"</strong> and deduct the order amount from the seller's balance.
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RefundRequests;
