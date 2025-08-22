import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [productId]);

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
      >
        Back
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        <img src={product.image} alt={product.title} className="h-64" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 my-2">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
