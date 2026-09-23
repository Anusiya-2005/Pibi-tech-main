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
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-brand-gradient flex items-center gap-1"
          >
            <div className="w-10 h-10 relative">
              <Image
                src={"/logo.png"}
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="hidden sm:inline">Pibi Tech</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#Products"
              className="text-slate-700 hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              href="/#Services"
              className="text-slate-700 hover:text-primary transition"
            >
              Services
            </Link>
            <Link
              href="/#Solutions"
              className="text-slate-700 hover:text-primary transition"
            >
              Solutions
            </Link>
            <Link
              href="/about-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Who we are
            </Link>
            <Link
              href="/contact-us"
              className="text-slate-700 hover:text-primary transition"
            >
              Contact us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/pi-bi-technologies"
              target="_blank"
              className="text-slate-600 hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/pibi_technologies/"
              target="_blank"
              className="text-slate-600 hover:text-primary transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-200">
            <Link
              href="/#Products"
              onClick={handleNavClick}
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Products
            </Link>

            <Link
              href="/#Services"
              onClick={handleNavClick}
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Services
            </Link>

            <Link
              href="/#Solutions"
              onClick={handleNavClick}
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Solutions
            </Link>

            <Link
              href="/about-us"
              onClick={handleNavClick}
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Who we are
            </Link>
            <Link
              href="/contact-us"
              onClick={handleNavClick}
              className="block py-3 text-slate-700 hover:text-primary transition"
            >
              Contact us
            </Link>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <Link
                href="https://www.linkedin.com/company/pi-bi-technologies"
                target="_blank"
                onClick={handleNavClick}
                className="text-slate-600 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/pibi_technologies/"
                target="_blank"
                onClick={handleNavClick}
                className="text-slate-600 hover:text-primary transition"
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
