import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductList } from "../redux/action";
import "./Products.css";

export default function ProductBox() {
  const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const dispatch = useDispatch();
  const searchProductList = useSelector((state) => state.searchProductList);
  const { slug } = useParams();
  const productList = useSelector((state) => state.productList);
  useEffect(() => {
    if (slug === "thoi-trang-nu") dispatch(getProductList(8, 1));
    else if (slug === "thoi-trang-nam") dispatch(getProductList(94, 1));
    else dispatch(getProductList(1992, 1));
  }, [dispatch]);
  console.log(productList);
  return (
    <Container className="background_color" fluid>
      <Row>
        <Col className="product_display">
          {searchProductList === undefined
            ? Array.isArray(productList) &&
              productList.map((item) => (
                <Link to={`Productinsight/${item.category_path}`}>
                  <Container className="product_border">
                    <div>
                      <img alt="aiz" src={item.image}></img>
                    </div>
                    <p className="product_name">{item.name}</p>
                    <div className="price">
                        <span className="new_price">
                          {priceFormatter.format(item.sale_price_min)}
                        </span>
                        {item.default_price_max > item.sale_price_min ? (
                          <span className="old_price">
                            {priceFormatter.format(item.default_price_max)}
                          </span>
                        ) : (
                          <p className="old_price"></p>
                        )}                      
                    </div>
                    <div className="place_sold">
                      <p>{item.shop.name}</p>
                      {item.sold > 0 && <p>Đã bán {item.sold}</p>}
                    </div>
                  </Container>
                </Link>
              ))
            : Array.isArray(searchProductList) &&
              searchProductList.map((item) => (
                <Link to={`Productinsight/${item.category_path}`}>
                  <Container className="product_border">
                    <div>
                      <img alt="aiz" src={item.image}></img>
                    </div>
                    <p className="product_name">{item.name}</p>
                    <div className="price">
                      <span className="new_price">
                        {priceFormatter.format(item.default_price_max)}
                      </span>
                      {item.sale_price_min < item.default_price_max ? (
                        <span className="old_price">
                          {priceFormatter.format(item.sale_price_min)}
                        </span>
                      ) : (
                        <p className="old_price"></p>
                      )}
                    </div>
                    <div className="place_sold">
                      <p>{item.shop.name}</p>
                      {item.sold > 0 && <p>Đã bán {item.sold}</p>}
                    </div>
                  </Container>
                </Link>
              ))}
        </Col>
      </Row>
    </Container>
  );
}
