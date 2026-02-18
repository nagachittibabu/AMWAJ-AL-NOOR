"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Contact Our Team
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          We help businesses turn ideas into reality.
          Let’s talk about your next project.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="-mt-24 px-4 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Start the Conversation
          </h2>

          <form className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <input
              type="text"
              placeholder="Company / Organization"
              className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            <textarea
              rows={6}
              placeholder="Briefly describe your idea or requirement"
              className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            />

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">📍 Office</h3>
            <p className="text-gray-600">
              P.O BOX: 67411<br />
              Dubai, UAE
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
            <a
              href="tel:+97165217424"
              className="text-gray-600 hover:text-black"
            >
              +971 6 521 7424
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">✉️ Email</h3>
            <a
              href="mailto:info@wahatsiwa.in"
              className="text-gray-600 hover:text-black block"
            >
              info@wahatsiwa.in
            </a>
            <a
              href="mailto:wahatliwantechllc@gmail.com"
              className="text-gray-600 hover:text-black block"
            >
              wahatliwantechllc@gmail.com
            </a>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ContactPage;