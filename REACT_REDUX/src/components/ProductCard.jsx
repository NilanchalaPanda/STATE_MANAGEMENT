import { useNavigate } from "react-router-dom";

// REDUX IMPORT STATEMENTS : 
import {add} from '../store/cartSlice'
import {useDispatch} from 'react-redux'

const ProductCard = ({ singleProd }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    // Store it in REDUX :
    dispatch(add(product));
  }

  return (
    <div
      onClick={() => navigate(`/${singleProd.id}`)}
      className="bg-slate-600 border border-slate-200 p-4 rounded-3xl my-5 md:w-[350px] lg:w-[400px]"
    >
      <img
        className="h-[300px] object-contain mx-auto rounded-3xl mix-blend-overlay"
        src={singleProd.image}
        alt={singleProd.description}
      />
      <h1 className="mx-5 text-left pt-3 text-xl">{singleProd.title}</h1>

      <div className="pt-3 mx-5 text-center items-center flex justify-between">
        <p className="font-bold">₹{singleProd.price}</p>
        <button
          onClick={() => handleAdd(singleProd)}
          className="py-2 px-4 bg-secondary rounded-2xl border border-slate-200"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
