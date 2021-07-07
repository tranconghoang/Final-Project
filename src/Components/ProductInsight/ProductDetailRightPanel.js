import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addToCart,
  getColor,
  getProductDetail,
  getProductList,
} from "../../redux/action";
import { StarRatings } from "react-star-ratings";
import "./ProductDetailRightPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function RightPanel() {
  const plus = <FontAwesomeIcon icon={faPlus} />;
  const cart = useSelector((state) => state.cart);
  const { path } = useParams();
  console.log(path);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const [qty, setQty] = useState(1);

  const setQtyUp = () => setQty(qty + 1);
  const setQtyDown = () => setQty(qty - 1);
  useEffect(() => {
    dispatch(getProductDetail(path));
  }, [dispatch]);
  console.log(productDetail);
  const color = useSelector((state) => state.color);

  const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="right_panel_overall">
      <div className="dpb rp_product_name">
        {productDetail && productDetail.data.name}
      </div>
      <div>
        <div className="dpb rp_rating">
          Rating:
          {productDetail && productDetail.data.rating_info.total_rated} Stars
        </div>
        <div className="dpb rp_amount_sold">
          {" "}
          Amount sold: {productDetail && productDetail.data.order_count}
        </div>
      </div>
      <div className="dpb rp_price">
        {priceFormatter.format(productDetail && productDetail.data.final_price)}
      </div>
      <div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div
              style={{
                paddingRight: "2rem",
                maxWidth: "12rem",
                flex: "0 0 7rem",
              }}
            >
              {productDetail && productDetail.data.attribute[0]
                ? "Màu Sắc:"
                : ""}
            </div>
            <div className="color_options">
              {productDetail && productDetail.data.attribute[0] === undefined
                ? ""
                : productDetail &&
                  productDetail.data.attribute[0].value.map((item) => {
                    let isActive = item.name === color;
                    return (
                      <button
                        style={{
                          border: "1px solid black",
                          marginRight: "2px",
                          borderRadius: "5px",
                          margin: "10px",
                        }}
                        className={isActive ? "border_size" : ""}
                        onClick={() => dispatch(getColor(item.name))}
                      >
                        <div>{item.name}</div>
                      </button>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="qty_box">
          <div
            style={{
              paddingRight: "2rem",
              maxWidth: "12rem",
              flex: "0 0 7rem",
            }}
          >
            Số Lượng:
          </div>
          <div className="qty">
            <button onClick={setQtyUp}>+</button>
            <input value={qty} />
            <button onClick={setQtyDown}>-</button>
          </div>
          <div>
            <button
              onClick={() => dispatch(addToCart(cart, productDetail, qty))}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <button>Buy now</button>
        <button>Monthly payment</button>
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
