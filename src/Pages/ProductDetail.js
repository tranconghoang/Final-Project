import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import ProductInsight from '../Components/ProductInsight'
export default function ProductDetail() {
    return (
        <Container>
            <Row>
                <Col>
                <ProductInsight></ProductInsight>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}