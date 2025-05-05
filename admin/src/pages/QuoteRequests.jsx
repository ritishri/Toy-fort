import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

const QuoteRequests = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6">
          {/* Digital Sales Box */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-gray-600 text-lg">Quote Requests</h2>

            {/* Filters Row */}
            <div className="flex items-end gap-4 mt-4">
              {/* Show Field */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1">Show</label>
                <select className="border border-gray-300 rounded px-3 py-1 w-36 focus:ring-2 focus:ring-blue-500">
                  <option>15</option>
                  <option>30</option>
                  <option>60</option>
                  <option>100</option>
                </select>
              </div>

              {/* Status Field */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1">Status</label>
                <select className="border border-gray-300 rounded px-3 py-1 w-44 focus:ring-2 focus:ring-blue-500">
                  <option>All</option>
                  <option>New Quote Request</option>
                  <option>Pending Quote</option>
                  <option>Pending Payment</option>
                  <option>Rejected Quote</option>
                  <option>Closed</option>
                  <option>Completed</option>
                </select>
              </div>

              {/* Search Field */}
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded px-3 py-1 w-64 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Filter Button */}
              <button className="text-white px-4 py-1 rounded" style={{ backgroundColor: "#605ca8" }}>
                Filter
              </button>
            </div>

            {/* Table */}
            <div className="mt-4 overflow-hidden">
              <table className="w-full border border-gray-300">
                <thead className="text-gray-500">
                  <tr className="text-left">
                    <th className="px-2 py-1 border border-gray-300">Quote</th>
                    <th className="px-2 py-1 border border-gray-300">Product</th>
                    <th className="px-2 py-1 border border-gray-300">Seller</th>
                    <th className="px-2 py-1 border border-gray-300">Buyer</th>
                    <th className="px-2 py-1 border border-gray-300">Status</th>
                    <th className="px-2 py-1 border border-gray-300">Seller's Bid</th>
                    <th className="px-2 py-1 border border-gray-300">Updated</th>
                    <th className="px-2 py-1 border border-gray-300">Date</th>
                    <th className="px-2 py-1 border border-gray-300">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty Table for Now */}
                </tbody>
              </table>

              {/* No Records Found Message (Outside Table) */}
              <p className="text-gray-400 mt-6 text-center">No records found!</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default QuoteRequests;
