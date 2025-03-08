import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toDollars } from '../lib/to-dollars';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItem(productId: number) {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok)
          throw new Error(`failed to load product ${productId}`);
        const data = (await response.json()) as Product;
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadItem(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, imageUrl, price, shortDescription, longDescription } = product;

  function onAdd() {
    alert(`Added ${name} to cart`);
    navigate('/');
  }

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Catalog
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-3/5 px-4 ">
              <h2 className="font-bold">{name}</h2>
              <h6 style={{ color: 'grey' }}>{toDollars(price)}</h6>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onAdd}
        className="px-5"
        style={{ marginLeft: '2rem', border: 'solid 2px' }}>
        Add to Cart
      </button>
    </div>
  );
}
