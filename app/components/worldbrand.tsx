import React from "react";

const Brands = ({ texts }: { texts: Array<any> }) => {
  const brands = texts
    .filter((t) => t.type === "image_url")
    .splice(16, 26)
    .map((t) => t.value.trim());
  return (
    <section className="bg-white py-20 px-6 md:px-16 h-screen">
      <div className="max-w-6xl mx-auto text-center md:text-left h-40">
        <h2 className="text-3xl md:text-4xl md:w-1/2 font-bold mb-12 leading-snug px">
          {texts.filter((txt) => txt.type === "text_content")[6]?.value}
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {brands.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Brand ${i + 1}`}
              className="opacity-25 w-full max-w-[200px] mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
