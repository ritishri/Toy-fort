import "@fontsource/open-sans";

const Orders = () => {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div
        className="text-gray-600 text-sm mt-6 ml-10"
        style={{ fontFamily: "Open Sans" }}
      >
        <a
          className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
          href="/"
        >
          Home /
        </a>
        <a className=" mr-1  text-gray-600" href="/">
          Orders
        </a>
      </div>

      <div className="flex">
        <div className="w-1/4 bg-white pt-6 pb-4  ml-11">
          <h2 className="text-2xl font-semibold mb-4 ">Orders</h2>
        </div>
      </div>

      <div className="w-full p-4 pl-10 ">
      <table className="w-full border-collapse">
        <thead>
          <tr className=" text-left">
            <th className="p-2 border-t border-b">Order</th>
            <th className="p-2 border-t border-b">Total</th>
            <th className="p-2 border-t border-b">Payment</th>
            <th className="p-2 border-t border-b">Status</th>
            <th className="p-2 border-t border-b">Date</th>
            <th className="p-2 border-t border-b">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="p-4 text-center text-[#606060]">
              No records found!
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>
  );
};

export default Orders;
