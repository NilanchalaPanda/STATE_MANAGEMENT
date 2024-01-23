import { useNavigate } from "react-router-dom";

// REDUX IMPORT STATEMENTS :
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProductCard = ({ singleProd }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const isProductAdded = cartData.find((item) => item.id === singleProd.id);

  const handleAdd = (selectedProduct) => {
    //Condition to check if card id added or not :
    if (isProductAdded) {
      return toast("This product is already in your cart");
    } else {
      // Store it in REDUX :
      dispatch(add(selectedProduct));
      toast.success("Items Added");
    }
  };

  return (
    <div className="bg-slate-600 border border-slate-200 p-4 rounded-3xl my-5 md:w-[350px] lg:w-[400px]">
      <img
        className="h-[300px] object-contain mx-auto rounded-3xl mix-blend-overlay"
        src={singleProd.image}
        alt={singleProd.description}
      />
      <h1
        onClick={() => navigate(`/${singleProd.id}`)} 
        className="mx-5 text-left pt-3 text-xl cursor-pointer hover:text-gray-300 transition-all"
      >
        {singleProd.title}
      </h1>

      <div className="pt-3 mx-5 text-center items-center flex justify-between">
        <p className="font-bold">₹{singleProd.price}</p>
        <button
          onClick={() => handleAdd(singleProd)}
          className={isProductAdded ? `py-2 px-4 bg-green-500 rounded-2xl border border-slate-200` : `py-2 px-4 bg-secondary rounded-2xl border border-slate-200`}
        >
          {isProductAdded ? "Added" : "Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
