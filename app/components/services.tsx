"use client";
import { useState, useEffect } from "react";
import { fetchWpImageById } from "../utils/fetchImages";

function Services({ texts }: { texts: Array<any> }) {
  const [section3BgUrl, setSection3BgUrl] = useState<string | null>(null);
  const [section3BottomImg, setSection3BottomImg] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadBackgroundImage = async () => {
      const bgImg = texts.find((item) => item.type === "background_image");
      const bottomImg = texts.filter((item) => item.type === "image")[2];

      if (bgImg?.value) {
        const imageData = await fetchWpImageById(bgImg.value);
        setSection3BgUrl(imageData?.url || null);
      }

      if (bottomImg?.value) {
        const imageData = await fetchWpImageById(bottomImg.value);
        setSection3BottomImg(imageData?.url || null);
      }
    };

    loadBackgroundImage();
  }, [texts]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 md:py-20 md:px-16 gap-10">
      {/* Left Image Section */}
      <div
        className="w-full md:w-1/2 h-64 md:h-150 bg-cover bg-center "
        style={{
          backgroundImage: section3BgUrl ? `url(${section3BgUrl})` : "none",
        }}
      ></div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl leading-snug tracking-wide">
            {texts.filter((txt) => txt.type === "text_content")[1]?.value}
          </h1>
          <p className="text-base font-medium text-gray-700">
            {texts.filter((txt) => txt.type === "inner_text")[0]?.value}
          </p>
          <button className="text-[#ff6716] font-bold">
            &#8594; {texts.filter((txt) => txt.type === "link_text")[1]?.value}
          </button>
        </div>

        <div className="border-t border-gray-300 my-6 w-full max-w-md"></div>

        <div className="max-w-md">
          <h5 className="italic text-lg text-gray-800">
            "{texts.filter((txt) => txt.type === "quote")[0]?.value}"
          </h5>
          <div className="flex items-center mt-4">
            <div
              className="h-14 w-14 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: section3BottomImg
                  ? `url(${section3BottomImg})`
                  : "none",
              }}
            ></div>
            <div className="ml-4">
              <span className="font-semibold block">
                {texts.filter((txt) => txt.type === "name")[0]?.value}
              </span>
              <span className="text-sm text-gray-600">
                {texts.filter((txt) => txt.type === "title")[0]?.value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
