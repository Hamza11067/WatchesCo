import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <div className="max-w-3xl text-center space-y-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <span className="font-semibold text-white">Watches Co</span> — where elegance meets time. We are a passionate team of curators and enthusiasts, delivering the most stylish and timeless watches to elevate your fashion game.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Our journey started on Instagram, where we built a community of loyal customers who trust our taste in premium timepieces. Now, we're expanding with this custom-built website to offer you a seamless and more personal experience.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Whether you're looking for the perfect gift or a bold statement piece for yourself, we’re here to help you find the watch that speaks to your style.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Thank you for being a part of our journey. Time is precious—wear it well.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
