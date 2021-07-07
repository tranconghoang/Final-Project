import "./Cart.css";
import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CartBox() {
  
  const cart = useSelector((state) => state.cart);
  const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Container>
      {cart.map((item) => (
        <div>
          <Row>
            <Col>{item.data.shop_info.shop_name}</Col>
          </Row>
          <Row>
            <Col>{item.data.name}</Col>
            <Col>{priceFormatter.format(item.data.final_price)}</Col>
            <Col>{item.qty}</Col>
            <Col>{(priceFormatter.format(item.data.final_price*item.qty))}</Col>
            <Col>CHINH SUA</Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}
