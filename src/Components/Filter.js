import { Accordion, Card, Button, Form, Col, Row } from "react-bootstrap"
import "./Filter.css"
import { XCircleFill } from 'react-bootstrap-icons'
export default function Filter() {
    return (
        <div className="filter">
            <Accordion defaultActiveKey="0">
                <Card>

                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Filtered
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="filtered">
                            <Button variant="secondary"><span>Fashion &nbsp;  &nbsp;</span><XCircleFill /></Button>
                            <Button variant="secondary"><span>Misc &nbsp;  &nbsp;</span><XCircleFill /></Button>
                            <Button variant="secondary" ><span>Below 200k &nbsp;  &nbsp;</span><XCircleFill /></Button>
                            <Button variant="secondary"><span>Over 50k &nbsp;  &nbsp;</span><XCircleFill /></Button>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>

                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Product Filter
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form.Check type="checkbox" label="Fashion" />
                            <Form.Check type="checkbox" label="Technology" />
                            <Form.Check type="checkbox" label="Vehicles" />
                            <Form.Check type="checkbox" label="Food" />
                            <Form.Check type="checkbox" label="Entertainment" />
                            <Form.Check type="checkbox" label="Movie Ticket" />
                            <Form.Check type="checkbox" label="Misc" />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Price Range
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Control type="number" placeholder="$ Min" />
                                    </Col>
                                    <Col>
                                        <Form.Control type="number" placeholder="$ Max" />
                                    </Col>
                                </Form.Row>
                            </Form>
                            <div className="price_button">
                                <Button>
                                    0-10k
                                </Button>
                                <Button>
                                    10-50k
                                </Button>
                                <Button>
                                    50-100k
                                </Button>
                                <Button>
                                    More than 100k
                                </Button>
                                <Button>
                                    Less than 200k
                                </Button>
                                <Button>
                                    Less than 1000k
                                </Button>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Button className="searchbtn" variant="primary">Search</Button>
        </div>
    )
}