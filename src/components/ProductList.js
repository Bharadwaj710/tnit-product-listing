import ProductCard from './ProductCard';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=12', { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-7xl">
      {/* Assigment Requirement: Mobile 1, Tablet 2, Desktop 4 */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}