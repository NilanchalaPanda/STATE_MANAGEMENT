import { useSelector } from "react-redux";

const WishList = () => {
  const productData = useSelector((state) => state.cart);

  return(
    <div>
      {productData.map(single => (
        <div className="mx-5 p-5 flex flex-col md:flex-row items-center justify-center text-center bg-slate-700 border border-slate-300 rounded-3xl mt-10 pb-10">
          <img src={single.image} alt={single.title} className="w-[200px]" />
          <h1 className="mt-2 text-lg font-bold">{single.title}</h1>

          <div className="flex items-center gap-x-5 mt-2 -mb-4">
            <p>Price: ${single.price}</p>
            <button className="py-2 px-4 bg-red-700 rounded-2xl border border-slate-300">Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default WishList;
