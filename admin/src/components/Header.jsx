import React from "react";
import { Menu, Eye, ChevronDown, User } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white shadow p-3 flex justify-between items-center">
      {/* Left side: Hamburger Menu */}
      <div className="flex items-center">
        <button className="text-gray-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Right side: Language selector and User avatar */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-gray-600">
          <button
            onClick={() => (window.location.href = "http://localhost:5173/")}
            className="text-white flex items-center px-2 py-1 rounded"
            style={{ backgroundColor: "#00a65a" }}
          >
            <Eye size={16} className="mr-2" />
            View Site
          </button>

          <ChevronDown size={16} />
          <span>English</span>
        </div>
        <div className="flex items-center space-x-2">
          <User size={24} className="text-gray-600" />
          <span>Piyush Gupta</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
