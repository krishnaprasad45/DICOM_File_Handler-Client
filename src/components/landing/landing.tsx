import React from "react";
import { Link } from "react-router-dom";

const LandingComponent: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1631563018856-81be9c118283?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* <h1 className="text-4xl font-bold text-green-500 text-center mb-8 border-black bg-grey p-4">
          Welcome to Our Website
        </h1> */}
        <h1 className="text-lg text-black-500 text-center mb-12 border-black bg-white p-4">
          We provide Xray files (DICOM) to readable pdf format.
        </h1>
        <Link to="/login">
          <button className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingComponent;
