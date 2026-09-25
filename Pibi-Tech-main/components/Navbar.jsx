"use client";

import { useState } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="container-max">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white flex items-center gap-2"
          >
            <div className="w-10 h-10 relative">
              <Image
                src={"/logo.png"}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span>Pi Bi Tech</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#Products"
              className="text-slate-200 hover:text-white transition"
            >
              Products
            </Link>
            <Link
              href="/#Services"
              className="text-slate-200 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              href="/#Solutions"
              className="text-slate-200 hover:text-white transition"
            >
              Solutions
            </Link>
            <Link
              href="/about-us"
              className="text-slate-200 hover:text-white transition"
            >
              Who we are
            </Link>
            <Link
              href="/contact-us"
              className="text-slate-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/pi-bi-technologies"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/pibi_technologies/"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-800 bg-slate-950">
            <Link
              href="/#Products"
              onClick={handleNavClick}
              className="block py-3 text-slate-200 hover:text-white transition"
            >
              Products
            </Link>

            <Link
              href="/#Services"
              onClick={handleNavClick}
              className="block py-3 text-slate-200 hover:text-white transition"
            >
              Services
            </Link>

            <Link
              href="/#Solutions"
              onClick={handleNavClick}
              className="block py-3 text-slate-200 hover:text-white transition"
            >
              Solutions
            </Link>

            <Link
              href="/about-us"
              onClick={handleNavClick}
              className="block py-3 text-slate-200 hover:text-white transition"
            >
              Who we are
            </Link>
            <Link
              href="/contact-us"
              onClick={handleNavClick}
              className="block py-3 text-slate-200 hover:text-white transition"
            >
              Contact us
            </Link>

            <div className="flex gap-4 pt-4 border-t border-slate-800">
              <Link
                href="https://www.linkedin.com/company/pi-bi-technologies"
                target="_blank"
                onClick={handleNavClick}
                className="text-slate-400 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/pibi_technologies/"
                target="_blank"
                onClick={handleNavClick}
                className="text-slate-400 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
