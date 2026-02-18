"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setIsNavVisible(!mobile);
      setMenuButton(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [closeBtn, setCloseBtn] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [slideText, setSlideText] = useState("");
  const pathname = usePathname();

  const closeNav = () => {
    setSlideText("slide-right");
    setCloseBtn(false);
    setIsNavVisible(false);
    setIsMobile(true);
    setMenuButton(true);
  };

  const menuClick = () => {
    setIsNavVisible(true);
    setCloseBtn(true);
    setIsMobile(false);
    setSlideText("slide-left");
    setMenuButton(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      !isMobile && isNavVisible && closeBtn ? "hidden" : "";
  }, [isMobile, isNavVisible, closeBtn]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closeNavOnClick = () => {
    if (closeBtn) {
      closeNav();
    }
  };


  return (
    <header className="w-full h-[100px]  xl:h-[75px] lg:h-[120px] md:h-[120px] sm:h-[90px]  flex justify-between items-center bg-white left-0 top-0 z-50 text-black ">
      <div className="w-[80%] xl:w-[38%] lg:w-[40%] md:w-[35%] sm:w-[32%] h-[95%] flex items-center justify-start  z-100 ">
        <div className='slide-right h-[100%]  w-[90%] xl:w-[80%] lg:w-[75%] md:w-[75%] sm:w-[70%]   flex items-center justify-start'>
          <Link href={"/"} className="w-full h-full flex items-end">
              <div className="w-1/3 h-full flex items-end justify-center">
                <div className=" w-[90%] h-[95%]  relative">
                  <Image src={"/images/companyLogo3.png"} alt="logo" fill className='object-cover' />
                </div>
              </div>
              <div className="w-3/4 h-[90%] flex flex-col">
              <h1 className='w-full h-[32px] xl:h-[38px] lg:h-[32px] md:h-[25px] sm:h-[20px] text-[24px] xl:text-[35px] lg:text-[32px] md:text-[25px] sm:text-[18px] font-extrabold leading-tight'><span className="bg-gradient-to-r from-orange-500 via-orange-500 to-red-600  bg-clip-text text-transparent ">
                ALWAJ AL NOOR
              </span></h1>
              <h2 className='w-full text-left  xl:pl-[90px] lg:pl-[90px] md:pl-[52px] sm:pl-[48px] xl:text-[15px] 
                  lg:text-[10px] md:text-[9px] sm:text-[6px] text-[9px] font-bold '><span className="bg-gradient-to-r from-gray-400  to-gray-400 bg-clip-text text-transparent ">
                  TECHNICAL SERVICES L.L.C
                </span></h2>
                </div>
          </Link>
        </div>
      </div>

      {isMobile && menuButton && (
        <button onClick={menuClick} className="menu_button cursor-pointer pr-4 ">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {isNavVisible && (
        <nav
          className={`w-[65%] xl:w-[65%] lg:w-[65%] md:w-[65%] sm:w-[68%]  h-full flex justify-center items-center  slide-down  ${slideText}`}
        >
          {closeBtn && (
            <div
              className="absolute top-4 left-4 text-white text-[22px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}

          <ul className="navbar w-[90%] h-full flex justify-end  items-center  space-x-0 xl:space-x-16 lg:space-x-8 md:space-x-4 sm:space-x-3 text-white font-semibold xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px]">
            <li
              className={`h-full flex justify-center items-center  ${pathname === "/"
                ? "text-orange-600 underline underline-offset-[12px]"
                : "text-black"
                }`}
            >
              <Link href="/" className="hover:underline hover:underline-offset-[12px] hover:text-orange-600" onClick={closeNavOnClick}>HOME</Link>
            </li>

            <li
              className={`h-full flex justify-center items-center  ${pathname === "/about-us"
                ? "text-orange-600 underline underline-offset-[12px]"
                : "text-black"
                }`}
            >
              <Link href="/about-us" className="hover:underline hover:underline-offset-[12px] hover:text-orange-600" onClick={closeNavOnClick}>ABOUT US</Link>
            </li>

            <li
              className={`h-full flex justify-center items-center ${pathname === "/ongoing-projects" || pathname === "/completed-projects"
                ? "text-orange-600 underline underline-offset-[12px]"
                : "text-black"}
            `}
              onMouseLeave={() => setViewProjects(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setViewProjects(true)}
                onClick={() => setViewProjects(!viewProjects)}
              >
                <button className="mr-0 pr-2 hover:underline hover:underline-offset-[12px] hover:text-orange-600" >PROJECTS</button>
                <i
                  className={viewProjects ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>
                {viewProjects && (
                  <div className="w-max absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/ongoing-projects" onClick={closeNavOnClick} >ONGOING PROJECTS</Link>
                    <Link href="/completed-projects" onClick={closeNavOnClick}>COMPLETED PROJECTS</Link>
                  </div>
                )}
              </div>
            </li>

            <li
              className={`h-full flex justify-center items-center  ${pathname === "/services"
                ? "text-orange-600 underline underline-offset-[12px]"
                : "text-black"
                }`}
            >
              <Link href="/services" className="hover:underline hover:underline-offset-[12px] hover:text-orange-600" onClick={closeNavOnClick}>SERVICES</Link>
            </li>

            <li
              className="h-full flex justify-center items-center "
              onMouseLeave={() => setMoreDetails(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className={`mr-0 pr-2 hover:underline hover:underline-offset-[12px] hover:text-orange-600 ${pathname === "/pre-cast" || pathname === "/profile" ? "text-orange-600 underline underline-offset-[12px]" : "text-black"
                  }`}>MORE</button>
                <i
                  className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>

                {moreDetails && (
                  <div className="w-[140px] absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/groups" onClick={closeNavOnClick}>OUR GROUPS</Link>
                    <Link href="#" onClick={closeNavOnClick}>PROFILE</Link>
                  </div>
                )}
              </div>
            </li>
            <li
              className={`h-full flex justify-center items-center  ${pathname === "/services"
                ? "text-orange-600 underline underline-offset-[12px]"
                : "text-black"
                }`}
            >
              <Link href="/contact-us" className="hover:underline hover:underline-offset-[12px] hover:text-orange-600" onClick={closeNavOnClick}>CONTACT US</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;