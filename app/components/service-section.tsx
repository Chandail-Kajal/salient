"use client";
import React, { useState, useEffect } from "react";
import Servicecard from "./servicecard";
import { fetchWpImageById } from "../utils/fetchImages";

function ServiceSection({ texts }: { texts: Array<any> }) {
  const [images, setImages] = useState<string[]>([]);

  // Extract relevant text blocks
  const titles = texts.filter((txt) => txt.type === "h2");
  const hoverTexts = texts.filter((txt) => txt.type === "hover_content");
  const imageEntries = texts
    .filter((txt) => txt.type === "image_url")
    .slice(0, 4);
  const headingText = texts.find(
    (txt) => txt.type === "text_content" && txt.value
  );

  // Fetch image URLs
  useEffect(() => {
    const loadImages = async () => {
      const urls = await Promise.all(
        imageEntries.map(async (item) => {
          const result = await fetchWpImageById(item.value);
          return result?.url || null;
        })
      );
      setImages(urls.filter(Boolean));
    };

    loadImages();
  }, [texts]);

  const iconArray = ["snowflake", "hand", "crown", "snowflake"];

  const cards = Array.from({ length: 4 }).map((_, idx) => ({
    image: images[idx],
    title: titles[idx]?.value || "No title",
    description: hoverTexts[idx]?.value || "No description",
    icon: iconArray[idx],
  }));

  return (
    <div className="flex flex-col items-center px-4 py-10">
      <h1 className="font-bold text-3xl sm:text-4xl text-center md:w-1/3 leading-snug">
        {headingText?.value ||
          "We offer a wide array of services aimed at simplifying your life."}
      </h1>

      <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card, index) => (
          <Servicecard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
