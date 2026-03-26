'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Newsletter Form Submitted:', formData);
    setFormData({ name: '', email: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative overflow-hidden border-t border-zinc-900 bg-[#0a0a0a]">
      {/* Subtle gold glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center sm:py-40 lg:px-8">
        {/* Premium heading with gold accent */}
        <div className="mb-3">
          <span className="text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">
            Stay Updated
          </span>
        </div>
        
        <h2 className="text-5xl font-extralight tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
          Join Our Community
        </h2>
        
        {/* Elegant divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        
        <p className="mx-auto max-w-xl text-lg font-extralight leading-relaxed tracking-wide text-zinc-400">
          Get early access to new releases, exclusive discounts, and restock alerts delivered straight to your inbox.
        </p>

        {/* Premium form with gold accents */}
        <form className="mx-auto mt-14 max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 border-b border-zinc-800 bg-transparent px-6 py-4 text-sm tracking-wider text-zinc-100 placeholder-zinc-600 transition-all duration-300 focus:border-[#d4af37] focus:outline-none focus:ring-0"
              placeholder="ENTER FULL NAME"
            />
            
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 border-b border-zinc-800 bg-transparent px-6 py-4 text-sm tracking-wider text-zinc-100 placeholder-zinc-600 transition-all duration-300 focus:border-[#d4af37] focus:outline-none focus:ring-0 sm:border-l sm:border-zinc-800"
              placeholder="ENTER EMAIL"
            />
            
            <button
              type="submit"
              className="group relative overflow-hidden border border-[#d4af37] bg-transparent px-10 py-4 text-xs font-light uppercase tracking-[0.2em] text-[#d4af37] transition-all duration-500 hover:text-[#0a0a0a] sm:w-auto"
            >
              <span className="absolute inset-0 bg-[#d4af37] transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
              <span className="relative">Subscribe</span>
            </button>
          </div>
          
          {submitted && (
            <p className="mt-6 text-sm font-light tracking-wide text-[#d4af37]">
              Welcome to our exclusive community. Review the console logs.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}