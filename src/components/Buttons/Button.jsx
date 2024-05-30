import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
    <Link to={"/contact"}>
    <button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-gray-600">
      Get Started
    </button>
    </Link>
    </div>
    
  );
};

export default Button;
