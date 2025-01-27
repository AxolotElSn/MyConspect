import {Container, Row, Col, Carousel, Button, Form} from 'react-bootstrap';

const BootstrapTest = () => {
    return (
    <Container className='mt-5 mb-5'>
        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Col>
            <Col>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images.wallpaperscraft.com/image/single/lake_mountain_tree_36589_2650x1600.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://get.wallhere.com/photo/trees-water-clouds-lightning-nature-forest-Slovenia-1154285.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.zastavki.com/pictures/originals/2014/World___Canada_Lake_in_Banff_National_Park__Alberta__Canada_065436_.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
    )
}

export default BootstrapTest;