import ProductList from '@/components/ProductList';
import NewsletterForm from '@/components/NewsletterForm';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Premium Navigation Bar extracted to Client Component */}
      <Navbar />

      <main>
        {/* Hero Section - Premium fashion model background */}
        <div 
          className="relative overflow-hidden border-b border-zinc-900 bg-[#0a0a0a]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2560&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          {/* Subtle dark overlay to let the model shine while keeping text readable */}
          <div className="absolute inset-0 bg-[#0a0a0a]/50" />
          
          {/* Gradient to smoothly transition the bottom back to the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
          
          <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-32 text-center sm:px-8 sm:pb-36 sm:pt-44 lg:px-12">
            <div className="mb-6 animate-fade-up">
              <span className="text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">
                Premium Clothing Brand
              </span>
            </div>
            
            <h2 className="relative flex flex-col items-center justify-center animate-fade-up delay-100 z-10 w-full text-center px-4 mt-2">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.1em] text-zinc-50 uppercase drop-shadow-md whitespace-nowrap">
                Everyday Luxury
              </span>
              
              <div className="relative mt-6 md:mt-10">
                <span className="inline-block bg-[#d4af37] text-[#0a0a0a] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] sm:tracking-[0.4em] uppercase px-8 py-3 md:px-12 md:py-5 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  REDEFINED
                </span>
              </div>
            </h2>
            
            {/* Gold divider */}
            <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-fade-up delay-300" />
            
            <p className="mx-auto max-w-2xl text-base font-extralight leading-relaxed tracking-[0.05em] text-zinc-400 sm:text-lg animate-fade-up delay-500">
              High-quality, minimalist apparel made from the finest materials. We bring premium fashion directly to you.
            </p>
            
            <div className="mt-12 animate-fade-up delay-700">
              <a 
                href="#products" 
                className="group relative flex w-full justify-center sm:w-auto sm:inline-flex items-center gap-3 overflow-hidden border border-[#d4af37] px-10 py-4 text-xs font-light uppercase tracking-[0.2em] transition-all duration-500"
              >
                <span className="absolute inset-0 bg-[#d4af37] transition-transform duration-500 -translate-x-full group-hover:translate-x-0" />
                <span className="relative text-[#d4af37] transition-colors duration-500 group-hover:text-[#0a0a0a]">Explore Collection</span>
                <svg className="relative h-4 w-4 text-[#d4af37] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Scroll Down Arrow Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-1000">
            <a href="#products" aria-label="Scroll down" className="flex animate-bounce-subtle flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-70">
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-zinc-500">Discover</span>
              <svg className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Products Section - Premium spacing */}
        <section id="products" aria-labelledby="products-heading" className="px-6 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 id="products-heading" className="text-4xl font-extralight tracking-tight text-zinc-100 sm:text-5xl">
              Our Bestsellers
            </h2>
            <p className="mt-6 text-base font-extralight leading-relaxed tracking-wide text-zinc-500">
              Trusted by over 50,000 customers worldwide. Discover our highest-rated pieces.
            </p>
          </div>
          <ProductList />
        </section>

        {/* Newsletter Section */}
        <section aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading" className="sr-only">
            Newsletter
          </h2>
          <NewsletterForm />
        </section>
        
        {/* Premium Footer */}
        <footer className="border-t border-zinc-900 bg-[#0a0a0a] px-6 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3 sm:text-left">
              <div>
                <h3 className="text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">Shop</h3>
                <ul className="mt-6 space-y-3">
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">New Arrivals</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Collections</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Sale</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">About</h3>
                <ul className="mt-6 space-y-3">
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Our Story</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Craftsmanship</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Sustainability</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-light uppercase tracking-[0.3em] text-[#d4af37]">Support</h3>
                <ul className="mt-6 space-y-3">
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Contact</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Shipping</a></li>
                  <li><a href="/" className="text-sm font-extralight tracking-wide text-zinc-500 transition-colors hover:text-zinc-100">Returns</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 border-t border-zinc-900 pt-8 text-center flex flex-col gap-3">
              <p className="text-[10px] sm:text-xs font-extralight tracking-[0.2em] text-zinc-600">
                © 2024 CEASER'S. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs font-light tracking-widest text-[#d4af37]/80">
                Made by Bharadwaj with love 🤍
              </p>
            </div>
          </div>
        </footer>
        
        <ScrollToTop />
      </main>
    </div>
  );
}