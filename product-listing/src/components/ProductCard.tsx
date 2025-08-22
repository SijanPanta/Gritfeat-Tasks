import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
