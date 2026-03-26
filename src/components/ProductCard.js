import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="group">
      {/* Premium Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={product.id <= 4}
        />
        {/* Subtle gold border on hover */}
        <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-700 group-hover:border-[#d4af37]/20" />
        
        {/* Product Badge / Category coming from FakeStore API */}
        {product.category && (
          <div className="absolute left-4 top-4 bg-[#0a0a0a]/80 px-3 py-1 backdrop-blur-sm shadow-md">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4af37]">
              {product.category}
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info - Elegant spacing and typography */}
      <div className="mt-5 text-center px-2 flex flex-col flex-1">
        <h3 className="line-clamp-2 text-sm font-medium tracking-wide text-zinc-100 transition-colors duration-300 group-hover:text-[#d4af37]">
          {product.title}
        </h3>
        <p className="mt-2 text-sm font-light tracking-wide text-zinc-400">
          ${product.price ? product.price.toFixed(2) : '0.00'}
        </p>
      </div>
    </div>
  );
}