import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const DownloadIcon = ({ className = "btn-icon" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 12l4 4 4-4" />
    <path d="M12 4v12" />
    <path d="M4 20h16" />
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rahim&nbsp;<span className="sm:block hidden"> | Data Analyst</span>
          </p>
        </Link>

        {/* Desktop: text links + resume button */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`link-pop text-[18px] font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary hover:text-white"
                  }`}
                  aria-current={active === nav.title ? "page" : undefined}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume: square video-box */}
          <a
            href="/resume.pdf"
            download
            className="btn-videobox text-[18px] font-medium"
            aria-label="Download resume"
            title="Download resume"
          >
            <span className="align-middle">Resume</span>
            <DownloadIcon />
          </a>
        </div>

        {/* Mobile burger */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((t) => !t)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[220px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`link-pop text-[16px] font-medium ${
                      active === nav.title ? "text-white" : "text-secondary hover:text-white"
                    }`}
                    aria-current={active === nav.title ? "page" : undefined}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                {/* Resume button (mobile) */}
                <a
                  href="/resume.pdf"
                  download
                  className="btn-videobox w-full justify-center text-[16px] font-medium"
                  onClick={() => setToggle(false)}
                  aria-label="Download resume"
                  title="Download resume"
                >
                  <span className="align-middle">Resume</span>
                  <DownloadIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
