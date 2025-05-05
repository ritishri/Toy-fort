import React from 'react';
import { FaShoppingCart, FaBox, FaUsers, FaClock } from 'react-icons/fa'; // Importing icons from react-icons

const DashboardCards = () => {
  const cards = [
    { label: "Orders", value: 100, bgColor: "#19A185", icon: <FaShoppingCart color="#169177" /> },
    { label: "Products", value: 2896, bgColor: "#605CA8", icon: <FaBox color="#565397" /> },
    { label: "Pending Products", value: 0, bgColor: "#DE524A", icon: <FaClock color="#c74a42" /> },
    { label: "Members", value: 150, bgColor: "#F1B740", icon: <FaUsers color="#d8a439" /> },
  ];

  return (
    <div className="grid grid-cols-4 gap-8 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`text-white p-4 rounded shadow flex justify-between items-center`}
          style={card.bgColor.includes('#') ? { backgroundColor: card.bgColor } : {}}
        >
          <div>
            <h2 className="text-4xl font-bold mb-2">{card.value}</h2>
            <p>{card.label}</p>
          </div>
          <div className="text-5xl hover:scale-110 transition-transform duration-300 h-20"> 
            {/* The icon will scale up slightly on hover */}
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
