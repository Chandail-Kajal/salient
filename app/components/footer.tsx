import React from "react";

const Footer = ({ texts }: { texts: Array<any> }) => {
  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12 h-auto md:h-20 gap-6 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
          <h2 className="text-3xl sm:text-4xl md:w-1/2 font-semibold text-center sm:text-left">
            {texts.filter((txt) => txt.type === "text_content")[7]?.value || "Your Heading Here"}
          </h2>
          <button className="mt-2 sm:mt-0 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-full sm:w-auto">
            {texts.filter((txt) => txt.type === "link_text")[4]?.value || "Call to Action"}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-base sm:text-lg">
        <div>
          <p className="mb-2">Copyright © 2019 Salient WordPress Theme.</p>
          <p>Built with love in New York</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-2">Archives</h3>
          <ul className="text-gray-300 space-y-1">
            <li>July 2025</li>
            <li>September 2019</li>
            <li>July 2019</li>
            <li>April 2019</li>
            <li>March 2019</li>
            <li>February 2019</li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-2">Categories</h3>
          <ul className="text-gray-300 space-y-1">
            <li>Food for thought</li>
            <li>Gaming</li>
            <li>Music</li>
            <li>Uncategorized</li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold mb-2">Recent Posts</h3>
          <ul className="space-y-1">
            <li>Hello world!</li>
            <li>Wake up and smell the roses</li>
            <li>Doing a cross country road trip</li>
            <li>We encountered a food paradise</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
