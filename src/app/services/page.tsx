'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { services } from '../export';

const ServicesPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="w-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-200 mb-4 ">
            Explore Our Services
          </h1>
          <p className="text-gray-400 text-lg">
            Click on a service to see full details and visuals.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-6">
          {services.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <span className="text-sm text-blue-600 font-bold">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                  <span
                    className={`text-3xl font-bold transition-transform cursor-pointer ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="border-t px-6 pb-6 pt-4 space-y-6 transform duration-1000 ">
                    <p className="text-gray-700 text-lg">
                      {item.about}
                    </p>

                    <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <span className="text-blue-600 font-bold">✔</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;