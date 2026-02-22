'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { about } from '../export';
import CoreValueSection from '../components/corevalueSection';

const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        ref={aboutRef}
        className="max-w-7xl mx-auto px-6 py-20 space-y-24"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
          About Us
        </h2>

        {about.map((item, index) => (
          <div
            key={item.title}
            className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >
            {/* IMAGE BLOCK */}
            {item.image && (
              <div
                className={`relative w-full lg:w-1/2 h-[260px] sm:h-[320px] lg:h-[380px] xl:h-[420px]
        ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-3xl shadow-xl"
                />
              </div>
            )}

            {/* TEXT CARD */}
            <div
              className={`w-full lg:w-1/2 bg-white rounded-3xl shadow-lg p-8 sm:p-10 space-y-6
      ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <span className="inline-block text-xs uppercase tracking-widest text-green-700 font-semibold">
                About Section
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {item.para1}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {item.para2}
              </p>
            </div>
          </div>
        ))}

        <div className="pt-8 border-t border-gray-200 space-y-6">

          {/* Point 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
              <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                Structured Project Execution
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
              Our projects are executed through well-defined workflows that ensure clarity,
              accountability, and consistent progress tracking at every stage of development.
            </p>
          </div>

          {/* Point 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
              <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                Standards & Regulatory Compliance
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
              We strictly adhere to applicable local regulations and international standards,
              ensuring safety, reliability, and long-term performance across all project scopes.
            </p>
          </div>

          {/* Point 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
              <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                Skilled & Experienced Workforce
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
              Our team consists of qualified professionals with practical industry experience,
              enabling precise execution, effective problem-solving, and reliable outcomes.
            </p>
          </div>

          {/* Point 4 */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
              <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                Commitment to Quality & Safety
              </h4>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-6">
              Quality control and safety management are embedded into our operations,
              ensuring consistent workmanship while safeguarding people, assets, and environments.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    <div className="space-y-6">
      <span className="text-xs uppercase tracking-widest text-green-700 font-semibold">
        Our Philosophy
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Built on Trust and Quality
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
        ANWAJ AL NOOR operates with a clear philosophy rooted in quality,
        accountability, and professional integrity. We believe that every
        successful project begins with trust and is sustained through
        consistent performance.
      </p>

      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
        Our approach focuses on delivering solutions that are practical,
        reliable, and aligned with long-term operational goals.
      </p>
    </div>

    <div className="bg-gray-50 rounded-3xl p-10 shadow-sm">
      <ul className="space-y-5">
        <li className="flex gap-3">
          <span className="w-2 h-2 mt-2 rounded-full bg-green-600" />
          <span className="text-gray-700">
            Commitment to consistent quality standards
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 mt-2 rounded-full bg-green-600" />
          <span className="text-gray-700">
            Transparent and accountable execution
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-2 h-2 mt-2 rounded-full bg-green-600" />
          <span className="text-gray-700">
            Long-term value-driven solutions
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>

      {/* ================= CORE VALUES ================= */}
      <div className="bg-gray-50 py-20">
        <CoreValueSection />
      </div>

    </section>
  );
};

export default AboutUs;