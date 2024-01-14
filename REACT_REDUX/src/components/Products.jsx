import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProduct } from "../store/productSilce";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../store/productSilce";
import { ClipLoader } from "react-spinners";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, reqStatus } = useSelector((state) => state.product);

  useEffect(() => {
    // Storing and fetching from STORE //
    dispatch(fetchProduct());

    ////// TRADITIONAL WAY OF DATA FETCHING //////

    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const ProductData = await response.json();

    //   console.log("DATA : ", ProductData);
    //   setProducts(ProductData);
    // };

    // fetchProducts();
  }, []);

  if (reqStatus === STATUSES.LOADING) {
    return (
      <div className="flex items-center justify-center mt-20">
        <ClipLoader color="#646cff" size={80} />
      </div>
    );
  }

  if (reqStatus === STATUSES.ERROR) {
    return (
      <div className="flex items-center justify-center mt-20 py-3 px-8 border-2 border-red-900 bg-red-800/25 text-white w-[80%] mx-auto text-3xl md:w-[50%]">
        Something went wrong !
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((singleProd) => (
        <ProductCard key={singleProd.id} singleProd={singleProd} />
      ))}
    </div>
  );
};

export default Products;
