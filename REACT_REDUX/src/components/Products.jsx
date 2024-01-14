import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProduct } from "../store/productSilce";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const productFetching = useSelector(state => state.product);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProduct());
    console.log(productFetching.data);

    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const ProductData = await response.json();

    //   console.log("DATA : ", ProductData);
    //   setProducts(ProductData);
    // };

    // fetchProducts();
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
