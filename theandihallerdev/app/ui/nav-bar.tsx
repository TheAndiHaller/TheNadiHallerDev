'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/ui/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl mx-8">
              Andi Haller
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              title="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-12">
            <Link href="/projects" className="text-gray-300 hover:text-white ">
              { language === "En" ? "Projects" : "Proyectos" }
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white ">
              { language === "En" ? "Blog" : "Blog" }
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white ">
              { language === "En" ? "About" : "Acerca de" }
            </Link>
          </div>
          <div className="flex items-center ml-12">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 bg-gray-700 text-white text-lg font-semibold flex items-center justify-center rounded-md hover:bg-gray-600"
            >
              {language}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-right">
            <Link href="/projects" className="block text-gray-300 hover:text-white mr-24">
              { language === "En" ? "Projects" : "Proyectos" }
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-white mr-24">
              { language === "En" ? "Blog" : "Blog" }
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white mr-24">
              { language === "En" ? "About" : "Acerca de" }
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};