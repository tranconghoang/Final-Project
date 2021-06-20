import "./Cart.css"
import React from 'react'
import { Container, Col, Row } from "react-bootstrap"

export default function CartItem() {
    return (
        
                    <Row className="bottomRow">
                        <Col className="productInCart"  md={5}>
                            <img className="smallImageProduct" src="https://bizweb.dktcdn.net/100/336/177/products/1-cd2e20f6-958e-488e-ad1a-0fe3606c1905.jpg?v=1605764731000"></img>
                            <span className="productName">Air Jordan 1 Mocha</span>
                        </Col>
                        <Col className="productType"  md={2}>
                            <span>10 US</span>
                        </Col>
                        <Col className="productPrice"  md={1}>$100</Col>
                        <Col className="productQty" md={1}>Qty</Col>
                        <Col className="productEdit"md={3}>
                            <button>Edit</button>
                            <button>Delete</button>
                            </Col>
                    </Row>
                    
                
    )
}