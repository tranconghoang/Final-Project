import "./Cart.css";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CartBox() {
const cart = useSelector(state => state.cart)

  return (

    <Container>
      
      <Row>
        <Col>SP</Col>
        <Col>DON GIA</Col>
        <Col>SL</Col>
        <Col>TONG TIEN</Col>
        <Col>CHINH SUA</Col>
      </Row>
{cart.map(item=>
 <div>
    <Row>
        <Col>{item.data.shop_info.shop_name}</Col>
      </Row>
      <Row>
        <Col>SP</Col>
        <Col>DON GIA</Col>
        <Col>{item.qty}</Col>
        <Col>TONG TIEN</Col>
        <Col>CHINH SUA</Col>
      </Row>
 </div>
)}
      
    </Container>
  );
}
