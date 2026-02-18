'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-gradient-to-br from-orange-600 via-orange-400 to-red-500 text-white py-16">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-3 space-y-8">
            <Link href="/" className="block group">
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl w-fit shadow-xl group-hover:scale-105 transition-all duration-300">
                <Image src="/images/fullLogo.jpeg" alt="Company Logo" width={160} height={50} className="object-contain" />
              </div>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed font-medium drop-shadow-sm">
              Engineering sustainable solutions for the modern world. Specializing in Mechanical, Electrical, and Plumbing excellence across the UAE landscape.
            </p>
            <div className="flex gap-3">
              {['instagram', 'whatsapp', 'facebook-circle'].map((icon) => (
                <Link key={icon} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-orange-600 transition-all text-xl shadow-lg">
                  <i className={`bx bxl-${icon}`}></i>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-6 border-b-2 border-white/20 pb-2 w-fit">Expertise</h3>
              <ul className="space-y-3 text-sm font-bold">
                <li><Link href="/services" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">MECHANICAL</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">ELECTRICAL</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">PLUMBING</Link></li>
                <li><Link href="/groups" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">GROUPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-6 border-b-2 border-white/20 pb-2 w-fit">Explore</h3>
              <ul className="space-y-3 text-sm font-bold">
                <li><Link href="/" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">HOME</Link></li>
                <li><Link href="/about-us" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">ABOUT US</Link></li>
                <li><Link href="/projects" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">PROJECTS</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all">CONTACT</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-black/10 backdrop-blur-lg border border-white/20 p-6 rounded-[2.5rem] shadow-2xl">
              
              <div className="h-32 w-full rounded-[1.8rem] overflow-hidden mb-6 border border-white/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d815.61564973858!2d55.3951615!3d25.3666734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5a245db7de29%3A0x3969952e4d8a959b!2sNoor%20Al%20Nabba%20Building!5e1!3m2!1sen!2sin!4v1761215634842!5m2!1sen!2sin" 
                  className="w-full h-full brightness-90 contrast-125"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-[11px] text-yellow-200 font-black uppercase tracking-widest">Phone Support</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+97165217424" className="text-[13px] font-bold text-white hover:text-yellow-200 transition-colors">+971 6 521 7424</a>
                    <a href="tel:+971500000000" className="text-[13px] font-bold text-white hover:text-yellow-200 transition-colors">+971 50 000 0000</a>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[11px] text-yellow-200 font-black uppercase tracking-widest">Email Inquiry</h4>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:info@amwajalnoor.in" className="text-[13px] font-bold text-white/90 hover:text-yellow-200 truncate transition-colors">info@amwajalnoor.in</a>
                    <a href="mailto:amwajalnoor@gmail.com" className="text-[13px] font-bold text-white/90 hover:text-yellow-200 truncate transition-colors">amwajalnoor@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-3">
                <i className='bx bxs-map-pin text-yellow-300 text-lg animate-bounce'></i>
                <p className="text-[11px] text-white font-black tracking-tight uppercase">P.O BOX: 67411, Dubai - UAE</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] font-black text-white/70 tracking-[0.4em] uppercase">
            © 2026 Amwaj Al Noor Tech LLC
          </p>
          <div className="text-[12px] text-white/80 font-bold px-4 py-2 bg-black/10 rounded-full backdrop-blur-sm">
            BUILT BY • NAGA • SAVYA • VEERASWAMY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;