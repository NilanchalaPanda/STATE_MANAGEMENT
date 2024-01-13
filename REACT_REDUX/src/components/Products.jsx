import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const ProductData = await response.json();

      console.log("DATA : ", ProductData);
      setProducts(ProductData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((singleProd) => (
        <ProductCard key={singleProd.id} singleProd={singleProd} />
      ))}
    </div>
  );
};

export default Products;
