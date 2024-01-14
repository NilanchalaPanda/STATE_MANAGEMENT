import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const WishList = () => {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove(product.id));
  };

  const productData = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="pt-5 text-center -mb-4 text-4xl md:pt-10 md:pl-5 md:text-5xl">
        Your favourite products
      </h1>
      {productData.map((single) => (
        <div className="mx-5 p-5 flex flex-col md:flex-row items-center justify-center text-center bg-slate-700 border border-slate-300 rounded-3xl mt-10 pb-10 md:justify-between">
          <div className="flex flex-col items-center md:flex-row md:gap-x-5">
            <img src={single.image} alt={single.title} className="w-[200px]" />
            <div className="md:text-left md:pr-10">
              <h1 className="mt-2 text-lg font-bold md:text-3xl">
                {single.title}
              </h1>
              <p className="text-gray-400 hidden md:inline-block">
                {single.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-5 mt-2 -mb-4 md:flex-col md:text-2xl md:w-[500px] md:gap-y-3">
            <p>Price: ${single.price}</p>
            <button
              onClick={() => handleRemove(single)}
              className="py-2 px-4 bg-red-700 rounded-2xl border border-slate-300"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
