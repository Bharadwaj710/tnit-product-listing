import ProductCard from './ProductCard';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=12', { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn('FakeStore API failed. Falling back to custom products.');
      return getFallbackProducts();
    }
    return await res.json();
  } catch (error) {
    console.warn('Network error reaching FakeStore API. Falling back to custom products.');
    return getFallbackProducts();
  }
}

function getFallbackProducts() {
  return [
    {
      id: 1,
      title: 'Crinkle Trapeze Tank',
      price: 110.00,
      category: "Women's Clothing",
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2670&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Cutaway Ribbed Midi Dress',
      price: 200.00,
      category: "Women's Clothing",
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2574&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Classic Jean Short',
      price: 100.00,
      category: "Women's Clothing",
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZGVuaW0lMjBzaG9ydHN8ZW58MHx8fHwxNzc0NDkxNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Textured Mini Collar Shirt',
      price: 120.00,
      category: "Men's Clothing",
      image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=2574&auto=format&fit=crop'
    }
  ];
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