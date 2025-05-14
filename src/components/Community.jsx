import React from "react";

export const Community = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-12 text-center text-amber-700">Our Community</h1> */}

        <div className="bg-blue-50 shadow-lg rounded-2xl p-8 flex items-center space-x-8 border border-blue-200">
          <img
            src="\public\assests\Savio.jpeg"
            alt="D Dsouzas Savio"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-300"
          />
          <div>
            <h2 className="text-2xl font-semibold text-amber-800">D Dsouzas Savio</h2>
            <p className="text-lg text-gray-700 mt-1">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};
