import React from "react";
import { useNavigate } from "react-router-dom";
import API from '../utils/api';

function Sidebar({ items }) {
  const navigate = useNavigate();

  const handleItemClick = async (item) => {
    if (item.name === "Logout") {
      try {
        await API.get('/auth/logout',  {withCredentials: true}); // or whatever your logout endpoint is
      
        navigate(item.route); 
      } catch (error) {
        console.error("Logout failed:", error);
      }
    } else {
      navigate(item.route);
    }
  };

  return (
    <ul className="space-y-12 h-dvh p-4 mt-12 text-lg">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(item)}
          className="flex items-center space-x-2 text-white hover:text-blue-700 cursor-pointer"
        >
          <item.icon className="text-xl" />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
