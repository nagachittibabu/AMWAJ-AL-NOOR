import Image from "next/image";
import React from "react";

interface PersonCardProps {
  imageurl: string;
  name: string;
  specialization: string;
}

const Person: React.FC<PersonCardProps> = ({
  imageurl,
  name,
  specialization,
}) => {
  return (
    <div
      className="group relative w-full max-w-sm rounded-2xl p-[3px]
      bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400
      transition-all duration-300
      hover:scale-[1.04]
      hover:shadow-[0_20px_50px_rgba(255,120,0,0.45)] h-[320px] "
    >
      <div className="bg-neutral-950 rounded-2xl overflow-hidden">
        <div className="relative w-full h-[320px]">
          <Image
            src={imageurl}
            alt={name}
            fill
            priority
            className="object-fit transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="px-6 py-5 text-center">
          <h1 className="text-xl font-bold tracking-wide text-white">
            {name}
          </h1>

          <p className="mt-1 text-sm text-orange-300">
            {specialization}
          </p>

          <div className="mt-4 mx-auto h-[3px] w-16 rounded-full
            bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Person;
