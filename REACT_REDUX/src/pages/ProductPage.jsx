// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { ClipLoader } from "react-spinners";

// const ProductPage = () => {
//   const { pathname } = useLocation();
//   const [loading, isLoading] = useState(true);
//   const [product, setProduct] = useState(null);
//   // console.log(pathname);

//   const ID = pathname.split("/").slice(-1)[0];
//   console.log(ID);

//   useEffect(() => {
//     const fetchSingleProducts = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products/${ID}`);
//       const ProductData = await response.json();

//       console.log("DATA : ", ProductData);
//       setProduct(ProductData);

//       // LOADING STATE :
//       isLoading(false);
//     };

//     fetchSingleProducts();
//   }, []);

//   if (isLoading) {
//     <ClipLoader />;
//   }
//   <h1 className="text-5xl font-bold">{product?.title}</h1>
// };

// export default ProductPage;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ProductPage = () => {
  const { pathname } = useLocation();
  const [loading, isLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const ID = pathname.split("/").slice(-1)[0];

  useEffect(() => {
    const fetchSingleProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${ID}`);
      const ProductData = await response.json();

      console.log("DATA : ", ProductData);
      setProduct(ProductData);

      // LOADING STATE :
      isLoading(false);
    };

    fetchSingleProducts();
  }, [ID]); // Add ID as a dependency to useEffect

  if (loading) {
    return <ClipLoader color="#646cff" size={50} />;
  }

  return <h1 className="text-5xl font-bold">{product?.title}</h1>;
};

export default ProductPage;
