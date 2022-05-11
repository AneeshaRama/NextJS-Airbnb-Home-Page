import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 bg-gray-200 sm:text-center p-5">
        <div className="space-y-4 mt-6 cursor-pointer ">
          <h5 className="font-bold text-gray-800 text-sm">ABOUT</h5>
          <p className="text-gray-600 text-sm">How Airbnb works?</p>
          <p className="text-gray-600 text-sm">Newsroom</p>
          <p className="text-gray-600 text-sm">Investors</p>
          <p className="text-gray-600 text-sm">Airbnb Plus</p>
          <p className="text-gray-600 text-sm">Airbnb Luxe</p>
        </div>
        <div className="space-y-4 mt-6  cursor-pointer">
          <h5 className="font-bold text-gray-800 text-sm">COMMUNITY</h5>
          <p className="text-gray-600 text-sm">This is awesome clone</p>
          <p className="text-gray-600 text-sm">Beautiful UI</p>
          <p className="text-gray-600 text-sm">Referrals accepted</p>
        </div>
        <div className="space-y-4 mt-6 cursor-pointer">
          <h5 className="font-bold text-gray-800 text-sm">HOST</h5>
          <p className="text-gray-600 text-sm">International service</p>
          <p className="text-gray-600 text-sm">Get discount</p>
          <p className="text-gray-600 text-sm">Become member</p>
        </div>
        <div className="space-y-4 mt-6 cursor-pointer">
          <h5 className="font-bold text-gray-800 text-sm">SUPPORT</h5>
          <p className="text-gray-600 text-sm">Helpline</p>
          <p className="text-gray-600 text-sm">Call Us</p>
          <p className="text-gray-600 text-sm">airbnb@email.com</p>
          <p className="text-gray-600 text-sm">Trust & Safety</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
