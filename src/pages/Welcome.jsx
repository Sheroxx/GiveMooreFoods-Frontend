import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import './style.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from '../api/api';




function ContainerPage() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategoryAPI();
    }, []);

    function getCategoryAPI() {
        api.get("/foods")
        .then((resp) => {
            console.log(resp.data);
            if(resp.data.success) {
                
            }
        })
    }

    return (
        <Container>
            <Row className='mb-5'>
                <Col md lg={12} className='d-flex justify-content-between'>
                    <h1>Welcome to <br></br>Give More Foods! 😋 </h1> 
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} size="2x" />
                </Col>
            </Row>
            <Row>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/all.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>All</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/burger.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>Hamburger</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/pizza.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>Pizza</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/salad.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>Salads</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/snack.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>Snack</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md lg={2}>
                    <ListGroup horizontal>
                        <ListGroup.Item className='cat-box'>
                            <a href="#">
                                <img className='img-fluid' src="./img/drinks.png" alt="" srcset="" width="100px" />
                                <h4 className='text-center mt-4'>Drinks</h4>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className='mb-5 mt-5'>
                <Col md lg={10} className='d-flex'>
                    <p className='fs-2'>All items </p>
                    <a href='#'><FontAwesomeIcon className='ms-4 mt-2' icon={faSliders} size="2x" /></a>
                </Col>
                <Col md lg={2}>
                    <p className='fs-4 d-inline-block'>View all</p>
                    <Button variant="primary" className='btn-cst float-end rounded-5'><FontAwesomeIcon icon={faArrowCircleRight} size="1x" /></Button>
                </Col>
                <hr class="border border-primary border-3 opacity-80 mb-4"></hr>
                <Row>
                    <Col md lg={4}>
                        <Card className='menu-list-box rounded-5' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/menu-burger-1.png" />
                            <Card.Body>
                                <Card.Title className='crd-title'>Pablo's Burger</Card.Title>
                                <Card.Text className='text-muted'>
                                    Reis, Zoodles, Garnelen, Sesam Dressing, Cheddar Cheese, Avocado, Meat
                                </Card.Text>
                                <p className='fs-2 d-inline-block'>$39</p>
                                <Button variant="primary" className='btn-cst float-end rounded-5'><FontAwesomeIcon icon={faPlus} size="1x" /></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md lg={4}>
                        <Card className='menu-list-box rounded-5' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/menu-burger-1.png" />
                            <Card.Body>
                                <Card.Title className='crd-title'>Münih Pizza</Card.Title>
                                <Card.Text className='text-muted'>
                                Reis, Zoodles, Garnelen, Sesam Dressing, Cheddar Cheese, Avocado, Meat
                                </Card.Text>
                                <p className='fs-2 d-inline-block'>$44</p>
                                <Button variant="primary" className='btn-cst float-end rounded-5'><FontAwesomeIcon icon={faPlus} size="1x" /></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md lg={4}>
                        <Card className='menu-list-box rounded-5' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./img/menu-burger-1.png" />
                            <Card.Body>
                                <Card.Title className='crd-title'>Chicken Salad</Card.Title>
                                <Card.Text className='text-muted'>
                                Reis, Zoodles, Garnelen, Sesam Dressing, Cheddar Cheese, Avocado, Meat
                                </Card.Text>
                                <p className='fs-2 d-inline-block'>$28</p>
                                <Button variant="primary" className='btn-cst float-end rounded-5'><FontAwesomeIcon icon={faPlus} size="1x" /></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default ContainerPage;