import React from "react";

export default function Wheresabout({ texts }: { texts: Array<any> }) {
  return (
    <div className="h-screen overflow-hidden relative">
      <video
        width="1800"
        height="700"
        preload="auto"
        loop
        autoPlay
        muted
        playsInline
        style={{
          visibility: "visible",
          opacity: 1,
        }}
      >
        <source
          src="http://themenectar.com/demo/salient-corporate-3/wp-content/uploads/2019/09/travelpockets_iceland_land_of_fire_and_ice.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full h-full top-0 left-0 bg-black/35 flex flex-col items-center justify-center text-white text-center px-4">
        <a
          href="https://www.youtube.com/watch?v=6oTurM7gESE"
          className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 flex-col gap-10"
          data-fancybox=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="play w-16 h-16 ring-white rounded-full border flex">
            <svg
              viewBox="0 0 600 800"
              className="w-4 h-4 fill-white m-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0-1.79v800L600,395L0-1.79z" />
            </svg>
          </span>
          <span className="text-2xl font-semibold">
            {texts.filter((txt) => txt.type === "link_text")[3]?.value}
          </span>
        </a>
      </div>
    </div>
  );
}
