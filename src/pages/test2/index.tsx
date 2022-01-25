import React, { useState } from 'react';
import {  Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import DatePicker from 'react-datepicker';

const Index = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container fluid className='form-container h-100 d-flex align-items-center'>
            <Row className='rounded'>
                <Col xs={12}>
                    <div className='p-2'>
                    <Form>
                    <div>
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label for="name" className='fst-italic mb-1'>
                                        Your full given name:
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Ex. John Doe"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12} md={6}>
                                <FormGroup className=''>
                                    <Label for="dob" className='fst-italic mb-1'>
                                      Date of Birth
                                    </Label>
                                    <DatePicker
                                        className='form-control'
                                        dateFormat="MMMM d, yyyy"
                                        selected={startDate}
                                        onChange={(date : Date) => setStartDate(date)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm={12} md={6}>
                                <FormGroup>
                                    <Label for="citizenship" className='fst-italic mb-1'>
                                    Country of residence or citizenship:
                                    </Label>
                                    <Input
                                        id="citizenship"
                                        name="citizenship"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label for="school" className='fst-italic mb-1'>
                                    What school do you plan to attend?
                                    </Label>
                                    <Input
                                        id="school"
                                        name="school"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label for="name" className='fst-italic mb-1'>
                                    Please take a moment to describe area of study:
                                    </Label>
                                    <Input
                                        id="details"
                                        name="details"
                                        placeholder="Enter details here"
                                        type="textarea"
                                        rows={3}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>    
                </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Index;