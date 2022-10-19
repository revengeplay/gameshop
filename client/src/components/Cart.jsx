import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <AiOutlineShoppingCart className="text-[24px]" />
      <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-3 left-3 text-center leading-5">
        {quantity}
      </span>
    </div>
  );
};

export default Cart;
