import React from 'react'
import './FormAddWine.css'
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import ToastAddWine from './ToastAddWine';

class FormAddWine extends React.Component {

    render() {
        return(
            <Container className="blocFormAddWine">
                <Row className="text-center">
                    <Col>
                        <h1 id="titleAddWine">Ajouter votre vin</h1>
                    </Col>
                </Row>
                <Form>
                    <Row className="d-flex justify-content-center">
                        <Col md="6">
                            <FormGroup>
                                <Label for="nameWine">Nom du vin</Label>
                                <Input type="text" name="nameWine" id="nameWine" placeholder="Entrez le nom du vin"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="descriptionWine">Description du vin</Label>
                                <Input type="textarea" name="descriptionWine" id="descriptionWine" placeholder="Entrez la description du vin (facultatif)"></Input>
                            </FormGroup>
                            <FormGroup tag='fieldset'>
                                <Label for="dishes">A servir avec :</Label>
                                <FormGroup check>
                                    <Label className="labelRadio" check>
                                        <Input value="entrée" type="radio" name="dishesChoice" />{' '}
                                            Entrée
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label className="labelRadio" check>
                                        <Input value="plat" type="radio" name="dishesChoice" />{' '}
                                            Plat
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label className="labelRadio" check>
                                        <Input value="dessert" type="radio" name="dishesChoice" />{' '}
                                            Dessert
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="rateWine">Votre note sur 5</Label>
                                <Input type="select" name="rate" id="rateWine">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="imgChoice">Fichier</Label>
                                <Input type="file" name="file" id="imgChoice" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="aboutYou">Vous</Label>
                                <Input type="text" name="yourName" id="nameUser" placeholder="Entrez votre nom"></Input>
                                <Input type="text" name="yourFirtName" id="firstNameUser" placeholder="Entrez votre prénom"></Input>
                            </FormGroup>
                            <FormGroup check>
                            </FormGroup>
                            <Row className="text-center">
                                <ToastAddWine/>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Container>
        ) 
    }
}

export default FormAddWine