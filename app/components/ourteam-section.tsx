"use client";
import React, { useEffect, useState } from "react";
import TeamCard from "./team-card";
import { fetchWpImageById } from "../utils/fetchImages";

export default function OurTeam({ texts }: { texts: Array<any> }) {
  const names = texts.filter((txt) => txt.type === "name").slice(1, 7);
  const cardTexts = texts.filter((txt) => txt.type === "team_member_mini_bio");
  const positions = texts.filter((txt) => txt.type === "job_position");
  const cardTextsFull = texts.filter((txt) => txt.type === "team_member_bio");
  const headText = texts.find(
    (txt) => txt.type === "text_content" && txt.value
  );

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageText = texts
        .filter((txt) => txt.type === "image_url")
        .slice(4,15);
      if (!imageText.length) {
        console.warn("No image text entries found");
        return;
      }

      const resolvedImages = await Promise.all(
        imageText.map(async (imgObj) => {
          const id = imgObj?.value?.trim();
          if (!isNaN(Number(id)) && id !== "") {
            const imageData = await fetchWpImageById(id);
            return imageData?.url || null;
          }
          return null;
        })
      );

      setImages(resolvedImages.filter(Boolean) as string[]);
    };

    if (texts?.length) {
      loadImages();
    }
  }, [texts]);

  const cards = Array.from({ length: 6 }).map((_, idx) => ({
    image: images[idx] || "/placeholder-team.jpg",
    position: positions[idx]?.value || "Position Unknown",
    name: names[idx]?.value || "Name Unknown",
    description: cardTexts[idx]?.value || "Description unavailable.",
    fullText: cardTextsFull[idx]?.value || "",
  }));

  return (
    <div className="flex flex-col items-center px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 px-4">
        {headText?.value || (
          <>
            Our team is comprised of <br />
            genuinely gifted minds
          </>
        )}
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col gap-8 mt-8 flex-1">
          <TeamCard {...cards[0]} />
          <TeamCard {...cards[3]} />
        </div>

        <div className="flex flex-col gap-8 flex-1">
          <TeamCard {...cards[1]} />
          <TeamCard {...cards[4]} />
        </div>

        <div className="flex flex-col gap-8 mt-8 flex-1">
          <TeamCard {...cards[2]} />
          <TeamCard {...cards[5]} />
        </div>
      </div>
    </div>
  );
}
