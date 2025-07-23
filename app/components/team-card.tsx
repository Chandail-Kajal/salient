import React from "react";

interface IOurTeamCardProps {
  image: string;
  position: string;
  name: string;
  description: string;
  className?: string;
}

const TeamCard = ({
  image,
  position,
  name,
  description,
  className = "",
}: IOurTeamCardProps) => {
  return (
    <div
      className={`bg-white  overflow-hidden  transition-transform duration-500 hover:-translate-y-2 group ${className}`}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover scale-90 transform transition-transform duration-500 group-hover:scale-100"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{position}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
