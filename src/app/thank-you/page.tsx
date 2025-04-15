"use client";

import React from "react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your form has been successfully submitted. We&apos;ll get back to you shortly.
        </p>

        <Link href="#home">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
