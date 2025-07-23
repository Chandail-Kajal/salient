import React from "react";

function Hero({ title }: { title: string }) {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center bg-[url('/kai-pilger-mgFzfrrmGKI-unsplash.jpg')] flex flex-col items-center justify-center px-4 md:px-10 text-center md:text-left">
      <div className="text-white w-full md:w-1/2 py-10 md:py-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          {title}
        </h1>

        <button className="mt-6 px-6 py-3 bg-[#ff6716] text-white rounded-full text-sm sm:text-base hover:bg-orange-600 transition duration-300">
          --Discover More
        </button>
      </div>
    </div>
  );
}

export default Hero;
