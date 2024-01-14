import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { add } from "../store/cartSlice";
import { STATUSES } from "../store/productSilce";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState(null);
  const { data: products, reqStatus } = useSelector((state) => state.product);


  const dispatch = useDispatch();

  const handleAdd = (product) => {
    // Store it in REDUX :
    dispatch(add(product));
    toast.success("Item Added");
  };
  const ID = pathname.split("/").slice(-1)[0];

  useEffect(() => {
    const fetchSingleProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${ID}`);
      const ProductData = await response.json();
      setProduct(ProductData);
      // LOADING STATE :
      isLoading(false);
    };

    fetchSingleProducts();
  }, [ID]);

  if (reqStatus === STATUSES.LOADING) {
    return (
      <div className="flex items-center justify-center mt-20">
        <ClipLoader color="#646cff" size={80} />
      </div>
    );
  }

  if (reqStatus === STATUSES.ERROR) {
    return (
      <div className="flex items-center justify-center mt-20 py-3 px-8 border border-red-900 bg-red-700/50 text-white">
        Something went wrong !
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 mx-3 md:my-20">
      <img
        src={product.image}
        alt={product.title}
        className="h-[350px] md:h-[600px] mx-auto rounded-3xl "
      />

      <div className="mt-5 flex flex-col justify-start gap-y-5 mx-5">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-400 -mt-5">{product.description}</p>

        <div className="flex items-center justify-around">
          <span className="font-bold text-2xl">${product.price}</span>
          <button
            onClick={() => handleAdd(product)}
            className="py-2 px-4 bg-red-700 rounded-2xl border border-slate-300"
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
