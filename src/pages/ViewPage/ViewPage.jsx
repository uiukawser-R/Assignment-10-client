import React from 'react';
import Chefs from '../Home/Home/Chefs/Chefs';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import About from '../About/About';

const ViewPage = () => {
    return (
        <div className='mt-1'>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://live.staticflickr.com/65535/52919869853_29efeacd64_c.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className='fw-bold fs-1'> <span className='text-primary'>E</span>njoy <span className='text-success'>O</span>ur <span className='text-danger'>D</span>elicious <span className='text-primary'>R</span>ecipes</h1>
                            <p>A restaurant is a place where people go to enjoy a meal, typically with friends, family, or colleagues.</p>
                            <a href="/menu"><Button className='btn btn-warning'>Explor Our Recipes</Button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://live.staticflickr.com/65535/52919568619_fabfec9d6c_c.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className='fw-bold fs-1'> <span className='text-primary'>E</span>njoy <span className='text-success'>O</span>ur <span className='text-danger'>D</span>elicious <span className='text-primary'>R</span>ecipes</h1>
                            <p>A restaurant is a place where people go to enjoy a meal, typically with friends, family, or colleagues.</p>
                            <a href="/menu"><Button className='btn btn-warning'>Explor Our Recipes</Button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://live.staticflickr.com/65535/52918830257_4117cb6cbb_c.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='align-items-center'>
                            <h1 className='fw-bold fs-1'> <span className='text-primary'>E</span>njoy <span className='text-success'>O</span>ur <span className='text-danger'>D</span>elicious <span className='text-primary'>R</span>ecipes</h1>
                            <p>
                                A restaurant is a place where people go to enjoy a meal, typically with friends, family, or colleagues.
                            </p>
                            <a href="/menu"><Button className='btn btn-warning'>Explor Our Recipes</Button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section>
                <Container>
                <div className='row mt-5 d-flex justify-content-around'>
                    <Card style={{ width: '14rem' }} className='col-sm-3 mb-2  '>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52919857479_a085d51caf_q.jpg" />
                        <Card.Body>
                            <Card.Title>Master Chefs</Card.Title>
                            <Card.Text>
                            A Master Chef is a professional cook who has reached the highest level of culinary skill and expertise.
                            </Card.Text>
                          
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }} className='col-sm-3 mb-2 '>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52919115192_510dffbf4f_q.jpg" />
                        <Card.Body>
                            <Card.Title>Quality Food</Card.Title>
                            <Card.Text>
                            Quality food is not just about taste, but also about nutritional value, safety, and sustainability.
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }} className='col-sm-3 mb-2 '>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52919115202_5636126ab8_q.jpg" />
                        <Card.Body>
                            <Card.Title>Online Order</Card.Title>
                            <Card.Text>
                            Online ordering refers to the process of placing an order for goods or services using the mobile device.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '14rem' }} className='col-sm-3 mb-2 '>
                        <Card.Img variant="top" src="https://live.staticflickr.com/65535/52920156668_065fec4af6_q.jpg" />
                        <Card.Body>
                            <Card.Title>24/7 Service</Card.Title>
                            <Card.Text>
                            24/7 service refers to a business or organization that operates around the clock, 24 hours a day, 7 days a week.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
                </Container>
            </section>
            <div className='mt-5'>
                <Chefs></Chefs>
            </div>
            <div>
                <Container>
                <About></About>
                </Container>
            </div>
        </div>
    );
};

export default ViewPage;