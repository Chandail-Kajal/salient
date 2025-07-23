"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import Service from "./components/services";
import Serviceaimed from "./components/service-section";
import Mission from "./components/mission";
import Wheresabout from "./components/wheresabout";
import Ourteam from "./components/ourteam-section";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Worldbrand from "./components/worldbrand";
import { useEffect, useState } from "react";
import he from "he";

export default function Home() {
  const [content, setContent] = useState("");
  const [extractedTexts, setExtractedTexts] = useState<
    { type: string; value: string }[]
  >([]);

  function extractAttributeBlocks(content: string) {
    if (!content) return [];

    const decoded = he.decode(content);
    const normalized = decoded
      .replace(/\\"/g, '"')
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'");

    const results: { type: string; value: string }[] = [];

    const attributes = [
      "text_content",
      "link_text",
      "title",
      "heading",
      "label",
      "alt",
      "team_member_bio",
      "quote",
      "hover_content",
      "name",
      "subtitle",
      "bg_image",
      "image_url",
      "image",
      "images",
      "video_mp4",
      "background_image",
      "team_member_mini_bio",
      "job_position",
      "bio_alt_image_url",
    ];

    attributes.forEach((attr) => {
      const regex = new RegExp(`${attr}="([^"]+)"`, "g");
      for (const match of normalized.matchAll(regex)) {
        results.push({ type: attr, value: match[1].trim() });
      }
    });

    const shortcodeRegex = /\[vc_column_text[^\]]*](.*?)\[\/vc_column_text]/gis;
    for (const match of content.matchAll(shortcodeRegex)) {
      const text = match[1].trim();
      if (text) {
        results.push({ type: "inner_text", value: text });
      }
    }

    const tagNames = [
      "p",
      "li",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "span",
      "strong",
      "em",
      "b",
      "i",
    ];
    tagNames.forEach((tag) => {
      const tagRegex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "gis");
      for (const match of normalized.matchAll(tagRegex)) {
        const textContent = match[1]
          .trim()
          .replace(/<[^>]+>/g, "")
          .trim();
        if (textContent) {
          results.push({ type: tag, value: textContent });
        }
      }
    });

    return results;
  }

  useEffect(() => {
    fetch(
      "https://staging.ekarigar.com/wordpress/wp-json/custom/v1/wpbakery-page/5909"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.content_html) {
          setContent(data.data.content_html);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  useEffect(() => {
    const extracted = extractAttributeBlocks(content);
    console.log("extracted text", extracted);
    setExtractedTexts(extracted);
  }, [content]);

  return (
    <div>
      <Header />
      <Hero title={extractedTexts[0]?.value || ""} />
      <Service texts={extractedTexts} />
      <Serviceaimed texts={extractedTexts} />
      <Mission texts={extractedTexts} />
      <Wheresabout texts={extractedTexts} />
      <Ourteam texts={extractedTexts} />
      <Carousel texts={extractedTexts} />
      <Worldbrand texts={extractedTexts} />
      <Footer texts={extractedTexts} />
    </div>
  );
}
