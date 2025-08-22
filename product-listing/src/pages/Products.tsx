import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, products]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
