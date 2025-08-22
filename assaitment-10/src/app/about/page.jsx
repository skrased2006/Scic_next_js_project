import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-32 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        About Us
      </h1>
      <p className="max-w-4xl text-center text-gray-700 text-xl leading-relaxed">
        Welcome to MyShop! We are dedicated to providing high-quality products
        that bring convenience, style, and innovation to your everyday life.
        Our mission is to create a seamless shopping experience with
        exceptional customer service and curated products you'll love.
        <br /><br />
        Our team works tirelessly to ensure that each product meets the highest
        standards, and we are committed to making your online shopping
        experience enjoyable and memorable. Thank you for choosing MyShop!
      </p>
    </div>
  );
};

export default AboutPage;
