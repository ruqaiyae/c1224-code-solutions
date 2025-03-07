import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Product } from './Product';
import { toDollars } from '../lib/to-dollars';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('failed to fetch products');
        const data = (await response.json()) as Product[];
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1
        style={{ fontSize: '3.2rem', lineHeight: '1.1' }}
        className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
        Catalog
      </h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

function ProductCard({ product }: CardProps) {
  const { productId, imageUrl, name, price, shortDescription } = product;
  return (
    <Link
      to={`/product/${productId}`}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <div className="flex-auto p-6">
        <img
          src={imageUrl}
          style={{ height: '15rem', paddingBottom: '2rem' }}
        />
        <h5 className="font-bold mb-3">{name}</h5>
        <h6 style={{ color: 'grey' }}>{toDollars(price)}</h6>
        <p>{shortDescription}</p>
      </div>
    </Link>
  );
}
