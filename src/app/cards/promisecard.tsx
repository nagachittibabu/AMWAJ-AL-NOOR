import React, { useState } from "react";
import Image from "next/image";

interface PromiseCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const PromiseCard: React.FC<PromiseCardProps> = ({
  imageurl,
  title,
  description,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative w-[85%] xl:w-[70%] mx-auto h-[360px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-500"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />

      {/* Image Reveal */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <Image
          src={imageurl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h2
          className={`text-2xl font-semibold leading-tight transition-all duration-500 ${
            hovered ? "-translate-y-6" : "translate-y-0"
          }`}
        >
          {title}
        </h2>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            hovered ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm text-neutral-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Accent Line */}
        <div
          className={`mt-6 h-[2px] w-10 bg-white transition-all duration-500 ${
            hovered ? "w-20 opacity-100" : "w-10 opacity-50"
          }`}
        />
      </div>
    </div>
  );
};

export default PromiseCard;
