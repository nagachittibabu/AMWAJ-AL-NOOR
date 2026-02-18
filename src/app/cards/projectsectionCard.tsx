import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsectionCardProps {
  imageurl: string;
  title: string;
  description: string;
  banner: string;
}

const ProjectsectionCard: React.FC<ProjectsectionCardProps> = ({
  imageurl,
  title,
  description,
  banner,
}) => {
  return (
    <div className="group w-[90%] xl:w-[65%]  h-[420px] border border-12 border-yellow-200 flex flex-col rounded-2xl overflow-hidden shadow-2xl relative shadow-3xl shadow-yellow-600">

      {/* Image Section */}
      <div className="w-full h-[60%] flex items-center justify-center">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={banner}
            alt="Project banner"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
        </div>
      </div>
      {/* Content Section */}``
      <div className="w-full h-[50%]  z-10 flex flex-col justify-between bg-orange-500 text-white border absolute top-[50%] left-0 rounded-t-[50%]">

        {/* Top */}
        <div className="w-fulll h-full ">
          <div className="flex items-center f justify-center">
            <div className="">
              <div className="w-16 h-18 rounded-lg overflow-hidden border border-2 border-gray-200 bg-white relative">
                <Image
                  src={imageurl}
                  alt={title}
                  fill
                  className="object-fill "
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold leading-loose mb-4 text-center">
            {title}
          </h2>

          <p className="w-full text-center text-[10px] text-white leading-loose">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsectionCard;
