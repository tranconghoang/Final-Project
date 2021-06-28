import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addToCart,
  getProductDetail,
  getProductList,
} from "../../redux/action";

export default function RightPanel() {
  const cart = useSelector((state) => state.cart);
  const { path } = useParams();
  console.log(path);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const [qty, setQty] = useState(0);

  const setQtyUp = () => setQty(qty + 1);
  const setQtyDown = () => setQty(qty - 1);
  useEffect(() => {
    dispatch(getProductDetail(path));
  }, [dispatch]);
  return (
    <div>
      <p>{productDetail && productDetail.data.name}</p>
      <div>
        <p>Rating</p>
        <p>Times of rating</p>
        <p> Amount sold</p>
      </div>
      <span>Price</span>
      <div>
        <div>color option</div>
      </div>
      <div>
        <button>Chat</button>
        <div>
          <button onClick={setQtyUp}>+</button>
          <input value={qty} />
          <button onClick={setQtyDown}>-</button>
        </div>
        <div>
          <button onClick={() => dispatch(addToCart(cart, productDetail, qty))}>
            ADD TO CART
          </button>
        </div>
        <button>Buy now</button>
        <div>buy by payment</div>
      </div>
      <div>
        <div>return in 48 hours</div>
        <div>0% interest</div>
        <div>Cash on delivery</div>
      </div>
      <div>backed by sendo</div>
    </div>
  );
}
