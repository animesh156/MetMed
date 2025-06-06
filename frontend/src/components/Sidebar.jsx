import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ items }) {
  const navigate = useNavigate();
  return (
    <ul className="space-y-9 h-dvh p-4  text-lg">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => navigate(item.route)}
          className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer"
        >
          <item.icon className="text-xl" />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
