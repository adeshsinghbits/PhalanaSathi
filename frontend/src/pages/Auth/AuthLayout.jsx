import React from "react";
import BrandingVideo from "../../assets/BrandingVideo.mp4";

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex pt-16">

      {/* Branding Side */}
      <div className="bg-indigo-600 flex flex-col justify-center items-center w-1/2">
        <h1 className="text-4xl font-bold mb-6">PhalanaSathi</h1>
        <p className="text-lg  text-center max-w-md">
        Travel smarter. Share journeys. Build trust.
        </p>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 mb-6">{subtitle}</p>
          {children}
        </div>
      </div>

    </div>
  );
}

export default AuthLayout;