import "@fontsource/open-sans";
import AddIcon from "@mui/icons-material/Add";

const Refund = () => {
  return (
    <div className="w-full" style={{ fontFamily: "Open Sans" }}>
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
          Refund
        </a>
      </div>

      <div className="flex items-center justify-between pt-5 px-11">

        <h2 className="text-2xl font-semibold text-black">
          Refund Requests
        </h2>

        
        <div className="flex items-center hover:bg-[#138496] bg-[#1aa5bb] p-2 cursor-pointer">
          <AddIcon fontSize="medium" className="text-white pr-2" />
          <button className="text-white font-small">
            Submit a Refund Request
          </button>
        </div>
      </div>

      <div className="w-full p-4 pl-10 ">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-left">
              <th className="p-2 border-t border-b">Product</th>
              <th className="p-2 border-t border-b">Total</th>
              <th className="p-2 border-t border-b">Seller</th>
              <th className="p-2 border-t border-b">Status</th>
              <th className="p-2 border-t border-b">Updated</th>
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

      <div>
        
      </div>
    </div>
  );
};

export default Refund;
