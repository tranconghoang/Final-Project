import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail, getProductList } from "../redux/action";

export default function ProductInsight() {
    const { path } = useParams()
    console.log(path)
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)

    useEffect(() => {
        dispatch(getProductDetail(path))
    }, [dispatch])

    return (
    <div>
        <p>This goes the breadcrumbs </p>
        <Container>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
        {productDetail && productDetail.data.name}
    </div>
    )
}