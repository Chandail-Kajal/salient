"use client";
import React, { useState, useEffect } from "react";
import { fetchWpImageById } from "../utils/fetchImages";

function Mission({ texts }: { texts: Array<any> }) {
  const [heading, setHeading] = useState<string>("");
  const [listItems, setListItems] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      const headingBlock = texts.filter((t) => t.type === "text_content")[3]; // 3rd heading
      if (headingBlock) setHeading(headingBlock.value);

      const lis = texts.filter((t) => t.type === "li").map((t) => t.value);
      setListItems(lis);

      const imageObj = texts.filter((t) => t.type === "background_image")[1]; // 1st image
      if (imageObj) {
        const img = await fetchWpImageById(imageObj.value);
        setImageUrl(img?.url || "");
      }
    };

    if (texts?.length) loadData();
  }, [texts]);

  return (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-24 py-12 gap-8 md:gap-16 min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-left">{heading}</h1>

        <ul className="list-disc grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 px-2 md:px-0">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button className="text-[#ff6716] text-lg font-semibold mt-2 self-start">
          {texts.filter((txt) => txt.type === "link_text")[2]?.value ||
            "Learn More"}
        </button>
      </div>

      <div
        className="w-full md:w-1/2 h-94 md:h-auto bg-center bg-cover"
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
      />
    </div>
  );
}

export default Mission;
