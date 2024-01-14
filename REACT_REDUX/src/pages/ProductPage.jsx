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
  }, [ID]);

  if (loading) {
    return <ClipLoader color="#646cff" size={50} />;
  }

  return (
    <div className="flex">
      <img src={product.image} alt={product.title} />

      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <div>
          <span>${product.price}</span>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
