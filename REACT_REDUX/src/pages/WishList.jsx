import { useSelector } from "react-redux";

const WishList = () => {
  const productData = useSelector((state) => state.cart);
  return <div>Cart</div>;
};

export default WishList;
