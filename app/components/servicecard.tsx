import React from "react";
import {icons} from "../assets/icons";
interface IServiceCardProps {
  image: string;
  title: string;
  description: string;
  icon: any;
  className?: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  image,
  title,
  description,
  icon,
  className = "",
}) => {
  const IconComponent = icons[icon];
  return (
    <div
      className={`relative overflow-hidden  transition-transform duration-500 hover:-translate-y-2 group ${className}`}
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[#e05c1af0] to-transparent transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <div className="flex items-start mb-2 flex-col gap-4 ">
          <div className="mr-3   ">
            {IconComponent && <IconComponent className="fill-white"/>}
           </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white text-base opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 ease-in-out overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
