import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Filter from '../Components/Filter'
import ProductBox from '../Components/Products'
import { getProductList } from '../redux/action'
import "./CategoryPage.css"
export default function CategoryPage({ }) {
    const searchProductList = useSelector(state => state.searchProductList)
    const dispatch = useDispatch()
    const { slug } = useParams()
    const productList = useSelector(state => state.productList)
    useEffect(() => {
        if (slug === 'thoi-trang-nu') dispatch(getProductList(8, 1))
        else if (slug === "thoi-trang-nam") dispatch(getProductList(94, 1))
        else (dispatch(getProductList(1992, 1)))
    }, [dispatch])

    console.log(productList)
    return (
        <div>

            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <Filter />
                    </Col>
                    <Col sm={9} className="display">
                        <ProductBox></ProductBox>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
