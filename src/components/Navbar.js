'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-zinc-900 bg-[#0a0a0a]/95 backdrop-blur-sm relative z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-12">
          
          {/* Mobile Hamburger Menu */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu" 
              className="text-zinc-100 hover:text-[#d4af37] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Left Links */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#products" className="text-xs font-light uppercase tracking-[0.3em] text-zinc-100 transition-colors hover:text-[#d4af37]">
              Collections
            </a>
            <a href="#products" className="text-xs font-light uppercase tracking-[0.3em] text-zinc-100 transition-colors hover:text-[#d4af37]">
              New Arrivals
            </a>
          </div>
          
          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl sm:text-3xl font-extralight tracking-[0.2em] sm:tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-yellow-200 to-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
              CEASER'S
            </h1>
          </div>
          
          {/* Mobile Right Icon */}
          <div className="flex items-center md:hidden">
            <button aria-label="Search" className="text-zinc-100 hover:text-[#d4af37] transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-xs font-light uppercase tracking-[0.3em] text-zinc-100 transition-colors hover:text-[#d4af37]">
              Search
            </button>
            <button className="text-xs font-light uppercase tracking-[0.3em] text-zinc-100 transition-colors hover:text-[#d4af37]">
              Account
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a] px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu" 
              className="text-zinc-100 hover:text-[#d4af37] transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mt-16 flex flex-col gap-10 pl-4 animate-fade-up">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#products" className="text-2xl font-light uppercase tracking-[0.3em] text-zinc-100 hover:text-[#d4af37]">
              Collections
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#products" className="text-2xl font-light uppercase tracking-[0.3em] text-zinc-100 hover:text-[#d4af37]">
              New Arrivals
            </a>
            <div className="mt-6 border-t border-zinc-800 pt-10 flex flex-col gap-10">
              <a onClick={() => setIsMobileMenuOpen(false)} href="#search" className="text-2xl font-light uppercase tracking-[0.3em] text-zinc-100 hover:text-[#d4af37]">
                Search
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#account" className="text-2xl font-light uppercase tracking-[0.3em] text-zinc-100 hover:text-[#d4af37]">
                Account
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
