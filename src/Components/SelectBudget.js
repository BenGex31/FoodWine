import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'

const SelectBudget = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Form>
                        <FormGroup>
                            <Label for="selectBudget">Selectionner votre budget :</Label>
                            <Input type="select" name="select" id="selectBudget">
                                <option>-</option>
                                <option>50€</option>
                                <option>100€</option>
                                <option>150€</option>
                                <option>200€</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SelectBudget