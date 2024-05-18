import React from "react";
import { Link } from "react-router-dom";
import { imageUrls } from "../../constants/strings";

const LandingComponent: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={imageUrls.imageUrl2}
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
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
