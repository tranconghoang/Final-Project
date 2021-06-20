import "./Cart.css"
import React from 'react'
import { Container, Col, Row } from "react-bootstrap"
import CartItem from "./CartItem"

export default function CartBox() {
    return (
        <Container>
            <Row className="test">
                <Col  md={8}>
                    <Row className="shopName">
                        <img className="shopImg" src="https://lh3.googleusercontent.com/proxy/2WlGyQiCxgyYr2LvRiGRw4DmP7mc-Xaouq1_wS_cOKOF9fh_1BVZtOibnioOwzHS0-Ul1T4mSchO7oXVlmAqa9p0b-nJzxSUMy8nlKFuch1vMIo6Y_bBhrh-b08KC8M"></img>
                        <span>Nike Official Retailer</span>
                    </Row>
                    <CartItem  />
                    
                </Col>
                <Col className="productTotalBox" md={3}>
                    <Row className="totalrow row1">Total</Row>
                    <Row className="totalrow row2">$100.000</Row>
                    <Row className="totalrow row3"><button>Pay</button></Row>
                </Col>
            </Row>
        </Container>
    )
}