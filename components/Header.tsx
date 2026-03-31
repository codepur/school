"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-school-border">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="font-bold text-lg text-school-dark tracking-tight">
            <Image
              src="/images/logo.png"
              alt="Vedaant Vidhyakulum Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-school-dark hover:text-school-maroon transition-colors"
          >
            About
          </Link>
          <Link
            href="#academics"
            className="text-sm font-medium text-school-dark hover:text-school-maroon transition-colors"
          >
            Academics
          </Link>
          <Link
            href="#facilities"
            className="text-sm font-medium text-school-dark hover:text-school-maroon transition-colors"
          >
            Facilities
          </Link>

          {/* Divider */}
          <div className="w-px h-8 bg-school-dark" />

          {/* Apply Now Button */}
          <Link
            href="#apply"
            className="bg-school-maroon text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-school-maroon/90 transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-school-border px-5 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            <Link
              href="#about"
              className="text-sm font-medium text-school-dark py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#academics"
              className="text-sm font-medium text-school-dark py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="#facilities"
              className="text-sm font-medium text-school-dark py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link
              href="#apply"
              className="bg-school-maroon text-white text-sm font-medium px-6 py-2.5 rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
